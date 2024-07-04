import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { resetPasswordControl } from "../../controller/PasswordController";
import { loginStyle } from "./LoginStyle";
import { Image } from "expo-image";
import { Color } from "../../GlobalStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ResetPasswordPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { token } = route.params;
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordC, setShowPasswordC] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const showAlert = (title, message) => {
    Alert.alert(title, message);
  };

  const handlePasswordReset = async () => {
    if (newPassword !== confirmPassword) {
      showAlert("Error", "Passwords do not match");
      return;
    }
    resetPasswordControl(token, newPassword, showAlert, navigation);
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
            Please Enter your new password to reset password.
          </Text>
        </View>
      </View>
      <View style={{ margin: 15 }}>
        <View style={styles.depth5Frame01}>
          <View style={styles.depth6Frame0}>
            <View style={styles.depth2Frame01}>
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="New Password"
                  secureTextEntry={!showPassword}
                  textContentType='password'
                  style={[styles.email, styles.emailClr, { flex: 1 }]}
                  value={newPassword}
                  onChangeText={setNewPassword}
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
      <View style={{ margin: 15 }}>
        <View style={styles.depth5Frame01}>
          <View style={styles.depth6Frame0}>
            <View style={styles.depth2Frame01}>
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Confirm Password"
                  secureTextEntry={!showPasswordC}
                  textContentType='password'
                  style={[styles.email, styles.emailClr, { flex: 1 }]}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setShowPasswordC(!showPasswordC)}>
                  <Icon
                    name={showPasswordC ? "eye-off" : "eye"}
                    size={20}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ margin: 15 }}>
        <View style={styles.depth2Frame06}>
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => handlePasswordReset()}
          >
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

export default ResetPasswordPage;

