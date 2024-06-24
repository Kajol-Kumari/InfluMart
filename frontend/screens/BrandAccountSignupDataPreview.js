import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import Icon from "react-native-vector-icons/FontAwesome";
import { useAlert } from "../util/AlertContext";
import { BrandSignUp } from "../controller/signupController";
import { BrandAccountSignupDataPreviewStyles } from "./BrandAccountSignupDataPreview.scss";
import { handleImageSelection } from "../util/imagePickerUtil";

const BrandAccountSignupDataPreview = ({ route, navigation }) => {
  const payload = route.params?.payload;
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [photo, setPhoto] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const { showAlert } = useAlert();

  const registerBrand = async () => {
    await BrandSignUp({ ...payload, image: photo }, navigation, showAlert);
  };

  const handleUploadPhoto = async () => {
    const result = await handleImageSelection("library");

    if (result.canceled) {
      if (result.error) {
        showAlert("Alert", result.error);
      }
      return;
    }

    setPhoto(result);
    setSelectedImage(result.uri);
  };

  const renderImageSection = () => (
    <View style={styles.centeredView}>
      <Image
        source={selectedImage ? { uri: selectedImage } : require("../assets/blank-profile.png")}
        contentFit="cover"
        style={styles.profileImage}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.uploadButton} onPress={handleUploadPhoto}>
          <Text style={styles.uploadBtnText}>Upload Image</Text>
        </Pressable>
        <Pressable style={styles.uploadButton} onPress={() => setSelectedImage(null)}>
          <Text style={styles.removeBtnText}>Remove Image</Text>
        </Pressable>
      </View>
    </View>
  );

  const renderTextRow = (label, value, isPassword) => (
    <View style={styles.rowContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, isPassword && styles.password]}>{isPassword && !showPassword ? "********" : value}</Text>
      {isPassword && (
        <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? "eye" : "eye-slash"} size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.fullWidth} onPress={() => navigation.navigate("OtpVerification")}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Review</Text>
          </View>
        </TouchableOpacity>
        {renderImageSection()}
        {renderTextRow("Email ID", payload.email)}
        {renderTextRow("Password", payload.password, true)}
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Brand type</Text>
          <Text style={styles.value}>{payload.category?.join(", ")}</Text>
        </View>
        {renderTextRow("Username", payload.name)}
        <TouchableOpacity style={styles.fullWidth} onPress={registerBrand}>
          <View style={styles.createAccountButton}>
            <Text style={styles.createAccountText}>Create account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(BrandAccountSignupDataPreviewStyles);

export default BrandAccountSignupDataPreview;
