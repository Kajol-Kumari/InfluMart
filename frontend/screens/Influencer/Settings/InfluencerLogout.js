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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { InfluencerLogoutStyles } from "./InfluencerLogout.scss";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAlert } from "../../../util/AlertContext";

const InfluencerLogOutPage = ({ navigation }) => {
  const { showAlert } = useAlert();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("influencerId");
      showAlert("Logout", "You have been logged out successfully");
      navigation.navigate("LoginPage");
    } catch (error) {
      showAlert("Logout Error", "Something went wrong");
    }
  };
  return (
    <ScrollView style={styles.scrollView}>
      <TouchableOpacity onPress={() => navigation.navigate("AdminPanel")}>
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
          onPress={() => navigation.navigate("AdminPanel")}
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

const styles = StyleSheet.create(InfluencerLogoutStyles);

export default InfluencerLogOutPage;
