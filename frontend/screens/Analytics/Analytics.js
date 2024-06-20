import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Depth1Frame7 from "../../components/Depth1Frame7";
import Depth1Frame9 from "../../components/Depth1Frame9";

import { transformFB, transformIG, transformYT } from "../../helpers/GraphData";
import { getSocialData } from "../../controller/socialController";
import { FBStats, InstaStats, YTStats } from "./components/stats/AllStats";
import { FBGraph, IgGraph, YTGraph } from "./components/MyGraphs/AllGraphs";
import { InstaDemo, YTDemo } from "./components/Images/AllImages";
import { AnalyticsStyles } from "./Analytics.scss";
//import { data } from "./test";

const Analytics = ({ route, navigation }) => {
  const [fbData, setFbData] = React.useState({});
  const [instaData, setInstaData] = React.useState({});
  const [ytData, setYtData] = React.useState({});
  const [socialData, setSocialData] = React.useState(false);
  const [tab, setTab] = React.useState("instagram");
  const [popularPosts, setPopularPosts] = React.useState(null);

  React.useEffect(() => {
    const userId = "666fecab7b21456e84d3c7e2";
    getSocialData(userId).then((data) => {
    //const getData = () => {
      const transformedFb = transformFB(data);
      const transformedYt = transformYT(data);
      const transformedIg = transformIG(data);
      setFbData(transformedFb.fbdata);
      setInstaData(transformedIg.instadata);
      setYtData(transformedYt.ytdata);
      setSocialData(data);
      const sortedPosts = data.instaData[
        data.instaData.length - 1
      ].lastPosts.sort((a, b) => b.likes - a.likes);
      const popularPosts = sortedPosts.slice(0, 2);
      let popular = popularPosts.map((post) => ({
        title: post.text,
        url: post.url,
        platform: "Instagram",
      }));
      const sortedYtPosts = data.ytData[
        data.ytData.length - 1
      ].popularVideos.data.sort((a, b) => b.viewCount - a.viewCount);
      const popularYtPosts = sortedYtPosts.slice(0, 2);
      popularYtPosts.map((item) => {
        popular.push({
          title: item.title,
          url: `${item.videoId}`,
          platform: "YouTube",
        });
      });
      setPopularPosts(popular);
    }
    ).catch((error) => console.log(error));
    //getData();
  }, []);

  const processTag = (tag) => {
    const splitTag = tag.split(/[-\s]/);
    return splitTag.length > 1 ? splitTag[0] : tag;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.analytics}>
        <View style={styles.depth0Frame0}>
          <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
            <Depth1Frame7
              depth4Frame0={require("../../assets/depth-4-frame-010.png")}
              requestDetails="Caroline, Influencer"
              depth3Frame0BackgroundColor="#fff"
              requestDetailsWidth={173}
              depth4Frame0FontFamily="BeVietnamPro-Bold"
              depth4Frame0Color="#121217"
            />
          </TouchableOpacity>
          <Depth1Frame9 />
          <View style={styles.recentContainer}>
            <Text style={styles.recentText}>Frequently used hashtags</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.tagContainer}>
              {socialData &&
                socialData.instaData[0].tags.map((tag, index) => (
                  <View key={index} style={styles.tagItem}>
                    <Text style={styles.tagText}>{`#${processTag(tag)}`}</Text>
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
          {/* Charts */}

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
          <View style={styles.connectContainer}>
            <TouchableOpacity>
              <View style={styles.connectButton}>
                <Text style={styles.connectText}>Connect with Caroline</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(AnalyticsStyles);

export default Analytics;
