import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { useAlert } from "../../util/AlertContext";
import { InfluencerSignUp } from "../../controller/signupController";
import { InfluencerConfirmAccountStyles } from "./InfluencerConfirmAccount.scss";
const InfluencerConfirmAccount = ({ route, navigation }) => {
  const payload = route.params?.payload;
  const { showAlert } = useAlert();
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(payload?.profileUrl?.uri);

  const registerInfluencer = async () => {
    const userData = {
      ...payload,
      price: [payload.price],
      youtubeChannel: payload.social?.yt,
      facebookProfile: payload.social?.fb,
      instaProfile: payload.social?.ig,
      linkedInProfile: payload.social?.linkedIn,
      twitterProfile: payload.social?.tr,
      nickName: payload.userName,
      firstName: payload.userName,
    };
    await InfluencerSignUp(userData, navigation, showAlert);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
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
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.fullWidth}
          onPress={() => navigation.navigate("OtpVerification")}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Review</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.fullWidth}>
          <View style={styles.imageContainer}>
            <Image
              source={
                image
                  ? { uri: image }
                  : require("../../assets/blank-profile.png")
              }
              contentFit="cover"
              style={styles.profileImage}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={pickImage}>
              <Text style={styles.uploadBtn}>Upload Image</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setImage(null)}>
              <Text style={styles.removeBtn}>Remove Image</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email ID</Text>
          <Text style={styles.value}>{payload.email}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <Text style={styles.value}>{showPassword ? payload.password : "********"}</Text>
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? "eye" : "eye-slash"} size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.value}>{payload.userName}</Text>
        </View>
        <TouchableOpacity style={styles.createAccountContainer} onPress={registerInfluencer}>
          <Text style={styles.createAccount}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By joining, you agree to our </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("TosScreen",{navigate:"InfluencerConfirmAccount"})}>
            <Text style={styles.linkText}>Terms of Service</Text>
          </TouchableOpacity>
          <Text style={styles.termsText}> and </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("PPScreen",{navigate:"InfluencerConfirmAccount"})}>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(InfluencerConfirmAccountStyles);

export default InfluencerConfirmAccount;
