import React from "react";
import { View, StyleSheet, Platform, TouchableOpacity,Text } from "react-native";
import { WebView } from "react-native-webview";
import { Color, FontFamily, Padding } from "../GlobalStyles";
import { Image } from "expo-image";

const TosPrivacyPolicyScreen = ({ route, navigation }) => {
  const { type, navigate } = route.params;
  let googleDocsUrl = "";
  if (type === "tos") {
    googleDocsUrl =
      "https://docs.google.com/document/d/1M5QhXyttj_G5AgmXTj7f229Bl7uv6woXVP5q1JmEw9M/edit?usp=sharing";
  } else {
    googleDocsUrl =
      "https://docs.google.com/document/d/1GIDgHb_fxhHWA_LcQ5yNbSJcmSrKZPCIbTiu87ds3UE/edit?usp=sharing";
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <Image
              style={styles.headerImage}
              contentFit="cover"
              source={require("../assets/depth-4-frame-07.png")}
            />
            <Text style={styles.headerText}>Back</Text>
          </View>
        </View>
      </TouchableOpacity>
      {Platform.OS === "web" ? (
        <iframe
          src={googleDocsUrl}
          style={styles.webview}
          title="TOS and Privacy Policy"
        />
      ) : (
        <WebView source={{ uri: googleDocsUrl }} style={styles.webview} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  headerContainer: {
    height: 72,
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerImage: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 22,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interBold,
  },
});

export default TosPrivacyPolicyScreen;
