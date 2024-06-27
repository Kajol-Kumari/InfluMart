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

const InfluencerLogOutPage = ({ navigation }) => {
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
        <TouchableOpacity style={styles.CancelButton}>
          <Text style={styles.CancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(InfluencerLogoutStyles);

export default InfluencerLogOutPage;
