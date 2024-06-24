import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity,ScrollView } from "react-native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const AccountCreatedSuccessfullyNoti = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.accountcreatedsuccessfullynoti}>
      <View style={[styles.depth0Frame0, styles.frameLayout]}>
      <TouchableOpacity style={{width:"100%"}} onPress={() => navigation.navigate('Homepage')}>

        <View style={[styles.depth1Frame0, styles.depth1FrameLayout]}>
          <View style={[styles.depth2Frame0, styles.depth2FrameLayout]}>
            <View style={[styles.depth3Frame1, styles.depth3FrameFlexBox]}>
              <View style={styles.depth4Frame0}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.accountCreated, styles.clickHereToTypo]}>
                    Account Created
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <Text style={[styles.yourAccountHas, styles.yourAccountHasFlexBox]}>
              Your account has been created successfully
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <Text style={[styles.clickTheButton, styles.clickLayout]}>
              Click the button below to login with your new account.
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame3, styles.depth3FrameFlexBox]}>
          <View style={[styles.depth2Frame03, styles.depth2FrameLayout]}>
            <View style={[styles.depth3Frame01, styles.depth3FrameFlexBox]}>
            <TouchableOpacity style={{width:"100%"}} onPress={() => navigation.navigate('LoginPageBrands')}>

              <View style={[styles.depth4Frame02, styles.frameBg]}>
                <View style={[styles.depth5Frame01, styles.frameBg]}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.clickHereTo, styles.clickLayout]}>
                      Click here to login
                    </Text>
                  </View>
                </View>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame4, styles.frameLayout]} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  depth1FrameLayout: {
    paddingHorizontal: Padding.p_base,
    height: 72,
    width: "100%",
  },
  depth2FrameLayout: {
    height: 48,
    width: "100%",
  },
  depth3FrameLayout: {
    width: 48,
    height: 48,
  },
  depth3FrameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  clickHereToTypo: {
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_xs,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    width: "100%",
  },
  yourAccountHasFlexBox: {
    textAlign: "center",
    color: Color.colorGray_400,
  },
  clickLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  frameBg: {
    backgroundColor: Color.colorCornflowerblue,
    overflow: "hidden",
  },
  depth3Frame0: {
    alignItems: "center",
  },
  accountCreated: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.colorGray_400,
    textAlign: "left",
    letterSpacing: 0,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 'auto',
    height: 23,
    overflow: "hidden",
  },
  depth3Frame1: {
    width: "100%",
    height: 23,
    alignItems: "center",
  },
  depth4Frame01: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  depth3Frame2: {
    flexDirection: "row",
  },
  depth2Frame0: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  depth1Frame0: {
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_base,
    height: 72,
  },
  yourAccountHas: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -1,
    lineHeight: 35,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "center",
  },
  depth2Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth1Frame1: {
    height: 'auto',
    paddingTop: Padding.p_xl,
  },
  clickTheButton: {
    fontFamily: FontFamily.manropeRegular,
    textAlign: "center",
    color: Color.colorGray_400,
  },
  depth1Frame2: {
    height: 'auto',
    paddingTop: Padding.p_9xs,
  },
  clickHereTo: {
    color: Color.colorWhitesmoke_200,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_base
  },
  depth5Frame01: {
    height: 'auto',
    width: 'auto',
  },
  depth4Frame02: {
    borderRadius: Border.br_5xl,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    width: "100%",
  },
  depth3Frame01: {
    height: 48,
    width: "100%",
  },
  depth2Frame03: {
    alignItems: "center",
  },
  depth1Frame3: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    height: 72,
    width: "100%",
  },
  depth1Frame4: {
    height: 20,
  },
  depth0Frame0: {
    height: "100%",
    overflow: "hidden",
  },
  accountcreatedsuccessfullynoti: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default AccountCreatedSuccessfullyNoti;
