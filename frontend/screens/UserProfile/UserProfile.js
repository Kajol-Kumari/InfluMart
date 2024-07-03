import * as React from "react";
import { Image } from "expo-image";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Depth1Frame17 from "../../components/Depth1Frame17";
import Depth1Frame16 from "../../components/Depth1Frame16";
import Depth1Frame15 from "../../components/Depth1Frame15";
import Depth1Frame14 from "../../components/Depth1Frame14";
import Depth1Frame13 from "../../components/Depth1Frame13";
import { Color, Padding, FontSize, FontFamily } from "../../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetInfluencerProfile } from "../../controller/InfluencerController";
import { useAlert } from "../../util/AlertContext";
import NavTab from "./NavTab";
import DropdownComponent from "./DropDownComponent";
import { formatNumber } from "../../helpers/GraphData";
import { getAllRequests } from "../../controller/connectionsController";
import ProductCard from "./ProductCard";

const UserProfile = ({ navigation }) => {
  const [influencer, setInfluencer] = React.useState(null);
  const [influencerId, setInfluencerId] = React.useState("");
  const { showAlert } = useAlert();
  const [tab, setTab] = React.useState("instagram");
  const [fbData, setFbData] = React.useState(null);
  const [instaData, setInstaData] = React.useState(null);
  const [ytData, setYtData] = React.useState(null);
  const [requests, setRequests] = React.useState([]);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const getData = async () => {
      const id = await AsyncStorage.getItem("influencerId");
      if (!id) {
        navigation.navigate("Homepage");
      } else {
        if(id == "undefined"){
          navigation.navigate("BrandorInfluencer");
          return;
        }
        setInfluencerId(id);
        GetInfluencerProfile(id, setInfluencer, showAlert);
        await getAllRequests(id, setRequests, showAlert)
      }
    };
    getData();
  }, [isFocused]);
  React.useEffect(() => {
    if (influencer) {
      const fb = influencer.fbData;
      const insta = influencer.instaData;
      const yt = influencer.ytData;
      if (fb) {
        let _fb = [
          {
            heading: "Followers",
            content: fb[0].followers ? formatNumber(fb[0].followers) : "N/A",
          },
          {
            heading: "Likes",
            content: fb[0].likes ? formatNumber(fb[0].likes) : "N/A",
          },
          {
            heading: "Price per Post",
            content: influencer.price.fb
              ? formatNumber(influencer.price[0].fb)
              : "N/A",
          },
        ];
        setFbData(_fb);
      }
      if (insta) {
        let _insta = [
          {
            heading: "Followers",
            content: insta[0].followers
              ? formatNumber(insta[0].followers)
              : "N/A",
          },
          {
            heading: "Avg Comments",
            content: insta[0].avgComments
              ? formatNumber(insta[0].avgComments)
              : "N/A",
          },
          {
            heading: "Avg Likes",
            content: insta[0].avgLikes
              ? formatNumber(insta[0].avgLikes)
              : "N/A",
          },
          {
            heading: "Avg ER",
            content: `${(insta[0].avgER * 1000).toPrecision(3)} %`,
          },
          {
            heading: "Avg Interactions",
            content: insta[0].avgInteractions
              ? formatNumber(insta[0].avgInteractions)
              : "N/A",
          },
          {
            heading: "Member Reachability",
            content: {
              bullet: insta[0].membersReachability?.map((item) => {
                return {
                  content: `${item.name} - ${(item.percent * 100).toPrecision(
                    3
                  )} %`,
                };
              }),
            },
          },
          {
            heading: "Member Cites",
            content: {
              bullet: insta[0].memberCities?.map((item) => {
                return {
                  content: `${item.category} - ${(item.value * 100).toPrecision(
                    3
                  )}%`,
                };
              }),
            },
          },
          {
            heading: "Ages",
            content: {
              bullet: insta[0].ages?.map((item) => {
                return {
                  content: `${item.name} - ${(item.percent * 100).toPrecision(
                    3
                  )}%`,
                };
              }),
            },
          },
          {
            heading: "Price per Post",
            content: `$ ${influencer.price[0].ig
              ? formatNumber(influencer.price[0].ig)
              : "N/A"
              }`,
          },
        ];
        setInstaData(_insta);
      }
      if (yt) {
        let _yt = [
          {
            heading: "Subscriber Count",
            content: yt[0].subscriberCount
              ? formatNumber(yt[0].subscriberCount)
              : "N/A",
          },
          {
            heading: "Video Count",
            content: yt[0].videoCount ? formatNumber(yt[0].videoCount) : "N/A",
          },
          {
            heading: "View Count",
            content: yt[0].viewCount ? formatNumber(yt[0].viewCount) : "N/A",
          },
          {
            heading: "Price per Video",
            content: influencer.price[0].yt
              ? formatNumber(influencer.price[0].yt)
              : "N/A",
          },
        ];
        setYtData(_yt);
      }
    }
  }, [influencer]);
  return (
    <View style={styles.userprofile}>
      <ScrollView>
        <View style={[styles.depth0Frame0, styles.frameLayout1]}>
          {influencer?.profileUrl &&<Depth1Frame17
            image={influencer?.profileUrl}
            username={influencer?.influencerName}
            category={influencer?.category}
          />}
          <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame01}>
              <View style={styles.depth3Frame01}>
                <Text style={styles.collaborationRequests}>
                  Collaboration Requests
                </Text>
              </View>
            </View>
          </View>
          {
            requests && requests.length > 0 ?
              <View showsVerticalScrollIndicator={false}>
                {requests != null &&
                  requests?.map((item, index) => (
                    <ProductCard
                      key={index}
                      imageSource={item.imageSource}
                      postTitle={item.postTitle}
                      postDate={item.postDate}
                      productName={item.productName}
                      id={item.requestId}
                      cardWidth="100%"
                      postTitleWidth="auto"
                      postDateWidth="auto"
                      productNameWidth="auto"
                      buttonWidth="auto"
                    />
                  ))}
              </View> :
              <View style={{width:"100%",padding:Padding.p_base}}>
                  <Text style={{color:Color.colorAliceblue}}>No request found.</Text>
              </View>
          }

          <NavTab setTab={setTab} tab={tab} />
          <ScrollView style={{ flex: 1, paddingHorizontal: Padding.p_base }} showsVerticalScrollIndicator={false}>
            {tab == "instagram"
              ? instaData &&
              instaData.map((item, index) => (
                <DropdownComponent
                  title={item.heading}
                  content={item.content}
                  key={index}
                />
              ))
              : tab == "youtube"
                ? ytData &&
                ytData.map((item, index) => (
                  <DropdownComponent
                    title={item.heading}
                    content={item.content}
                    key={index}
                  />
                ))
                : fbData &&
                fbData.map((item, index) => (
                  <DropdownComponent
                    title={item.heading}
                    content={item.content}
                    key={index}
                  />
                ))}
          </ScrollView>
          <View style={[styles.depth1Frame9, styles.frameLayout1]} />
        </View>
      </ScrollView>
      <Depth1Frame13 active={"list"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  frameLayout1: {
    width: "100%",
    backgroundColor: Color.colorBlack,
  },
  depth1FrameSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  frameFlexBox: {
    justifyContent: "space-between",
    height: 48,
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    width: 48,
    height: 48,
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    alignItems: "center",
    width: 48,
    flexDirection: "row",
  },
  depth5Frame0: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 48,
  },
  depth4Frame01: {
    flexDirection: "row",
  },
  depth3Frame1: {
    width: 310,
    paddingLeft: Padding.p_243xl,
  },
  depth2Frame0: {
    width: 358,
  },
  depth1Frame0: {
    height: 72,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.colorBlack,
    paddingHorizontal: Padding.p_base,
  },
  collaborationRequests: {
    fontSize: FontSize.size_3xl,
    letterSpacing: 0,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  depth3Frame01: {
    alignSelf: "stretch",
  },
  depth2Frame01: {
    width: "auto",
    height: 28,
  },
  depth1Frame2: {
    height: 60,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
  },
  depth1Frame9: {
    height: 20,
  },
  depth0Frame0: {
    paddingTop: 40,
    minHeight: 900,
    height: "100%",
    overflow: "hidden",
  },
  userprofile: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: "100%"
  },
});

export default UserProfile;
