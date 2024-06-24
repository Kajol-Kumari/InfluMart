import React from "react";
import { StyleSheet, View, Text, TouchableOpacity,ScrollView } from "react-native";
import { Image } from "expo-image";
import { UserProfilePhotoStyles } from "./UserProfilePhoto.scss";

const UserProfilePhoto = ({ route, navigation }) => {
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
      image: require("../../../assets/camera_symbol.png"),
    },
    {
      title: "Good lighting",
      description: [
        "Make sure your face is visible.",
        "Photos with more light tend to perform better.",
      ],
      image: require("../../../assets/sun_symbol.png"),
    },
    {
      title: "Face forward",
      description: [
        "Smiling photos are generally more engaging.",
        "Close-up shots of faces get more engagement.",
      ],
      image: require("../../../assets/face_symbol.png"),
    },
  ];

  return (
    <ScrollView style={styles.userProfilePhoto}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("InfluencerRegistrationForm", { social, price, follower })}>
          <Image
            style={styles.profileImage}
            contentFit="cover"
            source={require("../../../assets/cross_symbol.png")}
          />
        </TouchableOpacity>
        <Text style={styles.profilePhotoText}>Profile Photo</Text>
        <View style={{ width: 24, height: 24 }}></View>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create(UserProfilePhotoStyles);

export default UserProfilePhoto;
