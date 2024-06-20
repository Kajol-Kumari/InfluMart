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
          <View style={styles.depth1Frame4}>
            <View style={styles.depth2Frame03}>
              <View style={styles.depth3FrameLayout}>
                <TouchableOpacity onPress={() => navigation.navigate('BrandRegistrationForm')}>
                  <View style={[styles.depth4Frame01, styles.depth4FrameLayout]}>
                    <View style={[styles.depth5Frame0, styles.frameBg1]}>
                      <View style={styles.depth2Frame01}>
                        <Text
                          style={[
                            styles.brandRegistration,
                            styles.registrationTypo,
                          ]}
                        >
                          Brand Registration
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
                <TouchableOpacity onPress={() => navigation.navigate('InfluencerRegistrationForm')}>
                  <View style={[styles.depth4Frame02, styles.frameBg]}>
                    <View style={[styles.depth5Frame01, styles.frameBg]}>
                      <View style={styles.depth2Frame01}>
                        <Text
                          style={[
                            styles.influencerRegistration,
                            styles.registrationTypo,
                          ]}
                        >
                          Influencer Registration
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.movedDown}>
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
          <View >
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
    height: responsiveScreenWidth(50),
    width:  responsiveWidth(100),
  },
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: responsiveHeight(),
  },
  welcomeText: {
    fontSize: responsiveFontSize(3),
    fontFamily: FontFamily.lexendBold,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveHeight(1),
  },
  descriptionText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: FontFamily.lexendRegular,
    textAlign: 'left',
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveHeight(1),
  },
  welcomeToInflumartFlexBox: {
    textAlign: "left",
    color: Color.colorGray_500,
  },
  registrationLayout: {
    lineHeight: responsiveHeight(3), 
    fontSize: responsiveFontSize(1.8), 
  },
  depth4FrameLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_xs,
    height: responsiveHeight(5.5),
    alignItems: "center",
    width: responsiveWidth(90),
    justifyContent: "center",
    flexDirection: "row",
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
  depth3FrameLayout: {
    height: responsiveHeight(5.5),
    width: responsiveWidth(90),
    justifyContent: "center",
    flexDirection: "row",
  },
  frameBg: {
    backgroundColor: Color.colorGhostwhite,
    overflow: "hidden",
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
  depth1Frame2: {
    height: responsiveHeight(8), // Adjust the multiplier as needed
    paddingTop: Padding.p_xl,
  },
  depth1Frame3: {
    height: 'auto',
    paddingTop: Padding.p_9xs,
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
  depth4Frame02: {  // inf btn size
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_xs,
    height: responsiveScreenHeight(5.2),
    alignItems: "center",
    width: responsiveWidth(90),
    justifyContent: "center",
    flexDirection: "row",
  },
  depth3Frame1: {
    marginTop: 12,
  },
  depth2Frame03: {
    height: responsiveHeight(12),
    alignItems: "center",
    width: responsiveWidth(10),
  },
  depth1Frame4: {
    height: responsiveHeight(15),
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom:  responsiveHeight(2),
  },
  depth2Frame04: {
    height: 23,
  },
  depth1Frame7: {
    height: responsiveScreenHeight(5.2),
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
    width: responsiveWidth(90),
  },
  depth1Frame14: {
    height: 20,
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
});

export default Homepage;
