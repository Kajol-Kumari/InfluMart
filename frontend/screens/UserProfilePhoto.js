import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const UserProfilePhoto = ({route,navigation}) => {
  const social = route.params?.social;
  const follower = route.params?.follower;
  const price = route.params?.price;
  const handleUploadPhoto = () => {
    // Handle the upload photo action
    console.log("Upload photo clicked");
  };

  const handleTakePhoto = () => {
    // Handle the take photo action
    console.log("Take photo clicked");
  };

  const tips = [
    {
      title: "High quality",
      description: [
        "Use a high-resolution image that is not blurry.",
        "Be clear and easy to see.",
      ],
      image: require("../assets/camera_symbol.png"),
    },
    {
      title: "Good lighting",
      description: [
        "Make sure your face is visible.",
        "Photos with more light tend to perform better.",
      ],
      image: require("../assets/sun_symbol.png"),
    },
    {
      title: "Face forward",
      description: [
        "Smiling photos are generally more engaging.",
        "Close-up shots of faces get more engagement.",
      ],
      image: require("../assets/face_symbol.png"),
    },
  ];

  return (
    <View style={styles.userProfilePhoto}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.navigate("InfluencerRegistrationForm",{social,price,follower})}>
        <Image
          style={styles.profileImage}
          contentFit="cover"
          source={require("../assets/cross_symbol.png")}
        />
        </TouchableOpacity>
        <Text style={styles.profilePhotoText}>Profile Photo</Text>
      </View>
      <Text style={styles.sectionTitle}>What makes a good profile photo?</Text>
      {tips.map((tip, index) => (
        <View key={index} style={styles.tipContainer}>
          <Image style={styles.tipImage} contentFit="cover" source={tip.image} />
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            {tip.description.map((desc, idx) => (
              <Text key={idx} style={styles.tipDescription}>{desc}</Text>
            ))}
          </View>
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.uploadButton]}
          onPress={handleUploadPhoto}
        >
          <Text style={styles.buttonText}>Upload Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.takePhotoButton]}
          onPress={handleTakePhoto}
        >
          <Text style={[styles.buttonText, styles.takePhotoButtonText]}>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userProfilePhoto: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
    width: 390,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Padding.p_base,
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 24,
    marginRight: Padding.p_base,
  },
  profilePhotoText: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.beVietnamProBold,
    width: "80%",
    textAlign: "center"
  },
  sectionTitle: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.beVietnamProBold,
    marginBottom: Padding.p_base,
    lineHeight: 28
  },
  tipContainer: {
    flexDirection: "row",
    marginBottom: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
    padding: Padding.p_base,
  },
  tipImage: {
    width: 48,
    height: 48,
    borderRadius: Border.br_xs,
  },
  tipTextContainer: {
    marginLeft: Padding.p_base,
    flex: 1,
  },
  tipTitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorGray,
    marginBottom: Padding.p_5xs,
  },
  tipDescription: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.beVietnamProRegular,
    color: "#637587",
    lineHeight: FontSize.size_base,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Padding.p_base,
    gap: Padding.p_base,
  },
  button: {
    height: 40,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    marginHorizontal: Padding.p_2xs,
  },
  uploadButton: {
    backgroundColor: "#F0F2F5",
  },
  takePhotoButton: {
    backgroundColor: "#1a80e6",
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorGray,
  },
  takePhotoButtonText: {
    color: Color.colorWhite,
  },
});

export default UserProfilePhoto;
