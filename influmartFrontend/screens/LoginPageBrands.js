import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView,TouchableOpacity } from "react-native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';


const LoginPageBrand = () => {
    const navigation = useNavigation();

  return (
    <ScrollView style={styles.loginpagebrand} contentContainerStyle={styles.scrollViewContent}>

    <View style={styles.loginpagebrand}>
      <View style={[styles.depth0Frame0, styles.frameLayout2]}>
      <TouchableOpacity onPress={() => navigation.navigate('BrandorInfluencer')}>

        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.frameFlexBox]}>

            <View style={[styles.depth3Frame0, styles.frameLayout1]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/depth-4-frame-07.png")}
              />
            </View>
            <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
              <View style={[styles.depth4Frame01, styles.frameLayout1]}>
                <View style={[styles.depth5Frame0, styles.frameLayout1]} />
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.depth1Frame1}>
          <View style={styles.depth2Frame01}>
            <Text style={styles.welcomeBack}>Welcome back!</Text>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <Text style={styles.getReadyTo}>
              Get Influencers of your choice. Please log in to your brand account to continue.
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame3}>
          <View style={[styles.depth2Frame03, styles.frameLayout]}>
            <View style={styles.frameLayout}>
              <View style={[styles.depth4Frame02, styles.frameLayout]}>
                <View style={styles.depth5Frame01}>
                  <View style={styles.depth6Frame0}>
                    <View style={styles.depth2Frame01}>
                      <Text style={[styles.email, styles.emailClr]}>Email</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame3}>
          <View style={[styles.depth2Frame03, styles.frameLayout]}>
            <View style={styles.frameLayout}>
              <View style={[styles.depth4Frame02, styles.frameLayout]}>
                <View style={styles.depth5Frame01}>
                  <View style={styles.depth6Frame01}>
                    <View style={styles.depth2Frame01}>
                      <Text style={[styles.email, styles.emailClr]}>
                        Password
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame5, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <Text style={[styles.forgotYourPassword, styles.logInTypo]}>
              Forgot your password?
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame6}>
          <View style={styles.depth2Frame06}>
          <TouchableOpacity onPress={() => navigation.navigate('BrandProfile')}>

            <View style={styles.depth3FrameLayout}>
              <View style={[styles.depth4Frame04, styles.depth4FrameLayout]}>
                <View style={[styles.depth5Frame03, styles.frameBg1]}>
                  <View style={styles.depth2Frame01}>
                    <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
                  </View>
                </View>
              </View>
            </View>
            </TouchableOpacity>
            <View style={[styles.depth3Frame11, styles.depth3FrameLayout]}>
            <TouchableOpacity onPress={() => navigation.navigate('BrandRegistrationForm')}>

              <View style={[styles.depth4Frame05, styles.frameBg]}>
                <View style={[styles.depth5Frame04, styles.frameBg]}>
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
        <View style={[styles.depth1Frame7, styles.frameLayout2]} />
      </View>
    </View>
        </ScrollView>

  );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
      },
    
  frameLayout2: {
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  frameFlexBox: {
    justifyContent: "space-between",
    height: 48,
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout1: {
    width: 48,
    height: 48,
  },
  depth1FrameSpaceBlock: {
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  frameLayout: {
    height: 56,
    width: 358,
  },
  emailClr: {
    color: Color.colorSteelblue_200,
    fontFamily: FontFamily.interRegular,
  },
  logInTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  depth4FrameLayout: {
    paddingVertical: 0,
    height: 40,
    justifyContent: "center",
    borderRadius: Border.br_xs,
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
  },
  depth5Frame0: {
    justifyContent: "flex-end",
    alignItems: "center",
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
    paddingBottom: 8,
    paddingHorizontal: Padding.p_base,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  welcomeBack: {
    fontSize: 22,
    lineHeight: 28,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame01: {
    alignSelf: "stretch",
  },
  depth1Frame1: {
    height: 'auto',
    paddingTop: 20,
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  getReadyTo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_400,
  },
  depth1Frame2: {
    height: 'auto',
  },
  email: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorSteelblue_200,
    textAlign: "left",
  },
  depth6Frame0: {
    width: 'auto',
    height: 24,
    overflow: "hidden",
  },
  depth5Frame01: {
    borderStyle: "solid",
    borderColor: Color.colorLavender,
    borderWidth: 1,
    padding: Padding.p_mini,
    borderRadius: Border.br_xs,
    height: 56,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 358,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth4Frame02: {
    alignItems: "center",
    flexDirection: "row",
  },
  depth2Frame03: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  depth1Frame3: {
    height: 80,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth6Frame01: {
    width: 'auto',
    height: 24,
    overflow: "hidden",
  },
  forgotYourPassword: {
    color: Color.colorSteelblue_200,
    fontFamily: FontFamily.interRegular,
  },
  depth1Frame5: {
    height: 37,
  },
  logIn: {
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  depth5Frame03: {
    width: 'auto',
    height: 21,
  },
  depth4Frame04: {
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
  depth5Frame04: {
    width: 'auto',
    height: 21,
  },
  depth4Frame05: {
    paddingVertical: 0,
    height: 40,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    width: 358,
    paddingHorizontal: Padding.p_base,
  },
  depth3Frame11: {
    marginTop: 12,
  },
  depth2Frame06: {
    height: 92,
    alignItems: "center",
    width: 358,
  },
  depth1Frame6: {
    height: 116,
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth1Frame7: {
    height: 20,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
  },
  loginpagebrand: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default LoginPageBrand;
