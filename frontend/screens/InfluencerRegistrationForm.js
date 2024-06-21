import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
import InfluPrice from "./signup/components/InfluPrice";
import HeadingDescToggle from "./signup/components/HeadingDescToggle";
import { InfluencerVerify } from "../controller/signupController";

const FormField = ({ label, value, setValue, secureTextEntry = false }) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={setValue}
      placeholder={label}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const InfluencerRegistrationForm = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [over18, setOver18] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [industryAssociation, setIndustryAssociation] = useState(false);
  const [location, setLocation] = useState("");
  const social = route.params?.social;
  const follower = route.params?.follower;
  const price = route.params?.price;
  console.log(social, follower, price);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (
      email &&
      password &&
      username &&
      location &&
      over18 &&
      agreedToTerms &&
      social &&
      follower &&
      price
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    email,
    password,
    username,
    location,
    over18,
    agreedToTerms,
    social,
    follower,
    price,
  ]);

  const handleSelectPlan = async () => {
    console.log({
      email,
      password,
      userName: username,
      over18,
      agreedToTerms,
      industryAssociation,
    });
    const payload = {
      email,
      password,
      userName: username,
      over18,
      agreedToTerms,
      industryAssociation,
      social,
      follower,
      price,
      location,
    };
    await InfluencerVerify(payload, navigation);
  };

  return (
    <ScrollView>
      <View style={styles.influencerRegistrationForm}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BrandorInfluencer")}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Sign up</Text>
          </View>
        </TouchableOpacity>

        <FormField label="Email" value={email} setValue={setEmail} />
        <FormField
          label="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <FormField label="Username" value={username} setValue={setUsername} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Add social profiles</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("InfluencerSocialHandles", {
                price,
                follower,
              })
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require(`../assets/depth-3-frame-11.png`)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Add Your profiles</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("UserProfilePhoto", {
                price,
                follower,
                social,
              })
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require(`../assets/depth-3-frame-11.png`)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Add Social Followers</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MaxFollowersNo", { price, social })
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require(`../assets/depth-3-frame-11.png`)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>
            Content and age restriction
          </Text>
        </View>
        <HeadingDescToggle
          heading="I am over 18"
          desc="You must be at least 18 to use this service."
          toggleOn={over18}
          setToggleOn={setOver18}
        />
        <HeadingDescToggle
          heading="I agree to the terms of service"
          desc="You need to agree to the terms of service."
          toggleOn={agreedToTerms}
          setToggleOn={setAgreedToTerms}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Industry association</Text>
        </View>
        <HeadingDescToggle
          heading="I am a member of an industry association"
          toggleOn={industryAssociation}
          setToggleOn={setIndustryAssociation}
        />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Price per post</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PricePerPost", { social, follower })
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require(`../assets/depth-3-frame-11.png`)}
            />
          </TouchableOpacity>
        </View>
        <FormField label={"Location"} value={location} setValue={setLocation} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Subscription plans</Text>
        </View>
        <InfluPrice />
        <TouchableOpacity
          onPress={handleSelectPlan}
          disabled={!isFormValid}
          style={[
            styles.selectPlanButton,
            !isFormValid && styles.selectPlanButtonDisabled,
          ]}
        >
          <View>
            <Text
              style={[
                styles.selectPlanButtonText,
                !isFormValid && styles.selectPlanButtonDisabledText,
              ]}
            >
              Select Plan
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  influencerRegistrationForm: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: 390,
    padding: Padding.p_base,
  },
  header: {
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  headerText: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansBold,
  },
  fieldContainer: {
    marginVertical: Padding.p_xs,
  },
  fieldLabel: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
  },
  textInput: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorAliceblue,
    padding: Padding.p_base,
    marginTop: Padding.p_5xs,
    color: "#4F7A94",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  sectionHeader: {
    marginVertical: Padding.p_base,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xs,
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 16,
  },
  sectionHeaderText: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansBold,
  },
  selectPlanButton: {
    backgroundColor: Color.colorSteelblue_100,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    marginVertical: Padding.p_base,
  },
  selectPlanButtonDisabled: {
    backgroundColor: "#F0F2F5",
  },
  selectPlanButtonDisabledText: {
    color: "black",
  },
  selectPlanButtonText: {
    color: Color.colorWhitesmoke_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansBold,
  },
});

export default InfluencerRegistrationForm;
