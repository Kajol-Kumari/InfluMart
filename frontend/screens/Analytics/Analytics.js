import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Depth1Frame7 from "../../components/Depth1Frame7";
import Depth1Frame9 from "../../components/Depth1Frame9";

import { transformFB, transformIG, transformYT } from "../../helpers/GraphData";
import { getSocialData } from "../../controller/socialController";
import { FBStats, InstaStats, YTStats } from "./components/stats/AllStats";
import { FBGraph, IgGraph, YTGraph } from "./components/MyGraphs/AllGraphs";
import { InstaDemo, YTDemo } from "./components/Images/AllImages";
import { AnalyticsStyles } from "./Analytics.scss";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAlert } from "../../util/AlertContext";
import { GetInfluencerProfile } from "../../controller/InfluencerController";
import {sendRequest} from "../../controller/connectionsController"

const AveragePrice = ({ platform, price }) => (
  <View style={styles.averagePriceContainer}>
    <View style={styles.platformContainer}>
      <Text style={styles.platformText}>{platform}</Text>
      <Text style={styles.priceText}>{price}</Text>
    </View>
    <View style={styles.priceContainer}>
      <Image
        style={styles.insightIcon}
        resizeMode="cover"
        source={require("../../assets/growth.png")}
      />
    </View>
  </View>
);

const Analytics = ({ route, navigation }) => {
  const [fbData, setFbData] = React.useState({});
  const [instaData, setInstaData] = React.useState({});
  const [ytData, setYtData] = React.useState({});
  const [socialData, setSocialData] = React.useState(false);
  const [tab, setTab] = React.useState("instagram");
  const { showAlert } = useAlert();
  const [popularPosts, setPopularPosts] = React.useState(null);
  const [influencerId, setInfluencerId] = React.useState("");
  const [influencer, setInfluencer] = React.useState(null);
  const clickedId = route.params?.influencerId
  const [idType,setIdType] = React.useState("") 

  React.useEffect(() => {
    const getData = async () => {
      const id = await AsyncStorage.getItem("influencerId");
      const _id = await AsyncStorage.getItem("brandId");
      if(_id){
        setIdType("brand")
      }
      if(id){
        setIdType("influencer")
      }

      if (!id && !clickedId) {
        navigation.navigate("Homepage");
      } else {
        let getId = clickedId || id
        setInfluencerId(getId); 
        GetInfluencerProfile(getId, setInfluencer, showAlert);
        getSocialData(getId, showAlert)
          .then((data) => {
            const transformedFb = transformFB(data);
            const transformedYt = transformYT(data);
            const transformedIg = transformIG(data);
            setFbData(transformedFb.fbdata);
            setInstaData(transformedIg.instadata);
            setYtData(transformedYt.ytdata);
            setSocialData(data);
            const sortedPosts = data?.instaData[
              data?.instaData.length - 1
            ].lastPosts.sort((a, b) => b.likes - a.likes);
            const popularPosts = sortedPosts?.slice(0, 2);
            let popular = popularPosts?.map((post) => ({
              title: post.text,
              url: post.url,
              platform: "Instagram",
            }));
            const sortedYtPosts = data?.ytData[
              data?.ytData.length - 1
            ].popularVideos?.data?.sort((a, b) => b.viewCount - a.viewCount);
            const popularYtPosts = sortedYtPosts?.slice(0, 2);
            popularYtPosts?.map((item) => {
              popular.push({
                title: item.title,
                url: `${item.videoId}`,
                platform: "YouTube",
              });
            });
            setPopularPosts(popular);
          })
          .catch((error) => console.log(error));
      }
    };
    getData();
  }, [influencerId, clickedId]);

  const processTag = (tag) => {
    const splitTag = tag.split(/[-\s]/);
    return splitTag.length > 1 ? splitTag[0] : tag;
  };

  const handleConnect = async ()=>{
    const brandId = await AsyncStorage.getItem("brandId")
    if(brandId){
      await sendRequest(brandId,clickedId,showAlert)
    }
  }
  const handleBack = async () => {
    const brand = await AsyncStorage.getItem("brandId")
    const influencer = await AsyncStorage.getItem("influencerId")
    if (brand) {
      navigation.navigate('InfluencersList')
    } else if (influencer) {
      navigation.navigate('UserProfile')
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuBar} onPress={() => handleBack()}>
        <Depth1Frame7
          depth4Frame0={require("../../assets/depth-4-frame-010.png")}
          requestDetails={`Influencer`}
          depth3Frame0BackgroundColor="#fff"
          requestDetailsWidth={"auto"}
          depth4Frame0FontFamily="BeVietnamPro-Bold"
          depth4Frame0Color="#121217"
        />
      </TouchableOpacity>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.analytics}>
          <View style={styles.depth0Frame0}>
            {influencer?.profileUrl && <Depth1Frame9
              image={influencer?.profileUrl}
              username={influencer?.userName}
              location={influencer?.location}
              category={influencer?.category}
            />}
            <View style={styles.recentContainer}>
              <Text style={styles.recentText}>Frequently used hashtags</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.tagContainer}>
                {socialData?.instaData != undefined && socialData?.instaData[0]?.tags != undefined &&
                  socialData?.instaData[0]?.tags?.map((tag, index) => (
                    <View key={index} style={styles.tagItem}>
                      <Text style={styles.tagText}>{`#${socialData?.instaData[0]?.tags != undefined && processTag(tag)}`}</Text>
                    </View>
                  ))}
              </View>
            </ScrollView>
            <View style={styles.nav}>
              <TouchableOpacity onPress={() => setTab("instagram")}>
                <View style={styles.navItems}>
                  <Text
                    style={[
                      styles.navText,
                      tab == "instagram" && styles.navSelectText,
                    ]}
                  >
                    Instagram
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTab("youtube")}>
                <View style={styles.navItems}>
                  <Text
                    style={[
                      styles.navText,
                      tab == "youtube" && styles.navSelectText,
                    ]}
                  >
                    YouTube
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTab("facebook")}>
                <View style={styles.navItems}>
                  <Text
                    style={[
                      styles.navText,
                      tab == "facebook" && styles.navSelectText,
                    ]}
                  >
                    Facebook
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {tab === "instagram" ? (
              <>{instaData && <InstaStats instaData={instaData} />}</>
            ) : tab === "youtube" ? (
              <>{ytData && <YTStats ytData={ytData} />}</>
            ) : tab === "facebook" ? (
              <>{fbData && <FBStats fbData={fbData} />}</>
            ) : null}
            <View style={styles.depth1Frame4}>
              <View style={styles.depth2Frame02}>
                <View style={[styles.depth3Frame09, styles.depth3FramePosition]}>
                  <View style={styles.depth4Frame09}>
                    <View style={styles.depth5Frame0}>
                      <Text
                        style={[
                          styles.pastCollaborations,
                          styles.contactInfoTypo,
                        ]}
                      >
                        Collaborations
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.depth3Frame1, styles.depth3FramePosition]}>
                  <View style={styles.depth4Frame010}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.contactInfo, styles.cartier1Clr]}>
                        Contact
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {socialData &&
              (tab === "instagram" ? (
                <>{instaData && <IgGraph instaData={instaData} />}</>
              ) : tab === "youtube" ? (
                <>{ytData && <YTGraph ytData={ytData} />}</>
              ) : tab === "facebook" ? (
                <>{fbData && <FBGraph fbData={fbData} />}</>
              ) : null)}
            <View style={styles.recentContainer}>
              <Text style={styles.recentText}>Recent Highlights</Text>
            </View>
            <ScrollView
              style={styles.ScrollCards}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {popularPosts &&
                popularPosts.map((item, index) =>
                  item.platform == "Instagram"
                    ? tab != "youtube" && (
                      <View key={index} style={styles.frame}>
                        <InstaDemo key={index} url={item.url} />
                      </View>
                    )
                    : tab == "youtube" && (
                      <View key={index} style={styles.frame}>
                        <YTDemo key={index} videoId={item.url} />
                      </View>
                    )
                )}
            </ScrollView>
            <View style={styles.averagePriceSection}>
              <Text style={styles.averagePriceHeaderText}>
                Average Price Per Post
              </Text>
              <AveragePrice platform="Instagram" price={`$ ${influencer?.price && influencer?.price[0]?.ig || "N/A"}`} />
              <AveragePrice platform="YouTube" price={`$ ${influencer?.price && influencer?.price[0]?.yt || "N/A"}`} />
              <AveragePrice platform="TikTok" price={`$ ${influencer?.price && influencer?.price[0]?.tt || "N/A"}`} />
            </View>
            {idType=="brand"?<View style={styles.connectContainer}>
              <TouchableOpacity onPress={()=> handleConnect()}>
                <View style={styles.connectButton}>
                  <Text style={styles.connectText}>{`Connect with ${influencer?.userName}`}</Text>
                </View>
              </TouchableOpacity>
            </View>:null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(AnalyticsStyles);

export default Analytics;
