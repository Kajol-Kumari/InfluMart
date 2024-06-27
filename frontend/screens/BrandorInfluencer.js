import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { BrandorInfluencerStyles } from "./BrandorInfluencer.scss";

const BrandorInfluencer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate("Homepage")}>
        <View style={styles.headerContent}>
          <Image style={styles.backArrow} source={require("../assets/depth-4-frame-Backarrow3x 2.png")} />
          <Text style={styles.headerText}>Join the Community</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Are you a brand or an influencer?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginPageBrands")}>
          <Text style={styles.buttonText}>Brand</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.influencerButton]} onPress={() => navigation.navigate("LoginPage")}>
          <Text style={[styles.buttonText, styles.influencerButtonText]}>Influencer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>By joining, you agree to our </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Terms of Use</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}> and </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(BrandorInfluencerStyles);

export default BrandorInfluencer;
