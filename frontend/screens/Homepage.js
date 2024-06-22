import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import Depth1Frame4 from "../components/Depth1Frame4";
import Depth1Frame3 from "../components/Depth1Frame3";
import Depth1Frame2 from "../components/Depth1Frame2";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Depth1Frame4 />
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.homepage}>
        <View style={[styles.depth0Frame0, styles.frameLayout1]}>      
          <View style={styles.frameLayout}>
            <View style={styles.frameLayout}>
              <View style={[styles.depth3Frame0, styles.frameLayout]}>
                <Image
                  style={[styles.depth4Frame0, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/depth-4-frame-01.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.container}>    
            <Text style={styles.welcomeText}>
              Welcome to Influmart
            </Text>   
            <Text style={styles.descriptionText}>
              An onboarding platform for brands and influencers. Join the best
              brands and influencers in the world.
            </Text>      
          </View>
      
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('BrandRegistrationForm')}>
              <Text style={styles.buttonText1}>Brand Registration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('InfluencerRegistrationForm')}>
              <Text style={styles.buttonText2}>Influencer Registration</Text>
            </TouchableOpacity>
          
          <View >
            <Depth1Frame3
              contactUs="Contact us"
              sanFranciscoCA="San Francisco, CA"
              contactinflumartcom="contact@influmart.com"
            />
          </View>
          <View>
            <Depth1Frame3
              contactUs="About"
              sanFranciscoCA="Learn more"
              contactinflumartcom="Get started"
            />
          </View>
          <View style={styles.depth1Frame7}>
            <View style={styles.depth2Frame04}>
              <View style={styles.depth2Frame01}>
                <Text style={[styles.services, styles.registrationTypo]}>
                  Services
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.depth2Frame0}>
          <Depth1Frame2
            brands="Brands"
            depth3Frame1={require("../assets/depth-3-frame-1.png")}
          />
          <Depth1Frame2
            brands="Influencers"
            depth3Frame1={require("../assets/depth-3-frame-1.png")}
            propBackgroundColor="#fff"
            propFontFamily="Lexend-Regular"
            propColor="#121217"
          />
          </View>
          <View style={styles.depth1Frame7}>
              <View style={styles.depth2Frame01}>
                <Text style={[styles.services, styles.registrationTypo]}>
                  Recent Highlights
                </Text>
            </View>
          </View>
            <Depth1Frame1/>
        </View>
      </View>
    </ScrollView>
    <View style={styles.stickyBottom}>
        <Depth1Frame
          depth5Frame0={require("../assets/depth-5-frame-01.png")}
          depth5Frame01={require("../assets/depth-5-frame-02.png")}
          search="Search"
          depth5Frame02={require("../assets/depth-5-frame-03.png")}
          myBrands="My Brands"
          depth5Frame03={require("../assets/depth-5-frame-04.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  frameLayout1: {
    width: responsiveWidth(100),
    backgroundColor: Color.colorWhite,
    paddingBottom: responsiveHeight(15) 
  },
  frameLayout: {
    height: responsiveScreenWidth(60),
    width:  responsiveWidth(100),
  },
  welcomeText: {
    fontSize: responsiveFontSize(3),
    fontFamily: FontFamily.lexendBold,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: responsiveHeight(3),
    flexDirection: "row",
    paddingHorizontal: responsiveHeight(3),
    width: responsiveWidth(90),
  },
  descriptionText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: FontFamily.lexendRegular,
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: responsiveFontSize(3),
    color: Color.colorGray_500,
    margin: responsiveHeight(1),
    padding: responsiveHeight(1),
    flexDirection: "row",
    paddingHorizontal: responsiveHeight(2),
  },
  frameBg1: {
    backgroundColor: Color.colorMediumslateblue,
    overflow: "hidden",
  },
  services: {
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    fontSize: responsiveFontSize(2), 
  },
  registrationTypo: {
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
  },
  frameBg: {
    backgroundColor: Color.colorGhostwhite,
    overflow: "hidden",
  },
  depth2Frame0: {
    margin: responsiveHeight(2),
  },
  depth4Frame0: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    overflow: "hidden",
  },
  depth3Frame0: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  depth2Frame01: {
    alignSelf: "stretch",
    height: 'auto',
  },
  brandRegistration: {
    lineHeight: responsiveScreenHeight(3),
    fontSize: responsiveFontSize(1.8),
    color: Color.colorWhite,
    letterSpacing: 0,
  },
  depth5Frame0: {
    width: 'auto',
    height: responsiveScreenHeight(3),
  },
  depth4Frame01: {
    backgroundColor: Color.colorMediumslateblue,
    overflow: "hidden",
  },
  influencerRegistration: {
    lineHeight: responsiveScreenHeight(3),
    fontSize: responsiveFontSize(1.8),
    color: Color.colorGray_500,
    letterSpacing: 0,
  },
  depth5Frame01: {
    width: 'auto',
    height: responsiveScreenHeight(3),
  },
  
  depth2Frame04: {
    height: responsiveHeight(2),
  },
  depth1Frame7: {
    height: responsiveScreenHeight(6),
    padding: responsiveHeight(2),
    flexDirection: "row",
    width: responsiveWidth(90),
  },
  depth0Frame0: {
    overflow: "hidden",
  },
  homepage: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  stickyBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    backgroundColor: Color.colorWhite,
  },
  button1: {
    backgroundColor: Color.colorMediumslateblue,
    padding: responsiveHeight(1.5), 
    borderRadius: responsiveFontSize(1.3),
    marginVertical: responsiveHeight(1), 
    marginHorizontal: responsiveHeight(2), 
    minWidth: responsiveFontSize(1), 
    alignItems: 'center',
  },
  buttonText1: {
    color: Color.colorWhitesmoke_100,
    fontSize: responsiveFontSize(2), 
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
  },
  button2: {
    backgroundColor: Color.colorGhostwhite,
    padding: responsiveHeight(1.5), 
    borderRadius: responsiveFontSize(1.3),
    marginVertical: responsiveHeight(1), 
    marginHorizontal: responsiveHeight(2), 
    minWidth: responsiveFontSize(1), 
    alignItems: 'center',
  },
  buttonText2: {
    color: Color.colorGray_500,
    fontSize: responsiveFontSize(2), 
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
  },
});

export default Homepage;
