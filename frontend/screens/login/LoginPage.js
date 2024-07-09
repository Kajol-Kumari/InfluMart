import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { handleInfluencerLogin } from '../../controller/loginController';
import { loginStyle } from './LoginStyle';
import { Color } from "../../GlobalStyles";
import { useAlert } from "../../util/AlertContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import the icon component
import { forgotPasswordControl } from "../../controller/PasswordController";
import Loader from '../../shared/Loader'

const LoginPage = () => {
  const navigation = useNavigation();
  const { showAlert } = useAlert();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false); // State to manage password visibility
  const[loading,setLoading]=React.useState(false)

  return (
    <ScrollView style={{ width: '100%', height: "100%", backgroundColor: Color.colorWhitesmoke_100 }}>
      {loading&&<Loader loading={loading}/>}
      <TouchableOpacity onPress={() => navigation.navigate('BrandorInfluencer')}>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
            <View style={[styles.depth3Frame0, styles.frameLayout1]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../../assets/depth-4-frame-07.png")}
              />
            </View>
            <View style={styles.depth1Frame1}>
              <View style={styles.depth2Frame01}>
                <Text style={styles.welcomeBack}>Welcome back!</Text>
              </View>
            </View>
            <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
              <View style={[styles.depth4Frame01, styles.frameLayout1]}>
                <View style={[styles.depth5Frame0, styles.frameLayout1]} />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ margin: 15 }}>
        <View style={styles.depth2Frame01}>
          <Text style={styles.getReadyTo}>
            Get ready to start earning. Please log in to continue.
          </Text>
        </View>
      </View>
      <View style={{ margin: 15 }}>
        <View style={styles.depth5Frame01}>
          <View style={styles.depth6Frame0}>
            <View style={styles.depth2Frame01}>
              <TextInput
                placeholder="Username"
                style={[styles.email, styles.emailClr]}
                value={username}
                onChangeText={setUsername}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ margin: 15 }}>
        <View style={styles.depth5Frame01}>
          <View style={styles.depth6Frame0}>
            <View style={styles.depth2Frame01}>
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  textContentType='password'
                  style={[styles.email, styles.emailClr, { flex: 1 }]}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? "eye-off" : "eye"}
                    size={20}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.depth1Frame5, styles.depth1FrameSpaceBlock]}>
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordPage",{type:"influencer"})}>
        <View style={styles.depth2Frame01}>
          <Text style={[styles.forgotYourPassword, styles.logInTypo]}>
            Forgot your password?
          </Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 15 }}>
        <View style={styles.depth2Frame06}>
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={async () => {
              setLoading(true)
              let result = await handleInfluencerLogin(username, password);
              if (result.success) {
                showAlert("Success", result.message);
                navigation.navigate("UserProfile");
                setUsername("");
                setPassword("");
              } else {
                showAlert("Error", result.message);
              }
              setLoading(false)
            }}
          >
            <View style={[styles.depth4Frame04, styles.depth4FrameLayout]}>
              <View style={[styles.depth5Frame03, styles.frameBg1]}>
                <View style={styles.depth2Frame01}>
                  <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
            <View style={styles.loginFrame}>
              <Text style={styles.termsText}>
                By joining, you agree to our{" "}
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate("TosScreen",{navigate:"LoginPage"})}>
                <Text style={styles.linkText}>Terms of Service</Text>
              </TouchableOpacity>
              <Text style={styles.termsText}> and </Text>
              <TouchableOpacity onPress={()=>navigation.navigate("PPScreen",{navigate:"LoginPage"})}>
                <Text style={styles.linkText}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginFrame}>
              <Text>Create a new Account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("InfluencerRegistrationForm")}
              >
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(loginStyle);

export default LoginPage;
