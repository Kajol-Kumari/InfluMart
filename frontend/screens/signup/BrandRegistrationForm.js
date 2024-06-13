import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Color } from "../../GlobalStyles";
import MultipleSelectList from "../../shared/MultiSelect";
import { SendOtp } from "../../controller/signupController";
import { signupStyles } from "./SignUpStyles.scss";


const BrandRegistrationForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [selected, setSelected] = useState([]);

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

  const handleSubmit = async () => {
    // Construct the payload
    const payload = {
      email,
      password,
      category: selected,
      name: username,
    };
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
    if (!email || !password || !selected.length || !username) {
      Alert.alert("Error", "Please fill all the fields");
      return;
    }
    if (password.length < 8) {
      Alert.alert("Error", "Password should be at least 8 characters long");
      return;
    }
    await SendOtp(payload, navigation);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.brandregistrationform}>
        <View style={[styles.depth0Frame0, styles.frameLayout2]}>
          <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
            <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock]}>
              <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
                <View style={[styles.depth3Frame0, styles.frameLayout1]}>
                  <Image
                    style={styles.depth4Frame0}
                    contentFit="cover"
                    source={require("../../assets/depth-4-frame-07.png")}
                  />
                </View>
                <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
                  <View style={[styles.depth4Frame01, styles.frameLayout1]}>
                    <View style={[styles.depth5Frame0, styles.frameLayout1]} />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame01}>
              <Text style={styles.createAnAccount}>Create a Brand account</Text>
            </View>
          </View>
          <View style={styles.depth1Frame2}>
            <View style={[styles.depth2Frame02, styles.frameLayout]}>
              <View style={styles.frameLayout}>
                <View style={styles.depth4Frame02}>
                  <Text style={[styles.email, styles.emailTypo]}>Email</Text>
                </View>
                <View>
                  <View style={[styles.depth5Frame01]}>
                    <TextInput
                      style={styles.textInput}
                      value={email}
                      onChangeText={setEmail}
                      placeholder="Email"
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame2}>
            <View style={[styles.depth2Frame02, styles.frameLayout]}>
              <View style={styles.frameLayout}>
                <View style={styles.depth4Frame02}>
                  <Text style={[styles.email, styles.emailTypo]}>Password</Text>
                </View>
                <View style={styles.depth4Frame1}>
                  <View style={[styles.depth5Frame01, styles.depth5FrameBg]}>
                    <TextInput
                      style={styles.textInput}
                      value={password}
                      onChangeText={setPassword}
                      placeholder="Password"
                      secureTextEntry
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame2}>
            <View style={[styles.depth2Frame02, styles.frameLayout]}>
              <View style={styles.frameLayout}>
                <View style={styles.depth4Frame02}>
                  <Text style={[styles.email, styles.emailTypo]}>
                    Brand Type
                  </Text>
                </View>
                <View>
                  <View>
                    <MultipleSelectList
                      setSelected={(val) => setSelected(val)}
                      data={data}
                      save="value"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame6}>
            <View style={[styles.depth2Frame06]}>
              <View style={styles.frameLayout}>
                <View style={styles.depth4Frame02}>
                  <Text style={[styles.email, styles.emailTypo]}>Username</Text>
                </View>
                <View style={styles.depth4Frame06}>
                  <View style={[styles.depth5Frame01, styles.depth5FrameBg]}>
                    <TextInput
                      style={styles.textInput}
                      value={username}
                      onChangeText={setUsername}
                      placeholder="Username"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame6}>
            <View style={styles.depth2Frame06}>
              <View style={styles.depth3FrameLayout}>
                <TouchableOpacity onPress={handleSubmit}>
                  <View style={[styles.depth4Frame07, styles.frameBg]}>
                    <View style={[styles.depth5Frame06, styles.frameBg]}>
                      <View style={styles.depth7Frame0}>
                        <Text style={[styles.signUp, styles.signUpTypo]}>
                          Generate OTP
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.loginFrame}>
                <Text>Already have account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginPageBrands")}
                >
                  <Text style={{ color: Color.colorDodgerblue }}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.depth1Frame7, styles.frameLayout2]} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(signupStyles);

export default BrandRegistrationForm;
