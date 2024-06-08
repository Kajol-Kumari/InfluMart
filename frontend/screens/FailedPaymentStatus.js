import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Depth1Frame7 from "../components/Depth1Frame7";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";

const FailedPaymentStatus = () => {
  return (
    <View style={styles.failedpaymentstatus}>
      <View style={[styles.depth0Frame0, styles.frameBg1]}>
        <Depth1Frame7
          depth4Frame0={require("../assets/depth-4-frame-07.png")}
          requestDetails="Payment failed"
          depth3Frame0BackgroundColor="#f7fafa"
          requestDetailsWidth={126}
          depth4Frame0FontFamily="Manrope-Bold"
          depth4Frame0Color="#0d141c"
        />
        <View style={styles.depth1Frame1}>
          <View style={[styles.depth2Frame0, styles.frameLayout]}>
            <View style={styles.frameLayout}>
              <Image
                style={[styles.depth4Frame0, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/depth-4-frame-09.png")}
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
    backgroundColor: Color.colorWhitesmoke_200,
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
    borderRadius: Border.br_xs,
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
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    textAlign: "left",
    color: Color.colorGray_400,
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
    color: Color.colorGray_400,
    fontSize: FontSize.size_base,
  },
  depth1Frame3: {
    height: 40,
    paddingTop: Padding.p_9xs,
  },
  tryAgain: {
    color: Color.colorWhitesmoke_200,
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
    borderRadius: Border.br_5xl,
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
  failedpaymentstatus: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default FailedPaymentStatus;
