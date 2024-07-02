import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Linking
} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { Image } from "expo-image";
import { AddHandlesStyles } from "./AddHandle.scss";
import { API_ENDPOINT } from "@env";

const FormField = ({ label, placeholder, value, setValue, account, handleVerify }) => {
  return (
    <View style={styles.formField}>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>{label}</Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(value) => setValue(value)}
          placeholder={placeholder}
        />
      </View>
      <View style={styles.verifyContainer}>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => handleVerify(account)}
        >
          <Image
            style={styles.verifyIcon}
            contentFit="cover"
            source={require("../../../assets/verify_symbol.png")}
          />
          <Text style={styles.verifyText}>Verify</Text>
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
  const price = route.params?.price;
  const follower = route.params?.follower;
  const photo = route.params?.photo;

  useEffect(() => {
    if (route.params?.social) {
      const { ig, tw, fb, yt, tt } = route.params.social;
      if (ig) setInstagram(ig);
      if (tw) setTwitter(tw);
      if (fb) setFacebook(fb);
      if (yt) setYoutube(yt);
      if (tt) setTiktok(tt);
    }
  }, [route.params]);

  const handleVerify = async (platform) => {
    let authUrl;
    switch(platform) {
      case 'instagram':
        authUrl = `${API_ENDPOINT}/auth/instagram`;
        break;
      case 'twitter':
        authUrl = `${API_ENDPOINT}/auth/twitter`;
        break;
      case 'facebook':
        authUrl = `${API_ENDPOINT}/auth/facebook`;
        break;
      case 'youtube':
        authUrl = `${API_ENDPOINT}/auth/youtube`;
        break;
      default:
        return;
    }

    const result = await WebBrowser.openAuthSessionAsync(authUrl);

    if (result.type === 'success') {
      setVerifiedAccounts((prev) => [...prev, platform]);
    }
  };

  const handleDeepLink = (url) => {
    const { path, queryParams } = Linking.parse(url);
    if (
      path === 'auth/instagram/success' || 
      path === 'auth/twitter/success' || 
      path === 'auth/facebook/success' || 
      path === 'auth/youtube/success'
    ) {
      const user = JSON.parse(queryParams.user);
      // Handle the authenticated user info here, e.g., mark the account as verified
      console.log("Authenticated user:", user);
    }
  };

  useEffect(() => {
    Linking.addEventListener('url', (event) => {
      handleDeepLink(event.url);
    });

    return () => {
      Linking.removeEventListener('url');
    };
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{width:24,height:24}}></View>
          <Text style={styles.headerText}>Add Accounts</Text>
          <View style={styles.headerIcon}>
            <TouchableOpacity
              onPress={() => navigation.navigate("InfluencerRegistrationForm", { price, follower, photo })}
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
          label={"Instagram"}
          placeholder={"username"}
          value={instagram}
          setValue={setInstagram}
          account={"instagram"}
          handleVerify={handleVerify}
        />
        <FormField
          label={"Twitter"}
          placeholder={"@username"}
          value={twitter}
          setValue={setTwitter}
          account={"twitter"}
          handleVerify={handleVerify}
        />
        <FormField
          label={"Facebook"}
          placeholder={"username"}
          value={facebook}
          setValue={setFacebook}
          account={"facebook"}
          handleVerify={handleVerify}
        />
        <FormField
          label={"YouTube"}
          placeholder={"@channelName"}
          value={youtube}
          setValue={setYoutube}
          account={"youtube"}
          handleVerify={handleVerify}
        />
        <FormField
          label={"TikTok"}
          placeholder={"@username"}
          value={tiktok}
          setValue={setTiktok}
          account={"tiktok"}
          handleVerify={handleVerify}
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
              photo
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
