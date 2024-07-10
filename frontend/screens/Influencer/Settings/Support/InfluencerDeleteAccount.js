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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DeleteInfluencerProfile } from "../../../../controller/InfluencerController";
import { useAlert } from "../../../../util/AlertContext";
import Loader from '../../../../shared/Loader'

const InfluencerDeleteAccountPage = ({ navigation }) => {
  const {showAlert} = useAlert()
  const[loading,setLoading]=useState(false)
  const handleDeleteAccount = async () => {
    const influencerId = await AsyncStorage.getItem("influencerId")
    setLoading(true)
    await DeleteInfluencerProfile(influencerId,navigation,showAlert)
    setLoading(false)
  }
  return (
    <ScrollView style={styles.scrollView}>
      {loading&&<Loader loading={loading}/>}
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
        <TouchableOpacity style={styles.loginButton} onPress={()=>handleDeleteAccount()}>
          <Text style={styles.loginButtonText}>I'm sure, delete my account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CancelButtonContainer}>
        <TouchableOpacity style={styles.CancelButton} onPress={() => navigation.navigate("AdminPanel")}>
          <Text style={styles.CancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create(InfluencerDeleteAccountStyles);

export default InfluencerDeleteAccountPage;