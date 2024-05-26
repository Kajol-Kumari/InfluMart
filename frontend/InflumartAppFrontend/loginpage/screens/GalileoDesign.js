import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import NestedFormContainer from "../components/NestedFormContainer";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
        <NestedFormContainer />
        <View style={styles.depth1Frame1}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.welcomeBack, styles.getReadyToFlexBox]}>
              Welcome back!
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.getReadyTo, styles.getReadyToFlexBox]}>
              Get ready to start earning. Please log in to continue.
            </Text>
          </View>
        </View>
        <Depth1Frame userEmail="Email" />
        <Depth1Frame userEmail="Password" propWidth={74} />
        <View style={[styles.depth1Frame5, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.forgotYourPassword, styles.logInTypo]}>
              Forgot your password?
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame6}>
          <View style={styles.depth2Frame03}>
            <View style={styles.depth3FrameLayout}>
              <View style={[styles.depth4Frame0, styles.depth4FrameLayout]}>
                <View style={[styles.depth5Frame0, styles.frameBg1]}>
                  <View style={styles.depth2Frame0}>
                    <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
              <View style={[styles.depth4Frame01, styles.frameBg]}>
                <View style={[styles.depth5Frame01, styles.frameBg]}>
                  <View style={styles.depth2Frame0}>
                    <Text style={[styles.signUp, styles.logInTypo]}>
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
  getReadyToFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  depth1FrameSpaceBlock: {
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  logInTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  depth4FrameLayout: {
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    height: 40,
    alignItems: "center",
    width: 358,
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  frameBg1: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  depth3FrameLayout: {
    height: 40,
    width: 358,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameBg: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  welcomeBack: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame0: {
    alignSelf: "stretch",
  },
  depth1Frame1: {
    height: 60,
    paddingTop: 20,
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  getReadyTo: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
  },
  depth1Frame2: {
    height: 64,
  },
  forgotYourPassword: {
    color: Color.colorSteelblue,
    fontFamily: FontFamily.interRegular,
  },
  depth1Frame5: {
    height: 37,
  },
  logIn: {
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth5Frame0: {
    width: 43,
    height: 21,
  },
  depth4Frame0: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  signUp: {
    color: Color.colorGray,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth5Frame01: {
    width: 54,
    height: 21,
  },
  depth4Frame01: {
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    height: 40,
    alignItems: "center",
    width: 358,
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  depth3Frame1: {
    marginTop: 12,
  },
  depth2Frame03: {
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
    height: 844,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  galileoDesign: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default GalileoDesign;
