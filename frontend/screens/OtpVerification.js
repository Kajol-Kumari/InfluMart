import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";
import { API_ENDPOINT } from "@env";

const OtpVerification = ({ route, navigation }) => {
  const { payload } = route.params;
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const inputs = React.useRef([]);
  const [error, setError] = React.useState(false);
  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && index > 0 && !otp[index]) {
      inputs.current[index - 1].focus();
    }
  };

  const verifyOTP = async () => {
    const { email } = payload;
    if (otp.includes("")) {
      setError(true);
      return;
    }
    const _otp = otp.join("");
    try {
      const response = await fetch(`${API_ENDPOINT}/otp/verifyOTP`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp: _otp,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        navigation.navigate("BrandAccountReviewNotification", { payload });
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.otpverification}>
      <View style={styles.depth0Frame0}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BrandRegistrationForm")}
        >
          <View style={[styles.depth1Frame0, styles.depth1FrameBg]}>
            <View style={[styles.depth2Frame0, styles.frameFlexBox1]}>
              <View style={[styles.depth3Frame0, styles.frameLayout]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-4-frame-07.png")}
                />
              </View>
              <View style={[styles.depth3Frame1, styles.frameFlexBox1]}>
                <View style={[styles.depth4Frame01, styles.frameLayout]}>
                  <View style={[styles.depth5Frame0, styles.frameLayout]} />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.depth1Frame1}>
          <View style={styles.depth2Frame01}>
            <Text style={[styles.enterTheCode, styles.nextTypo]}>
              Enter the code sent to your email
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputs.current[index] = ref)}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="numeric"
                maxLength={1}
                style={[styles.otpInput, error && { borderColor: "red" }]}
              />
            ))}
          </View>
        </View>
        <View style={styles.depth1Frame3} />
        <View style={[styles.depth1Frame4, styles.depth1FrameSpaceBlock]}>
          <TouchableOpacity onPress={verifyOTP}>
            <View style={[styles.depth2Frame03, styles.frameBg]}>
              <View style={[styles.depth3Frame02, styles.frameBg]}>
                <View style={styles.depth2Frame01}>
                  <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.depth1Frame5, styles.depth1FrameBg]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth1FrameBg: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 390,
  },
  frameFlexBox1: {
    justifyContent: "space-between",
    height: 48,
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    width: 48,
    height: 48,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 5,
    width: 40,
    height: 40,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth1FrameSpaceBlock: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth2FrameLayout: {
    height: 56,
    borderBottomWidth: 1,
    borderColor: Color.colorLavender,
    borderStyle: "solid",
    justifyContent: "center",
    width: 48,
    alignItems: "center",
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
  },
  enterTheCode: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    color: Color.colorGray_400,
  },
  depth2Frame01: {
    alignSelf: "stretch",
  },
  depth1Frame1: {
    height: "auto",
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  text: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "center",
    color: Color.colorGray_400,
  },
  depth4Frame02: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth3Frame01: {
    width: 4,
    height: 24,
    alignItems: "center",
  },
  depth2Frame02: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  depth2Frame1: {
    marginLeft: 12,
  },
  depth1Frame2: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  depth1Frame3: {
    height: 549,
    width: 390,
  },
  next: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorWhitesmoke_100,
  },
  depth3Frame02: {
    width: "auto",
    height: 21,
  },
  depth2Frame03: {
    borderRadius: Border.br_xs,
    width: 84,
    height: 40,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  depth1Frame4: {
    height: 64,
    justifyContent: "flex-end",
  },
  depth1Frame5: {
    height: 20,
    width: 390,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  otpverification: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default OtpVerification;
