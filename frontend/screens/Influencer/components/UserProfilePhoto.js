import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { UserProfilePhotoStyles } from "./UserProfilePhoto.scss";
import { useAlert } from "../../../util/AlertContext";
import { handleImageSelection } from "../../../util/imagePickerUtil";

const UserProfilePhoto = ({ route, navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const social = route.params?.social;
  const { showAlert } = useAlert();
  const follower = route.params?.follower;
  const price = route.params?.price;
  const [photo, setPhoto] = useState(null);

  const handleImagePick = async (type) => {
    const result = await handleImageSelection(type);

    if (result.canceled) {
      if (result.error) {
        showAlert("Alert", result.error);
      }
      return;
    }

    setPhoto(result);
    setSelectedImage(result.uri);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const uri = URL.createObjectURL(file);
      setSelectedImage(uri);
    }
  };

  const tips = [
    {
      title: "High quality",
      description: ["Use a high-resolution image that is not blurry.", "Be clear and easy to see."],
      image: require("../../../assets/camera_symbol.png"),
    },
    {
      title: "Good lighting",
      description: ["Make sure your face is visible.", "Photos with more light tend to perform better."],
      image: require("../../../assets/sun_symbol.png"),
    },
    {
      title: "Face forward",
      description: ["Smiling photos are generally more engaging.", "Close-up shots of faces get more engagement."],
      image: require("../../../assets/face_symbol.png"),
    },
  ];

  return (
<ScrollView style={styles.userProfilePhoto}>
        {Platform.OS === "web" && (
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        )}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("InfluencerRegistrationForm", {
                social,
                price,
                follower,
                photo,
              })
            }
          >
            <Image
              style={styles.profileImage}
              contentFit="cover"
              source={require("../../../assets/cross_symbol.png")}
            />
          </TouchableOpacity>
          <Text style={styles.profilePhotoText}>Profile Photo</Text>
          <View style={{width:20,height:20}}></View>
        </View>
        {selectedImage && (
          <View style={styles.previewContainer}>
            <Image
              source={{ uri: selectedImage }}
              style={styles.selectedImage}
              contentFit="cover"
            />
          </View>
        )}
        <Text style={styles.sectionTitle}>What makes a good profile photo?</Text>
        {tips.map((tip, index) => (
          <View key={index} style={styles.tipContainer}>
            <Image style={styles.tipImage} contentFit="cover" source={tip.image} />
            <View style={styles.tipTextContainer}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              {tip.description.map((desc, idx) => (
                <Text key={idx} style={styles.tipDescription}>
                  {desc}
                </Text>
              ))}
            </View>
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.uploadButton]}
            onPress={() => handleImagePick("library")}
          >
            <Text style={styles.buttonText}>Upload Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.takePhotoButton]}
            onPress={() => handleImagePick("camera")}
          >
            <Text style={[styles.buttonText, styles.takePhotoButtonText]}>Take Photo</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(UserProfilePhotoStyles);

export default UserProfilePhoto;
