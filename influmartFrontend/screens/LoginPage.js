import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Depth1Frame6 from "../components/Depth1Frame6";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.loginpage}>
        <View style={styles.depth0Frame0}>
        <TouchableOpacity onPress={() => navigation.navigate('BrandorInfluencer')}>

          <View style={styles.depth1Frame0}>
            <View style={[styles.depth2Frame0, styles.frameFlexBox]}>

              <View style={[styles.depth3Frame0, styles.frameLayout]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-4-frame-07.png")}
                />
              </View>
              <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
                <View style={[styles.depth4Frame01, styles.frameLayout]}>
                  <View style={[styles.depth5Frame0, styles.frameLayout]} />
                </View>
              </View>
            </View>
          </View>
          </TouchableOpacity>

          <View style={styles.depth1Frame1}>
            <View style={styles.depth2Frame01}>
              <Text style={[styles.welcomeBack, styles.getReadyToFlexBox]}>
                Welcome back!
              </Text>
            </View>
          </View>
          <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame01}>
              <Text style={[styles.getReadyTo, styles.getReadyToFlexBox]}>
                Get ready to start earning. Please log in to continue.
              </Text>
            </View>
          </View>
          <Depth1Frame6 userEmail="Email" />
          <Depth1Frame6 userEmail="Password" propWidth={'auto'} />
          <View style={[styles.depth1Frame5, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame01}>
              <Text style={[styles.forgotYourPassword, styles.logInTypo]}>
                Forgot your password?
              </Text>
            </View>
          </View>
          <View style={styles.depth1Frame6}>
            <View style={styles.depth2Frame04}>
              <View style={styles.depth3FrameLayout}>
                
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <View style={[styles.depth4Frame02, styles.depth4FrameLayout]}>
                    <View style={[styles.depth5Frame01, styles.frameBg1]}>
                      <View style={styles.depth2Frame01}>
                        <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.depth3Frame11, styles.depth3FrameLayout]}>
              <TouchableOpacity onPress={() => navigation.navigate('InfluencerRegistrationForm')}>

                <View style={[styles.depth4Frame03, styles.frameBg]}>
                  <View style={[styles.depth5Frame02, styles.frameBg]}>
                    <View style={styles.depth2Frame01}>
                      <Text style={[styles.signUp, styles.logInTypo]}>
                        Sign Up
                      </Text>
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame7} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
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
  getReadyToFlexBox: {
    textAlign: "left",
    color: Color.colorGray_400,
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
    paddingHorizontal: Padding.p_base,
  },
  frameBg1: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  depth3FrameLayout: {
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    width: 358,
  },
  frameBg: {
    backgroundColor: Color.colorAliceblue,
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
    paddingHorizontal: Padding.p_base,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  welcomeBack: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame01: {
    alignSelf: "stretch",
  },
  depth1Frame1: {
    height: 'auto',
    paddingTop: Padding.p_xl,
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
    height: 'auto',
  },
  forgotYourPassword: {
    color: Color.colorSteelblue_200,
    fontFamily: FontFamily.interRegular,
  },
  depth1Frame5: {
    height: 'auto',
  },
  logIn: {
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth5Frame01: {
    width: 'auto',
    height: 21,
  },
  depth4Frame02: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  signUp: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth5Frame02: {
    width: 'auto',
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
  depth2Frame04: {
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
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  loginpage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default LoginPage;
