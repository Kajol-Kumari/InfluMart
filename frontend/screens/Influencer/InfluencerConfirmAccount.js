import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../../GlobalStyles";
import { BrandSignUp, InfluencerSignUp } from "../../controller/signupController";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { InfluencerConfirmAccountStyles } from "./InfluencerConfirmAccount.scss";
import { useAlert } from "../../util/AlertContext";

const InfluencerConfirmAccount = ({ route, navigation }) => {
  const payload = route.params.payload;
  const { showAlert } = useAlert();
  const registerInfluencer = async () => {
    const userData = {
      ...payload,
      price: [payload.price],
      youtubeChannel: payload.social?.yt,
      facebookProfile: payload.social?.fb,
      instaProfile: payload.social?.insta,
      linkedInProfile: payload.social?.linkedIn,
      twitterProfile: payload.social?.tr,
      nickName: payload.userName,
      firstName: payload.userName,
    };
    await InfluencerSignUp(userData, navigation,showAlert)
  };

  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView
      style={{ height: "100%", backgroundColor: Color.colorWhitesmoke_200 }}
    >
      <View style={styles.brandaccountreviewnotification}>
        <View style={styles.depth0Frame0}>
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => navigation.navigate("OtpVerification")}
          >
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
            <View
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={
                  image != null ? image : require("../../assets/blank-profile.png")
                }
                contentFit="cover"
                style={{ width: 250, height: 250, margin: 20 }}
              />
            </View>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 5,
              }}
            >
              <Pressable style={{ width: "40%" }} onPress={pickImage}>
                <Text style={styles.uploadBtn}>Upload Image</Text>
              </Pressable>
              <Pressable
                style={{ width: "40%" }}
                onPress={() => {
                  setImage(null);
                }}
              >
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
            <Text
              style={{
                fontSize: FontSize.size_base,
                fontFamily: FontFamily.workSansRegular,
                textAlign: "right",
              }}
            >
              {payload.userName}
            </Text>
          </View>
          <View style={[styles.depth1Frame7, styles.depth1FrameLayout]}>
            <TouchableOpacity
              style={{ width: "100%" }}
              onPress={registerInfluencer}
            >
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

export default InfluencerConfirmAccount;

const styles = StyleSheet.create(InfluencerConfirmAccountStyles);
