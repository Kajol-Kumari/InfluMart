import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { UserProfilePhotoStyles } from "./UserProfilePhoto.scss";
import { useAlert } from "../../../util/AlertContext";

const UserProfilePhoto = ({ route, navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const social = route.params?.social;
  const {showAlert} = useAlert()
  const follower = route.params?.follower;
  const price = route.params?.price;
  const [photo, setPhoto] = useState(null);
  const requestPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        showAlert("Alert","Permission to access media library is required!");
        return false;
      }
    }
    return true;
  };

  const handleUploadPhoto = async () => {
    const permission = await requestPermission();
    if (!permission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      let localUri = result.assets[0].uri;
      let filename = localUri.split('/').pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      setPhoto({
        uri: localUri,
        name: filename,
        type: type
      })
    }
  };

  const handleTakePhoto = async () => {
    if (Platform.OS === "web") {
      document.getElementById("fileInput").click();
      return;
    }

    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    const mediaLibraryPermission = await requestPermission();

    if (!cameraPermission.granted || !mediaLibraryPermission) {
      showAlert("Alert","Permission to access camera and media library is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      let localUri = result.assets[0].uri;
      let filename = localUri.split('/').pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      setPhoto({
        uri: localUri,
        name: filename,
        type: type
      })
      setSelectedImage(result.assets[0].uri);
    }
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
                photo
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
        <Text style={styles.sectionTitle}>
          What makes a good profile photo?
        </Text>
        {tips.map((tip, index) => (
          <View key={index} style={styles.tipContainer}>
            <Image
              style={styles.tipImage}
              contentFit="cover"
              source={tip.image}
            />
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
            onPress={handleUploadPhoto}
          >
            <Text style={styles.buttonText}>Upload Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.takePhotoButton]}
            onPress={handleTakePhoto}
          >
            <Text style={[styles.buttonText, styles.takePhotoButtonText]}>
              Take Photo
            </Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(UserProfilePhotoStyles);

export default UserProfilePhoto;
