import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Pressable, ScrollView } from "react-native";
import Depth1Frame5 from "../components/Depth1Frame5";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { BrandSignUp } from "../controller/signupController";
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';


const BrandAccountSignupDataPreview = ({ route, navigation }) => {
  const { payload } = route.params;

  const registerBrand = async () => {
    await BrandSignUp(payload, navigation)
  };

  const [image, setImage] = React.useState("../assets/blank-profile.png")

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={{height:"100%"}}>
      <View style={styles.brandaccountreviewnotification}>
        <View style={styles.depth0Frame0}>
          <TouchableOpacity style={{ width: "100%" }} onPress={() => navigation.navigate('OtpVerification')}>

            <View style={[styles.depth1Frame0, styles.depth1FrameLayout]}>
              <View style={[styles.depth2Frame0, styles.depth2FrameLayout]}>
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
            </View>
          </TouchableOpacity>
          <View style={{ width: "100%" }}>
            <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image source={image != null ? image : require("../assets/blank-profile.png")} contentFit="cover" style={{ width: 250, height: 250, margin: 20 }} />
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", marginVertical: 5 }}>
              <Pressable style={{ width: "40%" }} onPress={pickImage}>
                <Text style={styles.uploadBtn}>Upload Image</Text>
              </Pressable>
              <Pressable style={{ width: "40%" }} onPress={() => { setImage(null) }}>
                <Text style={styles.removeBtn}>Remove Image</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.depth1Frame2}>
            <View style={styles.depth2Frame01}>
              <View style={styles.depth3Frame01}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.brandType, styles.emailIdLayout]}>
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
                  <Text style={[styles.brandType, styles.emailIdLayout]}>
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
            <Text style={{ fontSize: FontSize.size_base, fontFamily: FontFamily.workSansRegular, textAlign: "right",width:"55%" }}>
              {payload.category?.join(", ")}
            </Text>
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
            <Text style={{ fontSize: FontSize.size_base, fontFamily: FontFamily.workSansRegular, textAlign: "right" }}>
              {payload.name}
            </Text>
          </View>
          <View style={[styles.depth1Frame7, styles.depth1FrameLayout]}>
            <TouchableOpacity style={{ width: "100%" }} onPress={registerBrand}>
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
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  depth1FrameLayout: {
    paddingHorizontal: Padding.p_base,
    height: 72,
    width: '100%',
    backgroundColor: Color.colorWhitesmoke_200
  },
  depth2FrameLayout: {
    height: 48,
    width: "100%",
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
    textAlign: "left"
  },
  depth3FrameFlexBox: {
    marginLeft: 16,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameLayout1: {
    width: "auto",
    height: 24,
  },
  depth2FramePosition: {
    width: "40%",
    height:"auto",
    flexDirection: "row"
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
    width: "auto",
    height: 24,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
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
    marginTop: 20
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
    justifyContent: "center",
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
    fontWeight: "700"
  },
  depth3Frame01: {
    width: "auto",
    height: 24,
    overflow: "hidden",
  },
  sophiagetglocom: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorGray_400,
    alignSelf: "stretch",
    width: "100%"
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
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between"
  },
  depth1Frame2: {
    height: 56,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth3Frame02: {
    width: "auto",
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
    width: "auto",
    height: "auto",
    justifyContent: "start",
  },
  depth2Frame03: {
    width: "auto",
    height: "auto"
  },
  depth2Frame1: {
    width: "70%"
  },
  depth1Frame4: {
    height: "auto",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_xl,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    gap: 10
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
    width: "100%",
  },
  depth1Frame7: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhite
  },
  depth1Frame8: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth0Frame0: {
    height: "auto",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  brandaccountreviewnotification: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: "auto",
    paddingBottom:30
  },
  uploadBtn: {
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: "700",
    backgroundColor: Color.colorDodgerblue,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    borderRadius: Border.br_xs,
    marginHorizontal: 10
  },
  removeBtn: {
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: "700",
    backgroundColor: "#f00",
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    borderRadius: Border.br_xs,
    marginHorizontal: 10
  }
});

export default BrandAccountSignupDataPreview;
