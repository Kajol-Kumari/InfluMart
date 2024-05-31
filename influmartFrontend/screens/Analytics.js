import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Depth1Frame7 from "../components/Depth1Frame7";
import Depth1Frame9 from "../components/Depth1Frame9";
import Depth1Frame8 from "../components/Depth1Frame8";
import Depth2Frame from "../components/Depth2Frame";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const Analytics = () => {
  return (
    <View style={styles.analytics}>
      <View style={styles.depth0Frame0}>
        <Depth1Frame7
          depth4Frame0={require("../assets/depth-4-frame-010.png")}
          requestDetails="Caroline, Influencer"
          depth3Frame0BackgroundColor="#fff"
          requestDetailsWidth={173}
          depth4Frame0FontFamily="BeVietnamPro-Bold"
          depth4Frame0Color="#121217"
        />
        <Depth1Frame9 />
        <View style={styles.depth1Frame2}>
          <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox1]}>
            <View style={styles.depth3Frame0}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelClr]}>Travel</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameFlexBox1]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelClr]}>Fashion</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame2, styles.depth2FrameFlexBox1]}>
            <View style={styles.depth3Frame02}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelClr]}>Bikini</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame3, styles.depth2FrameFlexBox1]}>
            <View style={styles.depth3Frame03}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelClr]}>Food</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame4, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame04}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelClr]}>Lifestyle</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame5, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame05}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.travel, styles.travelClr]}>Fitness</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame3}>
          <View style={[styles.depth2Frame01, styles.depth2FrameSpaceBlock]}>
            <View style={styles.depth3Frame06}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.cartierTypo}>6.4M Followers</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame11, styles.depth2FrameSpaceBlock]}>
            <View style={styles.depth3Frame07}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.cartierTypo}>Engagement Rate: 10.6%</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame21, styles.depth2FrameLayout]}>
            <View style={styles.depth3Frame08}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.cartierTypo}>Likes Rate: 16.8%</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame4}>
          <View style={styles.depth2Frame02}>
            <View style={[styles.depth3Frame09, styles.depth3FramePosition]}>
              <View style={styles.depth4Frame09}>
                <View style={styles.depth5Frame0}>
                  <Text
                    style={[styles.pastCollaborations, styles.contactInfoTypo]}
                  >
                    Past Collaborations
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame1, styles.depth3FramePosition]}>
              <View style={styles.depth4Frame010}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.contactInfo, styles.cartier1Clr]}>
                    Contact Info
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Depth1Frame8
          engagementRateOverTime="Engagement Rate Over Time"
          prop="10.6%"
          prop1="+2%"
          vector0={require("../assets/vector--0.png")}
          vector1={require("../assets/vector--1.png")}
        />
        <Depth1Frame8
          engagementRateOverTime="Views Over Time"
          prop="7.8M"
          prop1="+1.2M"
          vector0={require("../assets/vector--01.png")}
          vector1={require("../assets/vector--11.png")}
          propWidth={46}
        />
        <Depth1Frame8
          engagementRateOverTime="Likes Over Time"
          prop="1.2M"
          prop1="+0.2M"
          vector0={require("../assets/vector--0.png")}
          vector1={require("../assets/vector--1.png")}
          propWidth={50}
        />
        <View style={styles.depth1Frame8}>
          <Depth2Frame
            depth4Frame0={require("../assets/depth-4-frame-011.png")}
            carolineFemaleAge27Wearin="Caroline, female, age 27, wearing Dior dress"
            dior="Dior"
          />
          <Depth2Frame
            depth4Frame0={require("../assets/depth-4-frame-012.png")}
            carolineFemaleAge27Wearin="Caroline, female, age 27, wearing Gucci"
            dior="Gucci"
            propLeft={201}
            propTop={16}
            propHeight={290}
            propHeight1={81}
            propHeight2={48}
          />
          <Depth2Frame
            depth4Frame0={require("../assets/depth-4-frame-013.png")}
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
                style={[styles.depth4Frame011, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/depth-4-frame-014.png")}
              />
            </View>
            <View style={styles.depth3Frame11}>
              <View style={styles.depth4Frame012}>
                <Text style={[styles.cartier, styles.cartierTypo]}>
                  Cartier
                </Text>
              </View>
              <View style={styles.depth4Frame1}>
                <Text style={[styles.cartier1, styles.cartier1Clr]}>
                  Cartier
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame9}>
          <View style={[styles.depth2Frame03, styles.frameBg]}>
            <View style={[styles.depth3Frame011, styles.frameBg]}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.connectWithCaroline}>
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
  travelClr: {
    color: Color.colorGray_500,
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
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  depth2FrameSpaceBlock: {
    padding: Padding.p_5xl,
    backgroundColor: Color.colorWhitesmoke_300,
    position: "absolute",
  },
  depth2FrameLayout: {
    width: 358,
    borderRadius: Border.br_xs,
  },
  depth3FramePosition: {
    paddingBottom: Padding.p_smi,
    paddingTop: Padding.p_base,
    height: 53,
    borderBottomWidth: 3,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },
  contactInfoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  cartier1Clr: {
    color: Color.colorSlategray_200,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  frameLayout: {
    height: 173,
    width: 173,
  },
  cartierTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
  },
  frameBg: {
    backgroundColor: Color.colorRoyalblue,
    overflow: "hidden",
  },
  travel: {
    textAlign: "left",
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
    color: Color.colorGray_500,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
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
    backgroundColor: Color.colorWhitesmoke_300,
    top: 12,
    paddingVertical: 0,
    justifyContent: "center",
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
    backgroundColor: Color.colorWhitesmoke_300,
    top: 12,
    paddingVertical: 0,
    justifyContent: "center",
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
    backgroundColor: Color.colorWhitesmoke_300,
    top: 12,
    paddingVertical: 0,
    justifyContent: "center",
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
    backgroundColor: Color.colorWhitesmoke_300,
    top: 12,
    paddingVertical: 0,
    justifyContent: "center",
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
    backgroundColor: Color.colorWhitesmoke_300,
    position: "absolute",
    left: 16,
  },
  depth1Frame3: {
    height: 232,
    width: 390,
  },
  pastCollaborations: {
    color: Color.colorGray_500,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  depth5Frame0: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame09: {
    width: 145,
    height: 21,
    alignItems: "center",
  },
  depth3Frame09: {
    width: 145,
  },
  contactInfo: {
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth4Frame010: {
    width: 92,
    height: 21,
    alignItems: "center",
  },
  depth3Frame1: {
    marginLeft: 32,
    width: 92,
  },
  depth2Frame02: {
    borderColor: Color.colorGainsboro_300,
    borderBottomWidth: 1,
    height: 54,
    borderStyle: "solid",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    overflow: "hidden",
    width: 390,
  },
  depth1Frame4: {
    height: 66,
    paddingBottom: Padding.p_xs,
    width: 390,
  },
  depth4Frame011: {
    borderRadius: Border.br_xs,
    height: 173,
    overflow: "hidden",
  },
  cartier: {
    alignSelf: "stretch",
  },
  depth4Frame012: {
    width: 173,
    height: 24,
  },
  cartier1: {
    fontFamily: FontFamily.beVietnamProRegular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth4Frame1: {
    width: 173,
    height: 21,
  },
  depth3Frame11: {
    height: 57,
    marginTop: 12,
    width: 173,
    paddingBottom: Padding.p_xs,
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
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  depth3Frame011: {
    width: 186,
    height: 24,
  },
  depth2Frame03: {
    paddingHorizontal: Padding.p_xl,
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
  analytics: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Analytics;
