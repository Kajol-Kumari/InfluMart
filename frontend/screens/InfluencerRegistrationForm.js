import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Switch, Picker, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveWidth, responsiveHeight, responsiveFontSize, responsiveScreenWidth, responsiveScreenHeight } from "react-native-responsive-dimensions";
import Depth1Frame2 from "../components/Depth1Frame2";
import Depth1Frame18 from "../components/Depth1Frame18";
import { Color, Padding, FontFamily, Border, FontSize } from "../GlobalStyles";

const InfluencerRegistrationForm = () => {
  const navigation = useNavigation();

  const [formState, setFormState] = useState({
    email: '',
    password: '',
    username: '',
    isOver18: false,
    isTermsAccepted: false,
    association: '',
    expandedBrand: null,
    socialHandle: '',
    inputVisible: false,
    showUSDInput: false,
    showLocationDropdown: false,
    isPasswordVisible: false,
    selectedPlan: '',
    selectedLocation: '',
  });

  const togglePasswordVisibility = () => {
    setFormState(prevState => ({ ...prevState, isPasswordVisible: !prevState.isPasswordVisible }));
  };

  const toggleUSDInput = () => {
    setFormState(prevState => ({
      ...prevState,
      showUSDInput: !prevState.showUSDInput,
      showLocationDropdown: false,
    }));
  };

  const toggleLocationDropdown = () => {
    setFormState(prevState => ({
      ...prevState,
      showLocationDropdown: !prevState.showLocationDropdown,
      showUSDInput: false,
    }));
  };

  const toggleAccordion = (brand) => {
    setFormState(prevState => ({
      ...prevState,
      expandedBrand: prevState.expandedBrand === brand ? null : brand,
      inputVisible: true,
      socialHandle: '',
    }));
  };

  const saveSocialHandle = () => {
    console.log(`Saved ${formState.socialHandle} for ${formState.expandedBrand}`);
    setFormState(prevState => ({ ...prevState, inputVisible: false }));
  };

  const toggleSwitch = () => {
    setFormState(prevState => ({ ...prevState, isOver18: !prevState.isOver18 }));
  };

  const toggleTermsSwitch = () => {
    setFormState(prevState => ({ ...prevState, isTermsAccepted: !prevState.isTermsAccepted }));
  };

  const handleAssociationChange = (itemValue) => {
    setFormState(prevState => ({ ...prevState, association: itemValue }));
  };

  const handlePlanSelect = (plan) => {
    setFormState(prevState => ({ ...prevState, selectedPlan: plan }));
  };

  const handleLocationChange = (itemValue) => {
    setFormState(prevState => ({ ...prevState, selectedLocation: itemValue }));
  };

  const handleSignUp = () => {
    console.log("Sign up data:", formState);
    // Handle sign-up logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('BrandorInfluencer')}>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Sign up</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.formSection}>
          <Text style={styles.sectionHeaderText}>Account Information</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#000"
              value={formState.email}
              onChangeText={(text) => setFormState({ ...formState, email: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#000"
                secureTextEntry={!formState.isPasswordVisible}
                value={formState.password}
                onChangeText={(text) => setFormState({ ...formState, password: text })}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                <Icon name={formState.isPasswordVisible ? "eye" : "eye-off"} size={responsiveFontSize(2)} color='gray' />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#000"
              value={formState.username}
              onChangeText={(text) => setFormState({ ...formState, username: text })}
            />
          </View>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionHeaderText}>Add Social Profiles</Text>

          {["Instagram", "YouTube", "Snapchat", "TikTok", "Facebook", "Twitter"].map((brand, index) => (
            <View key={index} style={styles.brandItem}>
              <TouchableOpacity onPress={() => toggleAccordion(brand)}>
                <Depth1Frame2
                  brands={brand}
                  depth3Frame1={require("../assets/depth-3-frame-11.png")}
                  propBackgroundColor="#f7fafa"
                  propFontFamily="PlusJakartaSans-Regular"
                  propColor="#0d171c"
                />
              </TouchableOpacity>
              {formState.expandedBrand === brand && formState.inputVisible && (
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder={`Enter ${brand} handle`}
                    value={formState.socialHandle}
                    onChangeText={(text) => setFormState({ ...formState, socialHandle: text })}
                  />
                  <TouchableOpacity style={styles.button} onPress={saveSocialHandle}>
                    <Text style={styles.buttonText}>Verify</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionHeaderText}>Content and Age Restriction</Text>

          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>I am over 18</Text>
            <Switch
              onValueChange={toggleSwitch}
              value={formState.isOver18}
              trackColor={{ false: "red", true: "#000" }}
              thumbColor={formState.isOver18 ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#000"
              style={styles.switch}
            />
          </View>
          {!formState.isOver18 && (
            <Text style={styles.warningText}>You must be at least 18.</Text>
          )}

          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>I agree to the terms of service</Text>
            <Switch
              onValueChange={toggleTermsSwitch}
              value={formState.isTermsAccepted}
              trackColor={{ false: "red", true: "#000" }}
              thumbColor={formState.isTermsAccepted ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#000"
              style={styles.switch}
            />
          </View>
          {!formState.isTermsAccepted && (
            <Text style={styles.warningText}>You need to agree to the T&C.</Text>
          )}
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionHeaderText}>Industry Association</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>I'm associated with</Text>
            <Picker
              selectedValue={formState.association}
              onValueChange={handleAssociationChange}
              style={styles.picker}
            >
              <Picker.Item label="Select association..." value="" />
              <Picker.Item label="Vlogger" value="vlogger" />
              <Picker.Item label="Fashion Influencer" value="fashion_influencer" />
              <Picker.Item label="Lifestyle Vlogger" value="lifestyle_vlogger" />
              <Picker.Item label="Tech Reviewer" value="tech_reviewer" />
              <Picker.Item label="Others" value="others" />
            </Picker>
          </View>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionHeaderText}>Additional Details</Text>

          <TouchableOpacity style={styles.detailItem} onPress={toggleUSDInput}>
            <Text style={styles.detailText}>Price per post</Text>
            <Depth1Frame2
              brands="USD"
              depth3Frame1={require("../assets/depth-3-frame-12.png")}
              propBackgroundColor="#f7fafa"
              propFontFamily="PlusJakartaSans-Regular"
              propColor="#0d171c"
            />
          </TouchableOpacity>
          {formState.showUSDInput && (
            <TextInput
              style={styles.input}
              placeholder="Enter price in USD"
              keyboardType="numeric"
            />
          )}

          <TouchableOpacity style={styles.detailItem} onPress={toggleLocationDropdown}>
            <Text style={styles.detailText}>Location</Text>
            <Depth1Frame2
              brands="United States"
              depth3Frame1={require("../assets/depth-3-frame-12.png")}
              propBackgroundColor="#f7fafa"
              propFontFamily="PlusJakartaSans-Regular"
              propColor="#0d171c"
            />
          </TouchableOpacity>
          {formState.showLocationDropdown && (
            <Picker
              selectedValue={formState.selectedLocation}
              style={styles.dropdown}
              onValueChange={handleLocationChange}
            >
              <Picker.Item label="Select location..." value="" />
              <Picker.Item label="United States" value="US" />
              <Picker.Item label="Canada" value="CA" />
            </Picker>
          )}
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionHeaderText}>Subscription Plan</Text>
          
          <Depth1Frame18/>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlanChooseInterface')}>
              <Text style={styles.buttonText}>Select Plan</Text>
            </TouchableOpacity>
          </View>

          {formState.selectedPlan && (
            <Text style={styles.warningText}>Selected Plan: {formState.selectedPlan}</Text>
          )}
        </View>

        <TouchableOpacity style={styles.signUpbtn} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginFrame}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
            <Text style={{ color: Color.colorDodgerblue }}>Login</Text>
         </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 0,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
  },
  signUpContainer: {
    marginBottom: responsiveHeight(2),
  },
  signUpText: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  formSection: {
    marginBottom: responsiveHeight(2),
  },
  sectionHeaderText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    color: "#000",
    marginBottom: responsiveHeight(1),
  },
  inputContainer: {
    marginBottom: responsiveHeight(1.5),
  },
  label: {
    fontSize: responsiveFontSize(2),
    color: "#000",
    // fontWeight: 'bold',
    marginBottom: responsiveHeight(0.5),
  },
  input: {
    fontSize: responsiveFontSize(2),
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: responsiveWidth(2),
    padding: responsiveWidth(3),
    color: "#000",
    backgroundColor: Color.colorAliceblue,
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: responsiveWidth(2),
    padding: responsiveWidth(3),
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  signUpbtn: {
    backgroundColor: Color.colorCornflowerblue,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: responsiveFontSize(2),
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: responsiveHeight(1),
  },
  switchText: {
    fontSize: responsiveFontSize(2),
    color: "#000",
  },
  switch: {
    transform: [{ scaleX: responsiveFontSize(0.1) }, { scaleY: responsiveFontSize(0.1) }],
  },
  warningText: {
    fontSize: responsiveFontSize(1.8),
    color: "red",
    marginTop: responsiveHeight(0.5),
  },
  picker: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: responsiveWidth(2),
    fontSize: responsiveFontSize(1.5),
  },
  detailItem: {
    marginBottom: responsiveHeight(1.5),
  },
  detailText: {
    fontSize: responsiveFontSize(2),
    color: "#000",
    marginBottom: responsiveHeight(0.5),
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
  },
  brandItem: {
    marginBottom: responsiveHeight(1.5),
  },
  loginFrame: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(4),
  },
});

export default InfluencerRegistrationForm;
