import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Depth1Frame4 from "../components/Depth1Frame4";
import Depth1Frame3 from "../components/Depth1Frame3";
import Depth1Frame2 from "../components/Depth1Frame2";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";

const Homepage = ({route,navigation}) => {
  const [searchValue, setSearchValue] = React.useState("")

  return (
    <View style={styles.homepage}>
      <View style={[styles.depth0Frame0, styles.frameLayout1]}>
        <Depth1Frame4 onChange={(value) => {
          setSearchValue(value)
        }} />
        <ScrollView style={{marginBottom:80}}>
          <View style={styles.frameLayout}>
            <View style={styles.frameLayout}>
              <View style={[styles.depth3Frame0, styles.frameLayout]}>
                <Image
                  style={[styles.depth4Frame0]}
                  contentFit="cover"
                  source={require("../assets/depth-4-frame-01.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame01}>
              <Text
                style={[
                  styles.welcomeToInflumart,
                  styles.welcomeToInflumartFlexBox,
                ]}
              >
                Welcome to Influmart
              </Text>
            </View>
          </View>
          <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame01}>
              <Text
                style={[styles.anOnboardingPlatform, styles.registrationLayout]}
              >
                An onboarding platform for brands and influencers. Join the best
                brands and influencers in the world.
              </Text>
            </View>
          </View>
          <View style={styles.depth1Frame4}>
            <View style={styles.depth2Frame03}>
              <View style={styles.depth3FrameLayout}>
                <TouchableOpacity style={{ width: "100%" }} onPress={() => navigation.navigate('BrandRegistrationForm')}>
                  <View style={[styles.depth4Frame01, styles.depth4FrameLayout]}>
                    <View style={[styles.depth5Frame0, styles.frameBg1]}>
                      <View style={styles.depth2Frame01}>
                        <Text
                          style={[
                            styles.brandRegistration
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
                <TouchableOpacity style={{ width: "100%" }} onPress={() => navigation.navigate('InfluencerRegistrationForm')}>
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
          <Depth1Frame3
            contactUs="Contact us"
            sanFranciscoCA="San Francisco, CA"
            contactinflumartcom="contact@influmart.com"
          />
          <Depth1Frame3
            contactUs="About"
            sanFranciscoCA="Learn more"
            contactinflumartcom="Get started"
          />
          <View style={styles.depth1Frame7}>
            <View style={styles.depth2Frame04}>
              <View style={styles.depth2Frame01}>
                <Text style={[styles.services, styles.registrationTypo]}>
                  Services
                </Text>
              </View>
            </View>
          </View>
          <Depth1Frame2
            brands="Brands"
            depth3Frame1={require("../assets/depth-3-frame-1.png")}
            to={"BrandsAssosciated"}
          />
          <Depth1Frame2
            brands="Influencers"
            depth3Frame1={require("../assets/depth-3-frame-1.png")}
            propBackgroundColor="#fff"
            propFontFamily="Lexend-Regular"
            propColor="#121217"
            to={"InfluencersList"}
          />
          <View style={styles.depth1Frame7}>
            <View style={styles.depth2Frame05}>
              <View style={styles.depth2Frame01}>
                <Text style={[styles.services, styles.registrationTypo]}>
                  Recent Highlights
                </Text>
              </View>
            </View>
          </View>
          <Depth1Frame1 />
        </ScrollView>
        <Depth1Frame
          depth5Frame0={require("../assets/depth-5-frame-01.png")}
          depth5Frame01={require("../assets/depth-5-frame-02.png")}
          search="Influencers"
          depth5Frame02={require("../assets/depth-5-frame-03.png")}
          myBrands="My Brands"
          depth5Frame03={require("../assets/depth-5-frame-04.png")}
          style={styles.bottomBar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    width: "100%",
    height: "100%"
  },
  frameLayout1: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  frameLayout: {
    height: 218,
    width: "100%",
  },
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: "100%",
  },
  welcomeToInflumartFlexBox: {
    textAlign: "left",
    color: Color.colorGray_500,
  },
  registrationLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth4FrameLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_xs,
    height: 48,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  frameBg1: {
    backgroundColor: Color.colorMediumslateblue,
    overflow: "hidden",
  },
  registrationTypo: {
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
  },
  depth3FrameLayout: {
    height: 48,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base
  },
  frameBg: {
    backgroundColor: Color.colorGhostwhite,
    overflow: "hidden",
  },
  depth4Frame0: {
    width: "100%",
    height: 320
  },
  depth3Frame0: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  welcomeToInflumart: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -1,
    lineHeight: 35,
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    textAlign: "left",
  },
  depth2Frame01: {
    alignSelf: "stretch",
  },
  depth1Frame2: {
    height: "auto",
    paddingTop: Padding.p_xl,
  },
  anOnboardingPlatform: {
    fontFamily: FontFamily.lexendRegular,
    textAlign: "left",
    color: Color.colorGray_500,
  },
  depth1Frame3: {
    height: 'auto',
    paddingTop: Padding.p_9xs,
  },
  brandRegistration: {
    color: Color.colorWhite,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
  },
  depth5Frame0: {
    width: '100%',
    height: 24,
  },
  depth4Frame01: {
    backgroundColor: Color.colorMediumslateblue,
    overflow: "hidden",
  },
  influencerRegistration: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorGray_500,
    letterSpacing: 0,
  },
  depth5Frame01: {
    width: 'auto',
    height: 24,
  },
  depth4Frame02: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_xs,
    height: 48,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  depth3Frame1: {
    marginTop: 12,
  },
  depth2Frame03: {
    height: 108,
    alignItems: "center",
    width: "100%",
  },
  depth1Frame4: {
    height: 132,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  depth2Frame04: {
    height: 23,
  },
  depth1Frame7: {
    height: 47,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: '100%',
  },
  depth2Frame05: {
    width: "auto",
    height: 23,
  },
  depth1Frame14: {
    height: 20,
  },
  depth0Frame0: {
    height: "100%",
    overflow: "hidden",
  },
  homepage: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: Color.colorWhite,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0
  }
});

export default Homepage;
