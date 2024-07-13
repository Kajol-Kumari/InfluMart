import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Image } from "expo-image";
import { AddHandlesStyles } from "./AddHandle.scss";
import { API_ENDPOINT } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FormField = ({
  label,
  placeholder,
  value,
  setValue,
  account,
  handleVerify,
  isVerified,
}) => {
  return (
    <View style={styles.formField}>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>{label}</Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(value) => setValue(value)}
          placeholder={placeholder}
          editable={!isVerified}
        />
      </View>
      <View style={styles.verifyContainer}>
        <TouchableOpacity
          style={[styles.verifyButton, isVerified && styles.verifiedButton]}
          onPress={() => handleVerify(account)}
          disabled={isVerified}
        >
          <Image
            style={styles.verifyIcon}
            contentFit="cover"
            source={
              isVerified
                ? require("../../../assets/verified_symbol.png")
                : require("../../../assets/verify_symbol.png")
            }
          />
          <Text style={styles.verifyText}>
            {isVerified ? "Verified" : "Verify"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AddHandles = ({ route, navigation }) => {
  const [verifiedAccounts, setVerifiedAccounts] = useState([]);
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [tiktok, setTiktok] = useState("");
  const { price, follower, photo } = route.params || {};
  const user = route.params?.user;

  useEffect(() => {
    // Handle user data as needed (e.g., store in context, navigate to home, etc.)
    if (route.params?.social) {
      const { ig, tw, fb, yt, tt } = route.params.social;
      if (ig) setInstagram(ig);
      if (tw) setTwitter(tw);
      if (fb) setFacebook(fb);
      if (yt) setYoutube(yt);
      if (tt) setTiktok(tt);
    }
    const getData = async () => {
    await AsyncStorage.setItem('userytdata', JSON.stringify(user));
    user && handleAuthSuccess('youtube', user);
    };
    getData()
  }, []);

  const handleAuthSuccess = useCallback((platform, user) => {
    setVerifiedAccounts((prev) => [...prev, platform]);
    switch (platform) {
      case "instagram":
        setInstagram(user.username);
        break;
      case "twitter":
        setTwitter(user.username);
        break;
      case "facebook":
        setFacebook(user.name);
        break;
      case "youtube":
        setYoutube(JSON.parse(user)?.displayName);
        break;
    }
    Alert.alert("Success", `Your ${platform} account has been verified!`);
  }, []);
  

  const handleVerify = async (platform) => {
    const authUrls = {
      instagram: `${API_ENDPOINT}/api/auth/instagram`,
      twitter: `${API_ENDPOINT}/api/auth/twitter`,
      facebook: `${API_ENDPOINT}/api/auth/facebook`,
      youtube: `${API_ENDPOINT}/api/auth/youtube`,
    };

    const authUrl = authUrls[platform];
    if (!authUrl) {
      console.error("Invalid platform:", platform);
      return;
    }

    console.log(`Initiating ${platform} authentication`);
    try {
      const result = await WebBrowser.openAuthSessionAsync(authUrl, `influmart://api/auth/${platform}/callback`);
      console.log("WebBrowser result:", result);
      if (result.type === "cancel") {
        console.log("Authentication canceled by user");
      } else if (result.type === "success") {
        if (result.url.includes('error=access_denied')) {
          console.log("Authentication failed: Access denied");
          Alert.alert(
            "Authentication Failed",
            "You may need to be added as a test user for this app. Please contact the app developer."
          );
        } else {
          console.log("Authentication successful, waiting for deep link");
        }
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      Alert.alert("Error", "An error occurred during authentication. Please try again.");
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ width: 24, height: 24 }}></View>
          <Text style={styles.headerText}>Add Accounts</Text>
          <View style={styles.headerIcon}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InfluencerRegistrationForm", {
                  price,
                  follower,
                  photo,
                })
              }
            >
              <Image
                style={styles.headerImage}
                contentFit="cover"
                source={require("../../../assets/cross_symbol.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <FormField
          label="Instagram"
          placeholder="username"
          value={instagram}
          setValue={setInstagram}
          account="instagram"
          handleVerify={handleVerify}
          isVerified={verifiedAccounts.includes("instagram")}
        />
        <FormField
          label="Twitter"
          placeholder="@username"
          value={twitter}
          setValue={setTwitter}
          account="twitter"
          handleVerify={handleVerify}
          isVerified={verifiedAccounts.includes("twitter")}
        />
        <FormField
          label="Facebook"
          placeholder="username"
          value={facebook}
          setValue={setFacebook}
          account="facebook"
          handleVerify={handleVerify}
          isVerified={verifiedAccounts.includes("facebook")}
        />
        <FormField
          label="YouTube"
          placeholder="@channelName"
          value={youtube}
          setValue={setYoutube}
          account="youtube"
          handleVerify={handleVerify}
          isVerified={verifiedAccounts.includes("youtube")}
        />
        <FormField
          label="TikTok"
          placeholder="@username"
          value={tiktok}
          setValue={setTiktok}
          account="tiktok"
          handleVerify={handleVerify}
          isVerified={verifiedAccounts.includes("tiktok")}
        />
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() =>
            navigation.navigate("InfluencerRegistrationForm", {
              social: {
                ig: instagram,
                tw: twitter,
                fb: facebook,
                yt: youtube,
                tt: tiktok,
              },
              price,
              follower,
              photo,
            })
          }
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(AddHandlesStyles);

export default AddHandles;
