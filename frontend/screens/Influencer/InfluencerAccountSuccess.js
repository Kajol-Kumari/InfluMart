import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { InfluencerAccountSuccessStyles } from "./InfluencerAccountSucess.scss";

const InfluencerAccountSuccess = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.fullWidth} onPress={() => navigation.navigate('Homepage')}>
          <View style={styles.messageContainer}>
            <Text style={styles.accountCreated}>Account Created</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.messageWrapper}>
          <Text style={styles.messageText}>Your account has been created successfully</Text>
        </View>

        <View style={styles.messageWrapper}>
          <Text style={styles.instructionsText}>Click the button below to login with your new account.</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.fullWidth} onPress={() => navigation.navigate('LoginPage')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Click here to login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(InfluencerAccountSuccessStyles);

export default InfluencerAccountSuccess;
