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
import { Color, FontSize } from "../../GlobalStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MultipleSelectList from "../../shared/MultiSelect";
import { CountryPicker } from "react-native-country-codes-picker";
import DropDown from "../../shared/DropDown";
import Loader from '../../shared/Loader'

const FormField = ({
  label,
  value,
  setValue,
  secureTextEntry = false,
  showPassword,
  setShowPassword,
  style,
}) => (
  <View style={[styles.fieldContainer, style]}>
    <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Text style={styles.madantoryText}>*</Text>
    </View>
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("Male");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selected, setSelected] = useState([]);
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
  const [openCountryCode, setOpenCountryCode] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNoVerified, setMobileNoVerified] = useState(false);
  const[loading,setLoading]=useState(false)
  const data = [
    { key: "grocery", value: "Grocery" },
    { key: "electronics", value: "Electronics" },
    { key: "fashion", value: "Fashion" },
    { key: "toys", value: "Toys" },
    { key: "beauty", value: "Beauty" },
    { key: "home-decoration", value: "Home Decoration" },
    { key: "fitness", value: "Fitness" },
    { key: "education", value: "Education" },
    { key: "others", value: "Others" },
  ];

  const genderData = [
    {
      key: "male",
      value: "Male",
    },
    {
      key: "female",
      value: "Female",
    },
  ];
  useEffect(() => {
    if (
      name &&
      mobileNumber &&
      email &&
      password &&
      username &&
      location &&
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
  useEffect(() => {
    if (!route.params) {
      setEmail("");
      setPassword("");
      setUsername("");
      setOver18(false);
      setAgreedToTerms(false);
      setIndustryAssociation(false);
      setLocation("");
    }
  }, [route.params]);
  const handleSelectPlan = async () => {
    setLoading(true)
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
      name,
      country: countryCode,
      number: mobileNumber,
      selected,
      gender,
    };
    await InfluencerVerify(payload, navigation, showAlert);
    setLoading(false)
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {loading&&<Loader loading={loading}/>}
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
          <FormField label="Name" value={name} setValue={setName} />
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
          <View style={styles.depth1Frame2}>
            <View style={[styles.depth2Frame02, styles.frameLayout]}>
              <View style={styles.frameLayout}>
                <View style={styles.depth4Frame02}>
                  <Text style={[styles.email, styles.emailTypo]}>Gender</Text>
                  <Text style={styles.madantoryText}>*</Text>
                </View>
                <View>
                  <View>
                    <DropDown
                      name={gender}
                      items={genderData}
                      icon={"none"}
                      dropDownOptionStyle={{
                        width: "100%",
                        paddingVertical: 16,
                      }}
                      dropDownContainerStyle={{ width: "100%" }}
                      dropDownItemsStyle={{ width: "100%"}}
                      titleStyle={{ paddingStart: 12, color: "#4F7A94" }}
                      selectedValue={setGender}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.mobileNoWrap}>
            <View style={[styles.fieldContainer, { width: "100%" }]}>
              <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                <Text style={styles.fieldLabel}>Mobile Number</Text>
                <Text style={styles.madantoryText}>*</Text>
              </View>
              <View style={[styles.textInput, styles.mobileNoWrap]}>
                <View
                  style={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setOpenCountryCode(true);
                    }}
                  >
                    <Text
                      style={{
                        color: "#4F7A94",
                        fontSize: FontSize.size_base,
                        paddingEnd: 12,
                        borderRightWidth: 2,
                        borderRightColor: "#ccc",
                      }}
                    >
                      {countryCode}
                    </Text>
                  </TouchableOpacity>
                  <TextInput
                    style={{
                      color: "#4F7A94",
                      fontSize: FontSize.size_base,
                      outlineStyle: "none",
                      width: "90%",
                      height: "100%",
                      paddingStart: 8,
                    }}
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    placeholder={"Mobile Number"}
                    keyboardType="phone-pad"
                  />
                </View>
                {mobileNoVerified ? (
                  <Image
                    style={{ width: 28, height: 28 }}
                    source={{ uri: "" }}
                  />
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setMobileNoVerified(true);
                    }}
                  >
                    <Image
                      style={{ width: 28, height: 28 }}
                      source={{ uri: "" }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame2}>
            <View style={[styles.depth2Frame02, styles.frameLayout]}>
              <View style={styles.frameLayout}>
                <View style={styles.depth4Frame02}>
                  <Text style={[styles.email, styles.emailTypo]}>
                    Influencer Type
                  </Text>
                  <Text style={styles.madantoryText}>*</Text>
                </View>
                <View>
                  <View>
                    <MultipleSelectList
                      setSelected={(val) => setSelected(val)}
                      data={data}
                      save="value"
                      selectedval={selected}
                      setSelectedVal={setSelected}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.sectionHeader}>
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.sectionHeaderText}>
                  Add social profiles
                </Text>
                <Text style={styles.madantoryText}>*</Text>
              </View>
              <Text style={styles.desc}>Atleast one field is mandatory</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InfluencerSocialHandles", {
                  price,
                  follower,
                  photo,
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
            <View style={styles.labelWrapper}>
              <Text style={styles.sectionHeaderText}>Add Profile Photo</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("UserProfilePhoto", {
                  price,
                  follower,
                  social,
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
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.sectionHeaderText}>
                  Add Social Followers
                </Text>
                <Text style={styles.madantoryText}>*</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MaxFollowersNo", {
                  price,
                  social,
                  photo,
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
            <View style={styles.labelWrapper}>
              <Text style={styles.sectionHeaderText}>
                Content and age restriction
              </Text>
              <Text style={styles.madantoryText}>*</Text>
            </View>
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
            <View style={styles.labelWrapper}>
              <Text style={styles.sectionHeaderText}>Industry association</Text>
              <Text style={styles.madantoryText}>*</Text>
            </View>
          </View>
          <HeadingDescToggle
            heading="I am a member of an industry association"
            toggleOn={industryAssociation}
            setToggleOn={setIndustryAssociation}
          />
          <View style={styles.sectionHeader}>
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.sectionHeaderText}>Price per post</Text>
                <Text style={styles.madantoryText}>*</Text>
              </View>
              <Text style={styles.desc}>Atleast one field is mandatory</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PricePerPost", {
                  social,
                  follower,
                  photo,
                  price,
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
          <FormField
            label={"Location"}
            value={location}
            setValue={setLocation}
          />
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
      <CountryPicker
        show={openCountryCode}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setOpenCountryCode(false);
        }}
        style={{
          modal: {
            height: 300,
            width: "100%",
            maxWidth: "100%",
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create(InfluencerRegistrationFormStyles);

export default InfluencerRegistrationForm;
