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
import InfluPrice from "../signup/components/InfluPrice";
import HeadingDescToggle from "../signup/components/HeadingDescToggle";
import { InfluencerVerify } from "../../controller/signupController";
import { InfluencerRegistrationFormStyles } from "./InfluencerRegstrationForm.scss";
import { useAlert } from "../../util/AlertContext";
import { Color } from "../../GlobalStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FormField = ({
  label,
  value,
  setValue,
  secureTextEntry = false,
  showPassword,
  setShowPassword,
}) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={secureTextEntry}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
        placeholder={label}
        secureTextEntry={secureTextEntry && !showPassword}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.password}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
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
  const { showAlert } = useAlert();
  const photo = route.params?.photo;
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      profileUrl: photo,
    };
    await InfluencerVerify(payload, navigation, showAlert);
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ScrollView style={{ backgroundColor: Color.colorWhite }}>
        <View style={styles.influencerRegistrationForm}>
          <TouchableOpacity
            onPress={() => navigation.navigate("BrandorInfluencer")}
          >
            <View style={styles.header}>
              <Image
                style={styles.headerNavigation}
                resizeMode="cover"
                source={require("../../assets/depth-4-frame-Backarrow3x.png")}
              />
              <Text style={styles.headerText}>Sign up</Text>
              <View style={styles.headerNavigation} />
            </View>
          </TouchableOpacity>

          <FormField label="Email" value={email} setValue={setEmail} />
          <FormField
            label="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <FormField label="Username" value={username} setValue={setUsername} />

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Add social profiles</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InfluencerSocialHandles", {
                  price,
                  follower,
                  photo,
                })
              }
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require(`../../assets/depth-3-frame-11.png`)}
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
                source={require(`../../assets/depth-3-frame-11.png`)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Add Social Followers</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MaxFollowersNo", { price, social, photo })
              }
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require(`../../assets/depth-3-frame-11.png`)}
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
                navigation.navigate("PricePerPost", { social, follower, photo })
              }
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require(`../../assets/depth-3-frame-11.png`)}
              />
            </TouchableOpacity>
          </View>
          <FormField
            label={"Location"}
            value={location}
            setValue={setLocation}
          />

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
          <View style={styles.loginFrame}>
            <Text>Already have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(InfluencerRegistrationFormStyles);

export default InfluencerRegistrationForm;
