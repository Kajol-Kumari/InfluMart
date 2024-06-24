
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

const requestPermission = async (type) => {
  if (Platform.OS !== "web") {
    const { status } = await (type === "camera"
      ? ImagePicker.requestCameraPermissionsAsync()
      : ImagePicker.requestMediaLibraryPermissionsAsync());
    return status === "granted";
  }
  return true;
};

const launchImagePicker = async (type) => {
  const result = await (type === "camera"
    ? ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })
    : ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      }));
  return result;
};

export const handleImageSelection = async (type) => {
  const permission = await requestPermission(type);
  if (!permission) return { canceled: true, error: "Permission denied" };
  
  const result = await launchImagePicker(type);
  if (result.canceled) return result;

  const { uri } = result.assets[0];
  const filename = uri.split("/").pop();
  const match = /\.(\w+)$/.exec(filename);
  const fileType = match ? `image/${match[1]}` : `image`;

  return {
    uri,
    name: filename,
    type: fileType,
  };
};
