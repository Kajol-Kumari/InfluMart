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
import Loader from "../shared/Loader";

const BrandAccountSignupDataPreview = ({ route, navigation }) => {
  const payload = route.params?.payload;
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [photo, setPhoto] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const { showAlert } = useAlert();
  const [loading, setLoading] = React.useState(false);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = React.useState("");

  const registerBrand = async () => {
    setLoading(true);
    await BrandSignUp({ ...payload, image: photo }, navigation, showAlert);
    setLoading(false);
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
        source={
          selectedImage
            ? { uri: selectedImage }
            : require("../assets/blank-profile.png")
        }
        contentFit="cover"
        style={styles.profileImage}
      />
      <Text style={styles.tipTitle}>
        Select your first avatar.You can always change your style later.
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.avatarsContainer}
      >
        {avatarImages &&
          avatarImages?.map((avatar, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.avatarContainer,
                  selectedAvatarIndex === index && styles.selectedAvatar,
                ]}
                key={index}
                onPress={() => {
                  setSelectedAvatarIndex(index);
                }}
              >
                <Image
                  style={styles.avatarImage}
                  source={avatar.imageUrl}
                  contentFit="contain"
                />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
      <View style={styles.divider}>
        <Text style={styles.orText}>or</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.uploadButton} onPress={handleUploadPhoto}>
          <Text style={styles.uploadBtnText}>Upload Image</Text>
        </Pressable>
        <Pressable
          style={styles.uploadButton}
          onPress={() => setSelectedImage(null)}
        >
          <Text style={styles.removeBtnText}>Remove Image</Text>
        </Pressable>
      </View>
    </View>
  );

  const renderTextRow = (label, value, isPassword) => (
    <View style={styles.rowContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, isPassword && styles.password]}>
        {isPassword && !showPassword ? "********" : value}
      </Text>
      {isPassword && (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon
            name={showPassword ? "eye" : "eye-slash"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );

  function readImage(url, callback) {
    var request = new XMLHttpRequest();
    request.onload = function () {
      var file = new FileReader();
      file.onloadend = function () {
        callback(file.result);
      };
      file.readAsDataURL(request.response);
    };
    request.open("GET", url);
    request.responseType = "blob";
    request.send();
  }

  React.useEffect(() => {
    if (selectedAvatarIndex !== "") {
      readImage(
        `../assets/avatars/avatar${selectedAvatarIndex + 1}.png`,
        function (base64) {
          setPhoto({
            name: `avatar${selectedAvatarIndex}`,
            uri: base64,
            type: "image/png",
            isSelected: true,
            file: `avatar${selectedAvatarIndex + 1}`,
          });
          setSelectedImage(base64);
          console.log(selectedAvatarIndex, `avatar${selectedAvatarIndex + 1}`);
        }
      );
    }
  }, [selectedAvatarIndex]);

  const avatarImages = [
    { imageUrl: require("../assets/avatars/avatar1.png") },
    { imageUrl: require("../assets/avatars/avatar2.png") },
    { imageUrl: require("../assets/avatars/avatar3.png") },
    { imageUrl: require("../assets/avatars/avatar4.png") },
    { imageUrl: require("../assets/avatars/avatar5.png") },
    { imageUrl: require("../assets/avatars/avatar6.png") },
    { imageUrl: require("../assets/avatars/avatar7.png") },
    { imageUrl: require("../assets/avatars/avatar8.png") },
    { imageUrl: require("../assets/avatars/avatar9.png") },
    { imageUrl: require("../assets/avatars/avatar10.png") },
    { imageUrl: require("../assets/avatars/avatar11.png") },
    { imageUrl: require("../assets/avatars/avatar12.png") },
    { imageUrl: require("../assets/avatars/avatar13.png") },
    { imageUrl: require("../assets/avatars/avatar14.png") },
    { imageUrl: require("../assets/avatars/avatar15.png") },
    { imageUrl: require("../assets/avatars/avatar16.png") },
    { imageUrl: require("../assets/avatars/avatar17.png") },
    { imageUrl: require("../assets/avatars/avatar18.png") },
    { imageUrl: require("../assets/avatars/avatar19.png") },
    { imageUrl: require("../assets/avatars/avatar20.png") },
    { imageUrl: require("../assets/avatars/avatar21.png") },
    { imageUrl: require("../assets/avatars/avatar22.png") },
    { imageUrl: require("../assets/avatars/avatar23.png") },
    { imageUrl: require("../assets/avatars/avatar24.png") },
    { imageUrl: require("../assets/avatars/avatar25.png") },
    { imageUrl: require("../assets/avatars/avatar26.png") },
    { imageUrl: require("../assets/avatars/avatar27.png") },
    { imageUrl: require("../assets/avatars/avatar28.png") },
  ];
  return (
    <ScrollView style={styles.container}>
      {loading && <Loader loading={loading} />}
      <View style={styles.mainView}>
        <TouchableOpacity
          style={styles.fullWidth}
          onPress={() => navigation.navigate("OtpVerification")}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Review</Text>
          </View>
        </TouchableOpacity>
        {renderImageSection()}
        {renderTextRow("Email ID", payload?.email)}
        {renderTextRow("Password", payload?.password, true)}
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Brand type</Text>
          <Text style={styles.value}>{payload?.category?.join(", ")}</Text>
        </View>
        {renderTextRow("Username", payload?.name)}
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
