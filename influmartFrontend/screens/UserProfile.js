import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Depth1Frame17 from "../components/Depth1Frame17";
import Depth1Frame16 from "../components/Depth1Frame16";
import Depth1Frame15 from "../components/Depth1Frame15";
import Depth1Frame14 from "../components/Depth1Frame14";
import Depth1Frame13 from "../components/Depth1Frame13";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const UserProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.userprofile}>
        <View style={[styles.depth0Frame0, styles.frameLayout1]}>
          <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock]}>
            <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
              <View style={[styles.depth3Frame0, styles.frameLayout]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-4-frame-018.png")}
                />
              </View>
              <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
                <View style={[styles.depth4Frame01, styles.frameLayout]}>
                  <View style={[styles.depth5Frame0, styles.frameLayout]} />
                </View>
              </View>
            </View>
          </View>
          <Depth1Frame17 />
          <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame01}>
              <View style={styles.depth3Frame01}>
                <Text style={styles.collaborationRequests}>
                  Collaboration Requests
                </Text>
              </View>
            </View>
          </View>
          <Depth1Frame16
            depth3Frame0={require("../assets/depth-3-frame-07.png")}
            productPost="Product Post"
            dateJun15="Date: Jun 15"
            productToteBag="Product: Tote Bag"
          />
          <Depth1Frame16
            depth3Frame0={require("../assets/depth-3-frame-08.png")}
            productPost="Story Post"
            dateJun15="Date: Jul 12"
            productToteBag="Product: Yoga Mat"
            propWidth={215}
            propWidth1={127}
            propWidth2={127}
            propWidth3={127}
            propWidth4={127}
          />
          <Depth1Frame15 />
          <Depth1Frame14 />
          <Depth1Frame13 />
          <View style={[styles.depth1Frame9, styles.frameLayout1]} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  frameLayout1: {
    width: 390,
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
    width: 255,
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
    height: 1158,
    overflow: "hidden",
  },
  userprofile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default UserProfile;
