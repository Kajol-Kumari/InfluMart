import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { InfluencerDeleteAccountStyles } from "./InfluencerDeleteAccount.scss";

const InfluencerDeleteAccountPage = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <TouchableOpacity onPress={() => navigation.navigate("AdminPanel")}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <Image
              style={styles.headerImage}
              contentFit="cover"
              source={require("../../../../assets/cross_symbol.png")}
            />
            <Text style={styles.DeleteText}>Delete Account</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
        Once you delete your account, there is no going back. Please be certain.
        </Text>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>I'm sure, delete my account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CancelButtonContainer}>
        <TouchableOpacity style={styles.CancelButton}>
          <Text style={styles.CancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create(InfluencerDeleteAccountStyles);

export default InfluencerDeleteAccountPage;