import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const FormField = ({
  label,
  placeholder,
  value,
  setValue,
  account,
  secureTextEntry = false,
}) => {
  const handleVerify = (platform) => {
    setVerifiedAccounts((prev) => [...prev, platform]);
  };
  return (
    <View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>{label}</Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(value) => setValue(value)}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
      <View style={styles.verifyContainer}>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => handleVerify(account.platform)}
        >
          <Image
            style={styles.verifyIcon}
            contentFit="cover"
            source={require("../assets/verify_symbol.png")}
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Accounts</Text>
          <View style={styles.headerIcon}>
            <TouchableOpacity
              onPress={() => navigation.navigate("InfluencerRegistrationForm",{price,follower})}
            >
              <Image
                style={styles.headerImage}
                contentFit="cover"
                source={require("../assets/cross_symbol.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <FormField
          label={"Instagram"}
          placeholder={"username"}
          value={instagram}
          setValue={setInstagram}
          account={"ig"}
        />
        <FormField
          label={"Twitter"}
          placeholder={"@username"}
          value={twitter}
          setValue={setTwitter}
        />
        <FormField
          label={"Facebook"}
          placeholder={"username"}
          value={facebook}
          setValue={setFacebook}
        />
        <FormField
          label={"YouTube"}
          placeholder={"@channelName"}
          value={youtube}
          setValue={setYoutube}
        />
        <FormField
          label={"TikTok"}
          placeholder={"@username"}
          value={tiktok}
          setValue={setTiktok}
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
            })
          }
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_xs,
  },
  fieldLabel: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
  },
  verifyContainer: {
    paddingHorizontal: Padding.p_5xs,
  },
  textInput: {
    borderRadius: Border.br_xs,
    borderColor: Color.colorAliceblue,
    padding: Padding.p_base,
    marginTop: Padding.p_5xs,
    color: "#4F7A94",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansRegular,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhite,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 23,
    textAlign: "center",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    width: "100%",
  },
  headerIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    height: 24,
    width: 24,
  },
  platform: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.colorGray,
  },
  username: {
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorSlategray,
    lineHeight: 24,
  },
  verifyButton: {
    flexDirection: "column",
    paddingLeft: Padding.p_xs,
  },
  verifyIcon: {
    width: 40,
    height: 40,
  },
  verifyText: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    color: Color.colorGray,
  },
  confirmButton: {
    backgroundColor: "#388fe6",
    paddingVertical: Padding.p_base,
    alignItems: "center",
    borderRadius: Border.br_xs,
    margin: Padding.p_base,
  },
  confirmText: {
    color: Color.colorWhite,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
  },
});

export default AddHandles;
