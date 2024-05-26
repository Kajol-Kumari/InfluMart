import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={[styles.depth0Frame0, styles.frameBg1]}>
        <Depth1Frame />
        <View style={styles.depth1Frame1}>
          <View style={[styles.depth2Frame0, styles.frameLayout]}>
            <View style={styles.frameLayout}>
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
            <Text style={styles.yourPaymentDidnt}>
              Your payment didn't go through.
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <Text style={[styles.pleaseCheckYour, styles.tryAgainTypo]}>
              Please check your information and try again.
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame4}>
          <View style={[styles.depth2Frame03, styles.frameBg]}>
            <View style={[styles.depth3Frame01, styles.frameBg]}>
              <View style={styles.depth2Frame01}>
                <Text style={[styles.tryAgain, styles.tryAgainTypo]}>
                  Try again
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame5, styles.frameBg1]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameBg1: {
    backgroundColor: Color.colorWhitesmoke,
    width: 390,
  },
  frameLayout: {
    height: 358,
    width: 358,
  },
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  tryAgainTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  frameBg: {
    backgroundColor: Color.colorCornflowerblue,
    overflow: "hidden",
  },
  depth4Frame0: {
    borderRadius: 12,
    overflow: "hidden",
  },
  depth2Frame0: {
    position: "absolute",
    top: 16,
    left: 16,
  },
  depth1Frame1: {
    height: 390,
    width: 390,
  },
  yourPaymentDidnt: {
    fontSize: 22,
    lineHeight: 28,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame01: {
    alignSelf: "stretch",
  },
  depth1Frame2: {
    height: 60,
    paddingTop: Padding.p_xl,
  },
  pleaseCheckYour: {
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorGray,
    fontSize: FontSize.size_base,
  },
  depth1Frame3: {
    height: 40,
    paddingTop: 4,
  },
  tryAgain: {
    color: Color.colorWhitesmoke,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth3Frame01: {
    width: 72,
    height: 24,
  },
  depth2Frame03: {
    borderRadius: 24,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    width: 358,
    backgroundColor: Color.colorCornflowerblue,
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
    width: 390,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
    width: 390,
  },
  galileoDesign: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default GalileoDesign;
