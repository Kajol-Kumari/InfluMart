import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Depth1Frame3 from "../components/Depth1Frame3";
import Depth1Frame2 from "../components/Depth1Frame2";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import ProfileCard from "../components/ProfileCard";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={[styles.depth0Frame0, styles.frameLayout1]}>
        <Depth1Frame3 />
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
            </View>
            <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
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
            </View>
          </View>
        </View>
        <Depth1Frame2
          contactUs="Contact us"
          sanFranciscoCA="San Francisco, CA"
          contactinflumartcom="contact@influmart.com"
        />
        <Depth1Frame2
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
        <Depth1Frame1 brands="Brands" />
        <Depth1Frame1 brands="Influencers" />
        <View style={styles.depth1Frame7}>
          <View style={styles.depth2Frame05}>
            <View style={styles.depth2Frame01}>
              <Text style={[styles.services, styles.registrationTypo]}>
                Recent Highlights
              </Text>
            </View>
          </View>
        </View>
        <Depth1Frame />
        <ProfileCard />
        <View style={[styles.depth1Frame14, styles.frameLayout1]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  frameLayout: {
    height: 218,
    width: 390,
  },
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  welcomeToInflumartFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
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
    width: 358,
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
    width: 358,
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
  welcomeToInflumart: {
    fontSize: 28,
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
    height: 67,
    paddingTop: Padding.p_xl,
  },
  anOnboardingPlatform: {
    fontFamily: FontFamily.lexendRegular,
    textAlign: "left",
    color: Color.colorGray,
  },
  depth1Frame3: {
    height: 88,
    paddingTop: Padding.p_9xs,
  },
  brandRegistration: {
    color: Color.colorWhite,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth5Frame0: {
    width: 159,
    height: 24,
  },
  depth4Frame01: {
    backgroundColor: Color.colorMediumslateblue,
    overflow: "hidden",
  },
  influencerRegistration: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorGray,
    letterSpacing: 0,
  },
  depth5Frame01: {
    width: 196,
    height: 24,
  },
  depth4Frame02: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_xs,
    height: 48,
    alignItems: "center",
    width: 358,
    justifyContent: "center",
    flexDirection: "row",
  },
  depth3Frame1: {
    marginTop: 12,
  },
  depth2Frame03: {
    height: 108,
    alignItems: "center",
    width: 358,
  },
  depth1Frame4: {
    height: 132,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  services: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.colorGray,
    letterSpacing: 0,
  },
  depth2Frame04: {
    width: 75,
    height: 23,
  },
  depth1Frame7: {
    height: 47,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth2Frame05: {
    width: 157,
    height: 23,
  },
  depth1Frame14: {
    height: 20,
  },
  depth0Frame0: {
    height: 1318,
    overflow: "hidden",
  },
  galileoDesign: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GalileoDesign;
