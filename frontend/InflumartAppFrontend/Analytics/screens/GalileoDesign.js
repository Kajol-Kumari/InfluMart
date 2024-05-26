import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Depth1Frame3 from "../components/Depth1Frame3";
import Depth1Frame2 from "../components/Depth1Frame2";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import Depth2Frame from "../components/Depth2Frame";
import { FontSize, Padding, Color, Border, FontFamily } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
        <Depth1Frame3 />
        <Depth1Frame2 />
        <View style={styles.depth1Frame2}>
          <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox1]}>
            <View style={styles.depth3Frame0}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelTypo]}>Travel</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameFlexBox1]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelTypo]}>Fashion</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame2, styles.depth2FrameFlexBox1]}>
            <View style={styles.depth3Frame02}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelTypo]}>Bikini</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame3, styles.depth2FrameFlexBox1]}>
            <View style={styles.depth3Frame03}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelTypo]}>Food</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame4, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame04}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelTypo]}>
                  Lifestyle
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame5, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame05}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelTypo]}>Fitness</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame3}>
          <View style={[styles.depth2Frame01, styles.depth2FrameSpaceBlock]}>
            <View style={styles.depth3Frame06}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.mFollowers, styles.cartierTypo]}>
                  6.4M Followers
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame11, styles.depth2FrameSpaceBlock]}>
            <View style={styles.depth3Frame07}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.mFollowers, styles.cartierTypo]}>
                  Engagement Rate: 10.6%
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame21, styles.depth2FrameLayout]}>
            <View style={styles.depth3Frame08}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.mFollowers, styles.cartierTypo]}>
                  Likes Rate: 16.8%
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Depth1Frame1 />
        <Depth1Frame
          engagementRateOverTime="Engagement Rate Over Time"
          prop="10.6%"
          prop1="+2%"
          vector0={require("../assets/vector--0.png")}
          vector1={require("../assets/vector--1.png")}
        />
        <Depth1Frame
          engagementRateOverTime="Views Over Time"
          prop="7.8M"
          prop1="+1.2M"
          vector0={require("../assets/vector--01.png")}
          vector1={require("../assets/vector--11.png")}
          propWidth={46}
        />
        <Depth1Frame
          engagementRateOverTime="Likes Over Time"
          prop="1.2M"
          prop1="+0.2M"
          vector0={require("../assets/vector--0.png")}
          vector1={require("../assets/vector--1.png")}
          propWidth={50}
        />
        <View style={styles.depth1Frame8}>
          <Depth2Frame
            depth4Frame0={require("../assets/depth-4-frame-01.png")}
            carolineFemaleAge27Wearin="Caroline, female, age 27, wearing Dior dress"
            dior="Dior"
          />
          <Depth2Frame
            depth4Frame0={require("../assets/depth-4-frame-02.png")}
            carolineFemaleAge27Wearin="Caroline, female, age 27, wearing Gucci"
            dior="Gucci"
            propLeft={201}
            propTop={16}
            propHeight={290}
            propHeight1={81}
            propHeight2={48}
          />
          <Depth2Frame
            depth4Frame0={require("../assets/depth-4-frame-03.png")}
            carolineFemaleAge27Wearin="Sephora"
            dior="Sephora"
            propLeft={16}
            propTop={318}
            propHeight={242}
            propHeight1={57}
            propHeight2={24}
          />
          <View style={styles.depth2Frame31}>
            <View style={styles.frameLayout}>
              <Image
                style={[styles.depth4Frame09, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/depth-4-frame-04.png")}
              />
            </View>
            <View style={styles.depth3Frame1}>
              <View style={styles.depth4Frame010}>
                <Text style={[styles.cartier, styles.cartierTypo]}>
                  Cartier
                </Text>
              </View>
              <View style={styles.depth4Frame1}>
                <Text style={[styles.cartier1, styles.travelTypo]}>
                  Cartier
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame9}>
          <View style={[styles.depth2Frame02, styles.frameBg]}>
            <View style={[styles.depth3Frame010, styles.frameBg]}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.connectWithCaroline, styles.cartierTypo]}>
                  Connect with Caroline
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame10} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth2FrameFlexBox1: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  travelTypo: {
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  depth2FrameFlexBox: {
    top: 56,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 32,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  depth2FrameSpaceBlock: {
    padding: Padding.p_5xl,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  cartierTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  depth2FrameLayout: {
    width: 358,
    borderRadius: Border.br_xs,
  },
  frameLayout: {
    height: 173,
    width: 173,
  },
  frameBg: {
    backgroundColor: Color.colorRoyalblue,
    overflow: "hidden",
  },
  travel: {
    color: Color.colorGray,
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
  },
  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: 42,
    height: 21,
  },
  depth2Frame0: {
    width: 74,
    paddingHorizontal: Padding.p_base,
    height: 32,
    backgroundColor: Color.colorWhitesmoke,
    top: 12,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xs,
    position: "absolute",
    left: 12,
  },
  depth3Frame01: {
    width: 54,
    height: 21,
  },
  depth2Frame1: {
    left: 98,
    width: 86,
    paddingHorizontal: Padding.p_base,
    height: 32,
    backgroundColor: Color.colorWhitesmoke,
    top: 12,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  depth3Frame02: {
    width: 37,
    height: 21,
  },
  depth2Frame2: {
    left: 196,
    width: 69,
    paddingHorizontal: Padding.p_base,
    height: 32,
    backgroundColor: Color.colorWhitesmoke,
    top: 12,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  depth3Frame03: {
    width: 35,
    height: 21,
  },
  depth2Frame3: {
    left: 278,
    width: 67,
    paddingHorizontal: Padding.p_base,
    height: 32,
    backgroundColor: Color.colorWhitesmoke,
    top: 12,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  depth3Frame04: {
    width: 60,
    height: 21,
  },
  depth2Frame4: {
    width: 92,
    left: 12,
  },
  depth3Frame05: {
    width: 50,
    height: 21,
  },
  depth2Frame5: {
    left: 116,
    width: 82,
  },
  depth1Frame2: {
    height: 100,
    width: 390,
  },
  mFollowers: {
    color: Color.colorGray,
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
  },
  depth3Frame06: {
    height: 24,
    width: 123,
  },
  depth2Frame01: {
    height: 104,
    width: 171,
    top: 16,
    padding: Padding.p_5xl,
    borderRadius: Border.br_xs,
    left: 16,
  },
  depth3Frame07: {
    height: 48,
    width: 123,
  },
  depth2Frame11: {
    left: 203,
    height: 104,
    width: 171,
    top: 16,
    padding: Padding.p_5xl,
    borderRadius: Border.br_xs,
  },
  depth3Frame08: {
    width: 310,
    height: 24,
  },
  depth2Frame21: {
    top: 136,
    height: 80,
    padding: Padding.p_5xl,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
    left: 16,
  },
  depth1Frame3: {
    height: 232,
    width: 390,
  },
  depth4Frame09: {
    borderRadius: Border.br_xs,
    height: 173,
    overflow: "hidden",
  },
  cartier: {
    color: Color.colorGray,
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  depth4Frame010: {
    width: 173,
    height: 24,
  },
  cartier1: {
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorSlategray,
    alignSelf: "stretch",
  },
  depth4Frame1: {
    width: 173,
    height: 21,
  },
  depth3Frame1: {
    height: 57,
    paddingBottom: Padding.p_xs,
    marginTop: 12,
    width: 173,
  },
  depth2Frame31: {
    top: 318,
    left: 201,
    height: 242,
    width: 173,
    position: "absolute",
  },
  depth1Frame8: {
    height: 576,
    width: 390,
  },
  connectWithCaroline: {
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorWhite,
  },
  depth3Frame010: {
    width: 186,
    height: 24,
  },
  depth2Frame02: {
    paddingHorizontal: 20,
    width: 358,
    borderRadius: Border.br_xs,
    height: 48,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  depth1Frame9: {
    height: 72,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 390,
  },
  depth1Frame10: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  depth0Frame0: {
    height: 2794,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  galileoDesign: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GalileoDesign;
