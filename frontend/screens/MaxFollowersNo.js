import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const socialAccounts = [
  {
    name: "Instagram",
    description: "Share your photos and videos",
    image: require("../assets/instagram_symbol.png"),
  },
  {
    name: "YouTube",
    description: "Watch, stream, and upload videos",
    image: require("../assets/yt_symbol.png"),
  },
  {
    name: "TikTok",
    description: "Create and discover short videos",
    image: require("../assets/tt_symbol.png"),
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
              source={require("../assets/cross_symbol.png")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
    width: 390,
  },
  header: {
    marginBottom: Padding.p_base,
  },
  addAccountButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: Padding.p_base,
  },
  addAccountText: {
    fontSize: 18,
    lineHeight: 23,
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    textAlign: "center",
    width: "80%",
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
    marginBottom: Padding.p_base,
  },
  activeAccount: {
    borderWidth: 2,
    borderColor:"#637587",
  },
  accountIcon: {
    width: 48,
    height: 48,
    marginRight: Padding.p_base,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorGray,
    marginBottom: 2,
  },
  accountDescription: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorSlategray,
  },
  followerCountContainer: {
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
    marginBottom: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
  enterFollowerCountText: {
    borderRadius: Border.br_xs,
    borderColor: Color.colorAliceblue,
    padding: Padding.p_base,
    marginTop: Padding.p_5xs,
    color: "#637587",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansRegular,
    borderWidth: 2,
    width: 250,
  },
  confirmButton: {
    backgroundColor: "#388fe6",
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_xs,
    alignItems: "center",
  },
  confirmButtonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorWhite,
  },
});

export default MaxFollowersNo;
