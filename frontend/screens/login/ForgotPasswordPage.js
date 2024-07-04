import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { loginStyle } from "./LoginStyle";
import { Color } from "../../GlobalStyles";
import { useAlert } from "../../util/AlertContext";
import { forgotPasswordControl } from "../../controller/PasswordController";

const ForgotPasswordPage = ({route, navigation}) => {
  const { showAlert } = useAlert();
  const type = route.params?.type;
  console.log(route.params)
  const [username, setUsername] = React.useState("");
  const handleForgotPassword = async () => {
    await forgotPasswordControl(username, type, showAlert);
  };

  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: Color.colorWhitesmoke_100,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("BrandorInfluencer")}
      >
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
            Please Enter your mail to reset your password.
          </Text>
        </View>
      </View>
      <View style={{ margin: 15 }}>
        <View style={styles.depth5Frame01}>
          <View style={styles.depth6Frame0}>
            <View style={styles.depth2Frame01}>
              <TextInput
                placeholder="email"
                style={[styles.email, styles.emailClr]}
                value={username}
                onChangeText={setUsername}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ margin: 15 }}>
        <View style={styles.depth2Frame06}>
          <TouchableOpacity style={{ width: "100%" }} onPress={()=>handleForgotPassword()}>
            <View style={[styles.depth4Frame04, styles.depth4FrameLayout]}>
              <View style={[styles.depth5Frame03, styles.frameBg1]}>
                <View style={styles.depth2Frame01}>
                  <Text style={[styles.logIn, styles.logInTypo]}>Submit</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.loginFrame}>
            <Text style={styles.termsText}>By joining, you agree to our </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TosScreen", { navigate: "LoginPage" })
              }
            >
              <Text style={styles.linkText}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}> and </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PPScreen", { navigate: "LoginPage" })
              }
            >
              <Text style={styles.linkText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(loginStyle);

export default ForgotPasswordPage;
