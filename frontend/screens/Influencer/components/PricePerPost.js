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
import { PricePerPostStyles } from "./PricePerPost.scss";
import CountryCurrencyPicker from "../../../shared/CountryCurrencyPicker";

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
  const [openCountryCode, setOpenCountryCode] = React.useState(false);
  const social = route.params?.social;
  const follower = route.params?.follower;
  const photo = route.params?.photo;
  const isCompleted = route.params?.isCompleted;
  const [currency, setCurrency] = React.useState({
    code: "IN",
    name: { en: "India" },
    dial_code: "+91",
    currency: "INR",
    subunits: 100,
  });
  const redirect = route.params?.redirect;
  React.useEffect(() => {
    if (route.params?.price) {
      const { ig, yt, tr, tt, currency } = route.params.price;
      setInstagram(ig.toString());
      setYoutube(yt.toString());
      setTwitter(tr.toString());
      setTiktok(tt.toString());
      setCurrency(currency);
    }
  }, [route.params]);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pricePerPostContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(redirect, {
                social,
                follower,
                photo,
                isCompleted,
              })
            }
          >
            <Image
              style={styles.headerIcon}
              contentFit="cover"
              source={require("../../../assets/cross_symbol.png")}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Set your prices</Text>
          <View style={{ width: 20, height: 20 }}></View>
        </View>
        <PlatformPrice
          platform="Instagram"
          question="What's your rate for a single Instagram post?"
          imageSource={require("../../../assets/currency_symbol.png")}
          value={instagram}
          setValue={setInstagram}
        />
        <PlatformPrice
          platform="YouTube"
          question="What's your rate for a single YouTube video?"
          imageSource={require("../../../assets/currency_symbol.png")}
          value={youtube}
          setValue={setYoutube}
        />
        <PlatformPrice
          platform="TikTok"
          question="What's your rate for a single TikTok?"
          imageSource={require("../../../assets/currency_symbol.png")}
          value={tiktok}
          setValue={setTiktok}
        />
        <PlatformPrice
          platform="Twitter"
          question="What's your rate for a single Twitter post?"
          imageSource={require("../../../assets/currency_symbol.png")}
          value={twitter}
          setValue={setTwitter}
        />
        <TouchableOpacity onPress={() => setOpenCountryCode(true)}>
          <View style={styles.currencyContainer}>
            <Image
              style={styles.currencyIcon}
              contentFit="cover"
              source={require("../../../assets/coin_symbol.png")}
            />
            <Text style={styles.currencyText}>Currency</Text>
            <Text style={styles.currencyValue}>
              {currency?.currency || "USD"}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() =>
            navigation.navigate(redirect, {
              price: {
                ig: instagram,
                yt: youtube,
                tr: twitter,
                tt: tiktok,
                currency: currency,
              },
              social,
              follower,
              photo,
              isCompleted: { ...isCompleted, pricePerPost: true },
            })
          }
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>

        <CountryCurrencyPicker
          show={openCountryCode}
          pickerButtonOnPress={(item) => {
            setCurrency(item);
            setOpenCountryCode(false);
          }}
          onBackdropPress={() => setOpenCountryCode(false)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(PricePerPostStyles);

export default PricePerPost;
