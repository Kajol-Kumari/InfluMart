import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={[styles.depth0Frame0, styles.frameLayout1]}>
        <Depth1Frame />
        <View style={styles.frameLayout}>
          <View style={styles.frameLayout}>
            <View style={[styles.depth3Frame0, styles.frameLayout]}>
              <Image
                style={[styles.depth4Frame0, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/depth-4-frame-01.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <Text
              style={[
                styles.welcomeToInflumarters,
                styles.youHaveSuccessfullyFlexBox,
              ]}
            >
              Welcome to InflumarterS!
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <Text style={[styles.youHaveSuccessfully, styles.getStartedLayout]}>
              You have successfully purchased the InflumarterS plan. You can
              start using it right away.
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame4}>
          <View style={[styles.depth2Frame03, styles.frameBg]}>
            <View style={[styles.depth3Frame01, styles.frameBg]}>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.getStarted, styles.getStartedLayout]}>
                  Get started
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame5, styles.frameLayout1]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  frameLayout: {
    height: 320,
    width: 390,
  },
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    width: 390,
  },
  youHaveSuccessfullyFlexBox: {
    textAlign: "center",
    color: Color.colorGray,
  },
  getStartedLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  frameBg: {
    backgroundColor: Color.colorCornflowerblue,
    overflow: "hidden",
  },
  depth4Frame0: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    overflow: "hidden",
  },
  depth3Frame0: {
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke,
    height: 320,
  },
  welcomeToInflumarters: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth1Frame2: {
    height: 60,
    paddingTop: Padding.p_xl,
  },
  youHaveSuccessfully: {
    fontFamily: FontFamily.manropeRegular,
    textAlign: "center",
    color: Color.colorGray,
  },
  depth1Frame3: {
    height: 88,
    paddingTop: 4,
  },
  getStarted: {
    color: Color.colorWhitesmoke,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth4Frame01: {
    alignSelf: "stretch",
  },
  depth3Frame01: {
    width: 91,
    height: 24,
  },
  depth2Frame03: {
    borderRadius: 24,
    width: 358,
    height: 48,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  depth1Frame4: {
    height: 72,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth1Frame5: {
    height: 20,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
  },
  galileoDesign: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default GalileoDesign;
