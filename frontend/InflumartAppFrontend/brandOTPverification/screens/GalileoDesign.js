import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Depth1Frame from "../components/Depth1Frame";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
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
        <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <Text style={styles.createAnAccount}>Create an account</Text>
          </View>
        </View>
        <Depth1Frame
          email="Email"
          email1="Email"
          depth6Frame1={require("../assets/depth-6-frame-1.png")}
        />
        <Depth1Frame
          email="Password"
          email1="Password"
          depth6Frame1={require("../assets/depth-6-frame-11.png")}
          propWidth={74}
        />
        <Depth1Frame
          email="Brand Type"
          email1="Brand Type"
          depth6Frame1={require("../assets/depth-6-frame-12.png")}
          propWidth={87}
        />
        <Depth1Frame
          email="Username"
          email1="Username"
          depth6Frame1={require("../assets/depth-6-frame-1.png")}
          propWidth={79}
        />
        <View style={styles.depth1Frame6}>
          <View style={styles.depth2Frame02}>
            <View style={styles.depth3FrameLayout}>
              <View style={[styles.depth4Frame02, styles.depth4FrameLayout]}>
                <View style={[styles.depth5Frame01, styles.frameBg1]}>
                  <View style={styles.depth6Frame0}>
                    <Text style={[styles.generateOtp, styles.signUpTypo]}>
                      Generate OTP
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame11, styles.depth3FrameLayout]}>
              <View style={[styles.depth4Frame03, styles.frameBg]}>
                <View style={[styles.depth5Frame02, styles.frameBg]}>
                  <View style={styles.depth6Frame0}>
                    <Text style={[styles.signUp, styles.signUpTypo]}>
                      Sign Up
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame7} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  depth4FrameLayout: {
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
    paddingHorizontal: Padding.p_base,
  },
  frameBg1: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  signUpTypo: {
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth3FrameLayout: {
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    width: 358,
  },
  frameBg: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    alignItems: "center",
    flexDirection: "row",
    width: 48,
  },
  depth5Frame0: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  depth4Frame01: {
    flexDirection: "row",
    width: 48,
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
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: Padding.p_base,
  },
  createAnAccount: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth1Frame1: {
    height: 60,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    alignItems: "center",
  },
  generateOtp: {
    color: Color.colorGray,
  },
  depth6Frame0: {
    alignSelf: "stretch",
  },
  depth5Frame01: {
    width: 98,
    height: 21,
  },
  depth4Frame02: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  signUp: {
    color: Color.colorWhitesmoke,
  },
  depth5Frame02: {
    width: 54,
    height: 21,
  },
  depth4Frame03: {
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
    paddingHorizontal: Padding.p_base,
  },
  depth3Frame11: {
    marginTop: 12,
  },
  depth2Frame02: {
    height: 92,
    alignItems: "center",
    width: 358,
  },
  depth1Frame6: {
    height: 116,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth1Frame7: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  depth0Frame0: {
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
    height: 844,
  },
  galileoDesign: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default GalileoDesign;
