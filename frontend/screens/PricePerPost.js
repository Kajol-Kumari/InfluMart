import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PlatformPrice = ({
  platform,
  question,
  imageSource,
  value,
  setValue,
}) => {
  return (
    <View>
      <View style={styles.depth1FrameSpaceBlock}>
        <Text style={styles.platformTitle}>{platform}</Text>
      </View>
      <View style={styles.depth1FrameSpaceBlock}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          keyboardType="numeric"
        />
        <View style={styles.inputIcon}>
          <Image
            style={styles.inputImage}
            contentFit="cover"
            source={imageSource}
          />
        </View>
      </View>
    </View>
  );
};

const PricePerPost = ({ route, navigation }) => {
  const [instagram, setInstagram] = React.useState("");
  const [twitter, setTwitter] = React.useState("");
  const [facebook, setFacebook] = React.useState("");
  const [youtube, setYoutube] = React.useState("");
  const [tiktok, setTiktok] = React.useState("");
  const social = route.params?.social
  const follower = route.params?.follower
  return (
    <ScrollView>
      <View style={styles.pricePerPostContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("InfluencerRegistrationForm",{social,follower})}
          >
            <Image
              style={styles.headerIcon}
              contentFit="cover"
              source={require("../assets/cross_symbol.png")}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Set your prices</Text>
        </View>
        <PlatformPrice
          platform="Instagram"
          question="What's your rate for a single Instagram post?"
          imageSource={require("../assets/currency_symbol.png")}
          value={instagram}
          setValue={setInstagram}
        />
        <PlatformPrice
          platform="YouTube"
          question="What's your rate for a single YouTube video?"
          imageSource={require("../assets/currency_symbol.png")}
          value={youtube}
          setValue={setYoutube}
        />
        <PlatformPrice
          platform="TikTok"
          question="What's your rate for a single TikTok?"
          imageSource={require("../assets/currency_symbol.png")}
          value={tiktok}
          setValue={setTiktok}
        />
        <PlatformPrice
          platform="Twitter"
          question="What's your rate for a single Twitter post?"
          imageSource={require("../assets/currency_symbol.png")}
          value={twitter}
          setValue={setTwitter}
        />
        <View style={styles.currencyContainer}>
          <Image
            style={styles.currencyIcon}
            contentFit="cover"
            source={require("../assets/coin_symbol.png")}
          />
          <Text style={styles.currencyText}>Currency</Text>
          <Text style={styles.currencyValue}>USD</Text>
        </View>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() =>
            navigation.navigate("InfluencerRegistrationForm", {
              price: { ig: instagram, yt: youtube, tr: twitter, tt: tiktok },
              social,follower
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
  pricePerPostContainer: {
    width: 390,
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Padding.p_base,
    textAlign: "center",
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 23,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    textAlign: "center",
    width: "94%",
  },
  depth1FrameSpaceBlock: {
    paddingVertical: Padding.p_xs,
  },
  platformTitle: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    color: Color.colorGray,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
  },
  questionText: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.colorGray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F2F5",
    marginBottom: Padding.p_base,
    borderRadius: 12,
  },
  inputIcon: {
    padding: Padding.p_base,
  },
  inputImage: {
    width: 24,
    height: 24,
  },
  textInput: {
    flex: 1,
    height: 56,
    padding: Padding.p_base,
    backgroundColor: "#F0F2F5",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorGray_300,
    borderRadius: 12,
  },
  currencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
    marginBottom: Padding.p_base,
  },
  currencyIcon: {
    width: 40,
    height: 40,
  },
  currencyText: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorGray,
    flex: 1,
    marginLeft: Padding.p_base,
  },
  currencyValue: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorGray_100,
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

export default PricePerPost;
