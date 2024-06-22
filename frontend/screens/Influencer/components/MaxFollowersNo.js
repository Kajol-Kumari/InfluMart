import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { MaxFollowersNoStyles } from "./MaxFollowers.scss";

const socialAccounts = [
  {
    name: "Instagram",
    description: "Share your photos and videos",
    image: require("../../../assets/instagram_symbol.png"),
  },
  {
    name: "YouTube",
    description: "Watch, stream, and upload videos",
    image: require("../../../assets/yt_symbol.png"),
  },
  {
    name: "TikTok",
    description: "Create and discover short videos",
    image: require("../../../assets/tt_symbol.png"),
  },
];

const MaxFollowersNo = ({ route, navigation }) => {
  const [value, setValue] = React.useState("");
  const [platform, setPlatform] = React.useState("");
  const price = route.params?.price;
  const social = route.params?.social;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.addAccountButton}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("InfluencerRegistrationForm", {
                price,
                social,
              })
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../../../assets/cross_symbol.png")}
            />
          </TouchableOpacity>
          <Text style={styles.addAccountText}>Add a social account</Text>
        </View>
      </View>
      {socialAccounts.map((account, index) => (
        <View key={index} style={[styles.accountContainer, platform==account.name && styles.activeAccount]}>
            <Image
              style={styles.accountIcon}
              contentFit="cover"
              source={account.image}
            />
            <TouchableOpacity onPress={()=>setPlatform(account.name)}>
            <View style={styles.accountInfo}>
              <Text style={styles.accountName}>{account.name}</Text>
              <Text style={styles.accountDescription}>
                {account.description}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.followerCountContainer}>
        <TextInput
          style={styles.enterFollowerCountText}
          value={value}
          onChangeText={(value) => setValue(value)}
          placeholder={"Enter your follower count"}
        />
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() =>
          navigation.navigate("InfluencerRegistrationForm", {
            follower: { platform: platform, value: value },
            price,
            social,
          })
        }
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create(MaxFollowersNoStyles);

export default MaxFollowersNo;
