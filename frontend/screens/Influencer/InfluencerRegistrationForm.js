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
import Dropdown from "./components/Dropdown";
import HeadingDescToggle from "../signup/components/HeadingDescToggle";
import { Ionicons } from '@expo/vector-icons';
import InfluPrice from "../signup/components/InfluPrice";
import { InfluencerVerify } from "../../controller/signupController";
import { InfluencerRegistrationFormStyles } from "./InfluencerRegstrationForm.scss";

const FormField = ({ label, value, setValue, secureTextEntry = false, isPasswordField = false, togglePasswordVisibility }) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
        placeholder={label}
        secureTextEntry={secureTextEntry}
      />
      {isPasswordField && (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="#778899" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const industryOptions = [
  'Vlogger',
  'Fashion Influencer',
  'Lifestyle Vlogger',
  'Tech Reviewer',
  'Others',
];

const locationOptions = [
  'Us',
  'Canada',
  'Others',
];

const InfluencerRegistrationForm = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [over18, setOver18] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [industryAssociation, setIndustryAssociation] = useState(null); // State for industry association
  const [location, setLocation] = useState("");
  const social = route.params?.social;
  const follower = route.params?.follower;
  const price = route.params?.price;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check form validity based on state values
    setIsFormValid(
      email &&
      password &&
      username &&
      location &&
      over18 &&
      agreedToTerms &&
      social &&
      follower &&
      price &&
      industryAssociation // Include industryAssociation in form validity check
    );
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
    industryAssociation,
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
    };
    await InfluencerVerify(payload, navigation);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <ScrollView>
      <View style={styles.influencerRegistrationForm}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BrandorInfluencer")}
        >
          <View style={styles.header}>
            <Text style={styles.heading}>Sign up</Text>
          </View>
        </TouchableOpacity>

        <FormField label="Email" value={email} setValue={setEmail} />
        <FormField
          label="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={!isPasswordVisible}
          isPasswordField={true}
          togglePasswordVisibility={togglePasswordVisibility}
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
              navigation.navigate("MaxFollowersNo", { price, social })
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
        <Dropdown
          options={industryOptions}
          selectedValue={industryAssociation}
          onSelect={setIndustryAssociation}
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
              source={require(`../../assets/depth-3-frame-11.png`)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Location</Text>
        </View>
        <Dropdown
          options={locationOptions}
          selectedValue={location}
          onSelect={setLocation}
        />
        {/* <FormField value={location} setValue={setLocation} /> */}

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

const styles = StyleSheet.create(InfluencerRegistrationFormStyles);

export default InfluencerRegistrationForm;
