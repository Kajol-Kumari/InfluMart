import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Depth1Frame4 from "../components/Depth1Frame4";
import Depth1Frame3 from "../components/Depth1Frame3";
import Depth1Frame2 from "../components/Depth1Frame2";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={[styles.depth0Frame0, styles.frameLayout1]}>
        <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock]}>
          <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
            <View style={[styles.depth3Frame0, styles.frameLayout]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/depth-4-frame-0.png")}
              />
            </View>
            <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
              <View style={[styles.depth4Frame01, styles.frameLayout]}>
                <View style={[styles.depth5Frame0, styles.frameLayout]} />
              </View>
            </View>
          </View>
        </View>
        <Depth1Frame4 />
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <View style={styles.depth3Frame01}>
              <Text style={styles.collaborationRequests}>
                Collaboration Requests
              </Text>
            </View>
          </View>
        </View>
        <Depth1Frame3
          depth3Frame0={require("../assets/depth-3-frame-0.png")}
          productPost="Product Post"
          dateJun15="Date: Jun 15"
          productToteBag="Product: Tote Bag"
        />
        <Depth1Frame3
          depth3Frame0={require("../assets/depth-3-frame-01.png")}
          productPost="Story Post"
          dateJun15="Date: Jul 12"
          productToteBag="Product: Yoga Mat"
          propWidth={215}
          propWidth1={127}
          propWidth2={127}
          propWidth3={127}
          propWidth4={127}
        />
        <Depth1Frame2 />
        <Depth1Frame1 />
        <Depth1Frame />
        <View style={[styles.depth1Frame9, styles.frameLayout1]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingLeft: 262,
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
    paddingTop: 20,
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
  galileoDesign: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default GalileoDesign;
