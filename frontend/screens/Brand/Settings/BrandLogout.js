import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

import { BrandLogoutStyles } from "./BrandLogout.scss";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAlert } from "../../../util/AlertContext";

const BrandLogOutPage = ({ navigation }) => {
  const { showAlert } = useAlert();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("brandId");
      showAlert("Logout", "You have been logged out successfully");
      navigation.navigate("LoginPageBrands");
    } catch (error) {
      showAlert("Logout Error", "Something went wrong");
    }
  };
  return (
    <ScrollView style={styles.scrollView}>
      <TouchableOpacity onPress={() => navigation.navigate("BrandAdminPanel")}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <Image
              style={styles.headerImage}
              contentFit="cover"
              source={require("../../../assets/depth-4-frame-07.png")}
            />
            <Text style={styles.welcomeText}>Back</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.Text}>Are you sure?</Text>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          You will be logged out of your account.
        </Text>
      </View>
      <View style={styles.CancelButtonContainer}>
        <TouchableOpacity
          style={styles.CancelButton}
          onPress={() => navigation.navigate("BrandAdminPanel")}
        >
          <Text style={styles.CancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={()=>handleLogout()}>
          <Text style={styles.loginButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(BrandLogoutStyles);

export default BrandLogOutPage;
