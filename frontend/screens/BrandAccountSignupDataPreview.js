import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import Depth1Frame5 from "../components/Depth1Frame5";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import {API_ENDPOINT} from '@env'


const BrandAccountSignupDataPreview = ({ route, navigation }) => {
  const { payload } = route.params;

  const registerBrand = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}/brands/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if(response.status === 201){
        navigation.navigate('AccountCreatedSuccessfullyNoti')
      }else{
        Alert.alert("ERROR",data.message);
      }
    } catch (error) {
      Alert.alert("ERROR","Something went wrong");
    }
  };

  return (
    <View style={styles.brandaccountreviewnotification}>
      <View style={styles.depth0Frame0}>
      <TouchableOpacity onPress={() => navigation.navigate('OtpVerification')}>

        <View style={[styles.depth1Frame0, styles.depth1FrameLayout]}>
          <View style={[styles.depth2Frame0, styles.depth2FrameLayout]}>
            <View style={[styles.depth3Frame0, styles.depth3FrameLayout]} />
            <View style={styles.depth3Frame1}>
              <View style={styles.depth4Frame0}>
                <View style={styles.depth5Frame0}>
                  <Text
                    style={[
                      styles.reviewYourRegistration,
                      styles.createAccountTypo,
                    ]}
                  >
                    Review
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame2, styles.depth3FrameLayout]}>
              <View style={styles.depth4Frame01} />
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <Depth1Frame5 />
        <View style={styles.depth1Frame2}>
          <View style={styles.depth2Frame01}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.emailId, styles.emailIdTypo]}>
                  Email ID
                </Text>
              </View>
            </View>
            <View style={[styles.depth3Frame11, styles.depth3FrameFlexBox]}>
              <View style={styles.frameLayout2}>
                <View style={styles.frameLayout2}>
                  <Text style={[styles.sophiagetglocom, styles.emailIdTypo]}>
                    {payload.email}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame2}>
          <View style={styles.depth2Frame01}>
            <View style={styles.depth3Frame02}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.emailId, styles.emailIdTypo]}>
                  Password
                </Text>
              </View>
            </View>
            <View style={[styles.depth3Frame12, styles.frameLayout1]}>
              <View style={styles.frameLayout1}>
                <View style={styles.frameLayout1}>
                  <Text style={[styles.sophiagetglocom, styles.emailIdTypo]}>
                    {payload.password}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame4}>
          <View style={[styles.depth2Frame03, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame03}>
              <View style={styles.depth4Frame06}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.brandType, styles.emailIdLayout]}>
                    Brand type
                  </Text>
                </View>
              </View>
              <View style={[styles.depth4Frame1, styles.depth4FrameLayout]}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.selectBrandType, styles.emailIdTypo]}>
                    Select brand type
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameLayout]}>
            <View style={styles.frameLayout}>
              <Text style={[styles.sophiagetglocom, styles.emailIdTypo]}>
                {payload.category?.join(", ")}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame4}>
          <View style={[styles.depth2Frame04, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame05}>
              <View style={styles.depth4Frame07}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.brandType, styles.emailIdLayout]}>
                    Username
                  </Text>
                </View>
              </View>
              <View style={[styles.depth4Frame11, styles.depth4FrameLayout]}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.selectBrandType, styles.emailIdTypo]}>
                    Create a username
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameLayout]}>
            <View style={styles.frameLayout}>
              <Text style={[styles.sophiagetglocom, styles.emailIdTypo]}>
                {payload.name}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame6} />
        <View style={[styles.depth1Frame7, styles.depth1FrameLayout]}>
        <TouchableOpacity onPress={registerBrand}>

          <View style={[styles.depth2Frame05, styles.frameBg]}>
            <View style={[styles.depth3Frame07, styles.frameBg]}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.createAccount, styles.emailIdLayout]}>
                  Create account
                </Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.depth1Frame8} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth1FrameLayout: {
    paddingHorizontal: Padding.p_base,
    height: 72,
    width: '100%',
  },
  depth2FrameLayout: {
    height: 48,
    width: 358,
    alignItems: "center",
    flexDirection: "row",
  },
  depth3FrameLayout: {
    width: 48,
    height: 48,
  },
  createAccountTypo: {
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  emailIdTypo: {
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
  },
  depth3FrameFlexBox: {
    marginLeft: 16,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameLayout1: {
    width: 98,
    height: 24,
  },
  depth2FramePosition: {
    top: 14,
    height: 45,
    left: 16,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  emailIdLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth4FrameLayout: {
    height: 21,
    overflow: "hidden",
  },
  frameLayout: {
    width: 67,
    height: 24,
  },
  frameBg: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  depth3Frame0: {
    alignItems: "center",
  },
  reviewYourRegistration: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    textAlign: "left",
    color: Color.colorGray_400,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 'auto',
    height: 'auto',
    overflow: "hidden",
  },
  depth3Frame1: {
    width: 262,
    justifyContent: "center",
    height: 23,
    alignItems: "center",
    flexDirection: "row",
  },
  depth4Frame01: {
    justifyContent: "flex-end",
    width: 48,
    alignItems: "center",
    height: 48,
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
    backgroundColor: Color.colorWhitesmoke_100,
  },
  emailId: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorGray_400,
  },
  depth3Frame01: {
    width: 191,
    height: 24,
    overflow: "hidden",
  },
  sophiagetglocom: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorGray_400,
    alignSelf: "stretch",
  },
  frameLayout2: {
    width: 'auto',
    height: 'auto',
  },
  depth3Frame11: {
    width: 'auto',
    height: 'auto',
  },
  depth2Frame01: {
    top: 16,
    height: 24,
    left: 16,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  depth1Frame2: {
    height: 56,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth3Frame02: {
    width: 244,
    height: 24,
    overflow: "hidden",
  },
  depth3Frame12: {
    marginLeft: 16,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  brandType: {
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    color: Color.colorGray_400,
  },
  depth4Frame06: {
    width: 122,
    height: 24,
    overflow: "hidden",
  },
  selectBrandType: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorSteelblue_200,
  },
  depth4Frame1: {
    width: 'auto',
  },
  depth3Frame03: {
    width: 122,
    height: 45,
    justifyContent: "center",
  },
  depth2Frame03: {
    width: 199,
    height: 45,
  },
  depth2Frame1: {
    top: 24,
    left: 307,
    position: "absolute",
    width: 67,
  },
  depth1Frame4: {
    height: 72,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth4Frame07: {
    width: 130,
    height: 24,
    overflow: "hidden",
  },
  depth4Frame11: {
    width: 'auto',
  },
  depth3Frame05: {
    width: 130,
    height: 45,
    justifyContent: "center",
  },
  depth2Frame04: {
    width: 203,
    height: 45,
  },
  depth1Frame6: {
    height: 104,
    width: 390,
  },
  createAccount: {
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth3Frame07: {
    width: 'auto',
    height: 24,
  },
  depth2Frame05: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    width: 358,
  },
  depth1Frame7: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
  },
  depth1Frame8: {
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
  brandaccountreviewnotification: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default BrandAccountSignupDataPreview;
