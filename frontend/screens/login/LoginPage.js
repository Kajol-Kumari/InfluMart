import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {handleInfluencerLogin} from '../../controller/loginController';
import {loginStyle} from './LoginStyle';

import { Color} from "../../GlobalStyles";
import { useAlert } from "../../util/AlertContext";

const LoginPage = () => {
  const navigation = useNavigation();
  const {showAlert} = useAlert();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  return (
    <ScrollView style={{ width: '100%', height: "100%", paddingTop: 30, backgroundColor: Color.colorWhitesmoke_100 }}>
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
          <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
            <View style={[styles.depth4Frame01, styles.frameLayout1]}>
              <View style={[styles.depth5Frame0, styles.frameLayout1]} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    <View style={styles.depth1Frame1}>
      <View style={styles.depth2Frame01}>
        <Text style={styles.welcomeBack}>Welcome back!</Text>
      </View>
    </View>
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
            <TextInput placeholder="Username" style={[styles.email, styles.emailClr]} value={username} onChangeText={setUsername} />
          </View>
        </View>
      </View>
    </View>
    <View style={{ margin: 15 }}>
      <View style={styles.depth5Frame01}>
        <View style={styles.depth6Frame0}>
          <View style={styles.depth2Frame01}>
            <TextInput placeholder="Password" secureTextEntry={true} textContentType='password' style={[styles.email, styles.emailClr]} value={password} onChangeText={setPassword} />
          </View>
        </View>
      </View>
    </View>
    <View style={[styles.depth1Frame5, styles.depth1FrameSpaceBlock]}>
      <View style={styles.depth2Frame01}>
        <Text style={[styles.forgotYourPassword, styles.logInTypo]}>
          Forgot your password?
        </Text>
      </View>
    </View>
    <View style={{ margin: 15 }}>
      <View style={styles.depth2Frame06}>
        <TouchableOpacity style={{ width: "100%" }} onPress={async()=>{
          let result=await handleInfluencerLogin(username,password)
          if(result.success){
              showAlert("Success",result.message)
              navigation.navigate("UserProfile")
              setUsername("")
              setPassword("")
          }
          else
            showAlert("Error",result.message)
        }}>
          <View style={[styles.depth4Frame04, styles.depth4FrameLayout]}>
            <View style={[styles.depth5Frame03, styles.frameBg1]}>
              <View style={styles.depth2Frame01}>
                <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "100%" }} onPress={() => navigation.navigate('InfluencerRegistrationForm')}>

          <View style={[styles.depth4Frame05, styles.frameBg]}>
            <View style={[styles.depth5Frame04, styles.frameBg]}>
              <View style={styles.depth2Frame01}>
                <Text style={[styles.signUp, styles.logInTypo]}>
                  Sign Up
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  );
};


const styles=StyleSheet.create(loginStyle)

export default LoginPage;
