import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import Depth2Frame1 from "../components/Depth2Frame1";
import Depth2Frame from "../components/Depth2Frame";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
        <Depth1Frame1 />
        <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.huluNoAds, styles.huluNoAdsFlexBox]}>
              Hulu (No Ads)
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.enjoyOurEntire, styles.huluNoAdsFlexBox]}>
              Enjoy our entire library, plus exclusive streaming access to the
              biggest winner movies.
            </Text>
          </View>
        </View>
        <Depth1Frame />
        <View style={styles.depth1Frame4}>
          <Depth2Frame1 />
          <Depth2Frame />
        </View>
        <View style={styles.depth1Frame5} />
        <View style={[styles.depth1Frame6, styles.frameFlexBox]}>
          <View style={[styles.depth2Frame02, styles.frameBg]}>
            <View style={[styles.depth3Frame0, styles.frameBg]}>
              <View style={styles.depth2Frame0}>
                <Text style={[styles.selectPlan, styles.huluNoAdsFlexBox]}>
                  Select Plan
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame7} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  huluNoAdsFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  frameFlexBox: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  frameBg: {
    backgroundColor: Color.colorWhitesmoke,
    overflow: "hidden",
  },
  huluNoAds: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    color: Color.colorGray,
  },
  depth2Frame0: {
    alignSelf: "stretch",
  },
  depth1Frame1: {
    height: 60,
    paddingTop: 20,
  },
  enjoyOurEntire: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.workSansRegular,
  },
  depth1Frame2: {
    height: 88,
    paddingTop: Padding.p_9xs,
  },
  depth1Frame4: {
    height: 386,
    width: 390,
  },
  depth1Frame5: {
    height: 91,
    width: 390,
  },
  selectPlan: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    color: Color.colorGray,
  },
  depth3Frame0: {
    width: 81,
    height: 21,
  },
  depth2Frame02: {
    borderRadius: Border.br_xs,
    width: 358,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  depth1Frame6: {
    height: 64,
    paddingVertical: Padding.p_xs,
    width: 390,
  },
  depth1Frame7: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  depth0Frame0: {
    height: 844,
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
