import React, { useState }  from "react";
import { StyleSheet, View, Text, Modal, TextInput, ScrollView, TouchableOpacity, Switch, Picker, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Depth1Frame2 from "../components/Depth1Frame2";
import Depth1Frame18 from "../components/Depth1Frame18";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

const InfluencerRegistrationForm = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isOver18, setIsOver18] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [association, setAssociation] = useState(''); 
  const [expandedBrand, setExpandedBrand] = useState(null);
  const [socialHandle, setSocialHandle] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const [showUSDInput, setShowUSDInput] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleUSDInput = () => {
    setShowUSDInput(!showUSDInput);
    setShowLocationDropdown(false); // Close location dropdown if open
  };

  const toggleLocationDropdown = () => {
    setShowLocationDropdown(!showLocationDropdown);
    setShowUSDInput(false); // Close USD input if open
  };

  // Function to toggle accordion content
  const toggleAccordion = (brand) => {
    if (expandedBrand === brand) {
      setExpandedBrand(null);
      setInputVisible(false);
    } else {
      setExpandedBrand(brand);
      setInputVisible(true);
    }
    setSocialHandle('');
  };

  // Function to save social handle
  const saveSocialHandle = () => {
    // Here you can save the social handle and perform any verification
    console.log(`Saved ${socialHandle} for ${expandedBrand}`);
    setInputVisible(false);
  };

  const toggleSwitch = () => setIsOver18(previousState => !previousState);

  const toggleTermsSwitch = () => setIsTermsAccepted(previousState => !previousState);

  // Function to handle industry association selection
  const handleAssociationChange = (itemValue) => {
    setAssociation(itemValue);
  };
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.influencerregistrationform}>
        <View style={[styles.depth0Frame0, styles.frameLayout3]}>
        <TouchableOpacity onPress={() => navigation.navigate('BrandorInfluencer')}>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Sign up</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
        <View style={[styles.depth2Frame01, styles.frameLayout2]}>
          <View style={styles.frameLayout2}>
            <View style={styles.depth4Frame02}>
              <Text style={[styles.email, styles.emailTypo]}>Email</Text>
            </View>
            <View style={styles.depth4Frame1}>
              <View style={[styles.depth5Frame01, styles.frameLayout1]}>
                  <View style={styles.depth5Frame0}>
                    <TextInput
                      style={[styles.email1, styles.email1Typo]}
                      placeholder="Email"
                      placeholderTextColor="#000"
                      value={email}
                      onChangeText={setEmail}
                    />
                  </View>
                </View>
              </View>
          </View>
        </View>
      </View>

      <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
        <View style={[styles.depth2Frame01, styles.frameLayout2]}>
          <View style={styles.frameLayout2}>
            <View style={styles.depth4Frame02}>
              <Text style={[styles.email, styles.emailTypo]}>Password</Text>
            </View>
            <View style={styles.depth4Frame1}>
              <View style={[styles.depth5Frame01, styles.frameLayout1]}>
                <View style={styles.depth6Frame01}>
                  <View style={styles.depth5Frame0}>
                    <View style={styles.passwordContainer}>
                      <TextInput
                        style={[styles.email1, styles.email1Typo, styles.passwordInput]}
                        placeholder="Password"
                        placeholderTextColor="#000"
                        secureTextEntry={!isPasswordVisible}
                        value={password}
                        onChangeText={setPassword}
                      />
                      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                        <Icon name={isPasswordVisible ? "eye" : "eye-off"} size={responsiveScreenHeight(2.5)} color="#000" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
        <View style={[styles.depth2Frame01, styles.frameLayout2]}>
          <View style={styles.frameLayout2}>
            <View style={styles.depth4Frame02}>
              <Text style={[styles.email, styles.emailTypo]}>Username</Text>
            </View>
            <View style={styles.depth4Frame1}>
              <View style={[styles.depth5Frame01, styles.frameLayout1]}>
                <View style={styles.depth6Frame02}>
                  <View style={styles.depth5Frame0}>
                    <TextInput
                      style={[styles.email1, styles.email1Typo]}
                      placeholder="Username"
                      placeholderTextColor="#000"
                      value={username}
                      onChangeText={setUsername}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

        <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionHeaderText}>Add social profiles</Text>
        </View>
        {["Instagram", "YouTube", "Snapchat", "TikTok", "Facebook", "Twitter"].map((brand, index) => (
          <View key={index}>
            <TouchableOpacity
              style={styles.brandItem}
              onPress={() => toggleAccordion(brand)}
            >
              {/* <Text style={styles.brandText}>{brand}</Text> */}
              <Depth1Frame2
              brands={brand}
              depth3Frame1={require("../assets/depth-3-frame-11.png")}
              propBackgroundColor="#f7fafa"
              propFontFamily="PlusJakartaSans-Regular"
              propColor="#0d171c"
            />
            </TouchableOpacity>
            {expandedBrand === brand && inputVisible && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder={`Enter ${brand} handle`}
                  value={socialHandle}
                  onChangeText={text => setSocialHandle(text)}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={saveSocialHandle}
                >
                  <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </View>


    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Content and age restriction</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.textContainer}>
          <View style={styles.switchContainer}>
            <Text style={styles.text}>I am over 18</Text>
            <Switch
              onValueChange={toggleSwitch}
              value={isOver18}
              trackColor={{ false: "red", true: "#000" }}
              thumbColor={isOver18 ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#000"
              style={styles.switch}
            />
          </View>
          {!isOver18 && (
            <Text style={styles.warningText}>You must be at least 18.</Text>
          )}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.textContainer}>
          <View style={styles.switchContainer}>
            <Text style={styles.text}>I agree to the terms of service</Text>
            <Switch
              onValueChange={toggleTermsSwitch}
              value={isTermsAccepted}
              trackColor={{ false: "red", true: "#000" }}
              thumbColor={isOver18 ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#000"
              style={styles.switch}
            />
          </View>
          {!isTermsAccepted && (
            <Text style={styles.warningText}>You need to agree to the T&C.</Text>
          )}
        </View>
      </View>

      <View style={styles.section}>
            <Text style={styles.title}>Industry association</Text>
          </View>
          <View style={styles.section}>
          <Text style={styles.text}>I'm associated with</Text>
            <Picker
              selectedValue={association}
              onValueChange={handleAssociationChange}
              style={{ height: responsiveHeight(5), width: '100%' }}
            >
              <Picker.Item label="Select association..." value="" />
              <Picker.Item label="Vlogger" value="vlogger" />
              <Picker.Item label="Fashion Influencer" value="fashion_influencer" />
              <Picker.Item label="Lifestyle Vlogger" value="lifestyle_vlogger" />
              <Picker.Item label="Tech Reviewer" value="tech_reviewer" />
              <Picker.Item label="Others" value="others" />
              {/* Add more associations as needed */}
            </Picker>
          </View>
      </View>

        <View style={styles.container}>
        <View style={styles.section}>
          <TouchableOpacity onPress={toggleUSDInput}>
            <Text style={styles.title}>Price per post</Text>
            <Depth1Frame2
              brands="USD"
              depth3Frame1={require("../assets/depth-3-frame-12.png")}
              propBackgroundColor="#f7fafa"
              propFontFamily="PlusJakartaSans-Regular"
              propColor="#0d171c"
            />
          </TouchableOpacity>
          {showUSDInput && (
            <TextInput
              style={styles.input}
              placeholder="Enter price in USD"
              keyboardType="numeric"
            />
          )}
        </View>
        <View style={styles.section}>
          <TouchableOpacity onPress={toggleLocationDropdown}>
            <Text style={styles.title}>Location</Text>
            <Depth1Frame2
              brands="United States"
              depth3Frame1={require("../assets/depth-3-frame-13.png")}
              propBackgroundColor="#f7fafa"
              propFontFamily="PlusJakartaSans-Regular"
              propColor="#0d171c"
            />
          </TouchableOpacity>
          {showLocationDropdown && (
            <Picker style={styles.dropdown}>
              <Picker.Item label="United States" value="US" />
              <Picker.Item label="Canada" value="CA" />
              {/* Add more locations as needed */}
            </Picker>
          )}
        </View>
        <View style={styles.section}>
            <Text style={styles.title}>Subscription plans</Text>
          </View>
      </View>

        
        <Depth1Frame18 />
        <View style={styles.container}>
          <View style={styles.section}>
            <TouchableOpacity onPress={() => navigation.navigate('PlanChooseInterface')}
              style={[styles.button]}
            >
              <Text style={styles.buttonText}> Select Plan</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('PlanChooseInterface')}>

        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.section}>
            <TouchableOpacity
              style={[styles.SignUpBtn, !isOver18 || !isTermsAccepted ? styles.buttonDisabled : null]}
              onPress={() => console.log('Submit')}
              disabled={!isOver18 || !isTermsAccepted}
            >
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.depth1Frame24, styles.frameLayout3]} />
      </View>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  frameLayout3: {
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  depth1FrameSpaceBlock1: {
    paddingHorizontal: Padding.p_5xl,
    width: responsiveWidth(100),
  },
  depth2FrameLayout: {
    height: 48,
    alignItems: "center",
  },
  signUpContainer: { // new
    height: responsiveHeight(10),
    backgroundColor: Color.colorWhitesmoke_200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Padding.p_5xs,
  },
  signUpText: { // new
    fontSize: responsiveFontSize(3),
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
  },
  // depth3FrameLayout: {
  //   width: 48,
  //   height: 48,
  // },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#ffffff',
  //   paddingHorizontal: 20,
  // },
  sectionHeader: {
    marginBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  brandItem: {
    backgroundColor: '#f7fafa',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    marginTop: responsiveHeight(1),
  },
  input: {
    height: responsiveHeight(5),
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Color.colorWhite,
  },
  SignUpBtn: {
    backgroundColor: Color.colorCornflowerblue,
    borderRadius: 10,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
    marginBottom: responsiveHeight(4),
  },
  button: {
    backgroundColor: Color.colorBlack,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: responsiveHeight(2),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  depth1FrameSpaceBlock: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: responsiveScreenWidth(5),
    width: responsiveWidth(100),
  },
  frameLayout2: { // input fields
    height: responsiveHeight(20),
    width: responsiveWidth(100),
  },
  emailTypo: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    lineHeight: responsiveHeight(5),
    fontSize: responsiveFontSize(1.8),
    textAlign: "left",
    color: Color.colorGray_100,
  },
  frameLayout1: {  // input area
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
  },
  email1Typo: {
    color: Color.colorSlategray_100,
    fontFamily: FontFamily.plusJakartaSansRegular,
    textAlign: "left",
  },
  frameBg: {
    backgroundColor: Color.colorSteelblue_100,
    overflow: "hidden",
  },
  email1Layout: {
    lineHeight: 24,
    fontSize: responsiveFontSize(1.4),
  },
  depth3Frame0: {
    alignItems: "center",
  },
  signUp: {
    fontSize: responsiveFontSize(3),
    lineHeight: 24,
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  warningText: {
    fontSize: responsiveFontSize(1.4),
    color: 'red',
    marginTop: 5,
  },
  email: {
    alignSelf: "stretch",
  },
  depth4Frame02: { // input fields padding
    height: responsiveHeight(6),
    width: responsiveWidth(100),
    paddingBottom: Padding.p_5xs,
  },
  email1: { // placeholder
    lineHeight: responsiveHeight(5),
    fontSize: responsiveFontSize(1.4),
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    padding: 5,
  },
  depth5Frame01: { // input heights
    padding: Padding.p_base,
    backgroundColor: Color.colorAliceblue,
    height: responsiveHeight(7),
    justifyContent: "space-between",
    overflow: "hidden",
  },
  depth4Frame1: { // text padding
    height: responsiveHeight(5),
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  depth2Frame01: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  depth1Frame1: { // input fields padding between
    height: responsiveHeight(14),
    alignItems: "center",
  },
  depth6Frame01: { // place holder  username
    width: 'auto',
    height: responsiveHeight(5),
    overflow: "hidden",
  },
  depth6Frame02: { // place holder  username
    width: 'auto',
    height: responsiveHeight(5),
    overflow: "hidden",
  },
  addSocialProfiles: {
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(0),
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame04: {
    width: 'auto',
    height: 30,
  },
  container: {
    padding: responsiveWidth(4),
  },
  section: {
    marginBottom: responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: responsiveHeight(1),
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    transform: [{ scaleX: responsiveScreenWidth(0.2) }, { scaleY: responsiveScreenWidth(0.2) }],
    marginLeft: 'auto', // To add space between the switch and the text
  },
  text: {
    fontSize: responsiveFontSize(2),
  },
  subText: {
    fontSize: responsiveFontSize(1.8),
    color: 'gray',
  },
  section: {
    marginBottom: responsiveHeight(2),
  },
  sectionHeaderText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  frameContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    height: responsiveHeight(5),
    width: '100%',
    marginBottom: 10,
  },
 
  createAccount: {
    color: Color.colorWhitesmoke_200,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  }, 
  depth3Frame015: { // select plan text
    width: 'auto',
    height: responsiveHeight(2),
  },
  depth2Frame013: { // select plan button
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    width: responsiveWidth(90),
    justifyContent: "center",
    alignItems: "center",
    height: responsiveHeight(8),
  },
  depth1Frame23: { //  paddding from bottom
    height: responsiveHeight(20),
  },
  depth1Frame24: {
    height: 20,
  },
  depth0Frame0: {
    height: "100%",
    overflow: "hidden",
  },
  influencerregistrationform: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default InfluencerRegistrationForm;
