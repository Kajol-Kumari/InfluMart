import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Depth1Frame7 from "../components/Depth1Frame7";
import Depth2Frame3 from "../components/Depth2Frame3";
import Depth2Frame2 from "../components/Depth2Frame2";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PlanChooseInterface = () => {
  return (
    <View style={styles.planchooseinterface}>
      <View style={styles.depth0Frame0}>
        <Depth1Frame7
          depth4Frame0={require("../assets/depth-4-frame-019.png")}
          requestDetails="Choose Your Plan"
          depth3Frame0BackgroundColor="#fff"
          requestDetailsWidth={150}
          depth4Frame0FontFamily="WorkSans-Bold"
          depth4Frame0Color="#121417"
        />
        <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock1]}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.huluNoAds, styles.huluNoAdsFlexBox]}>
              Hulu (No Ads)
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock1]}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.enjoyOurEntire, styles.huluNoAdsFlexBox]}>
              Enjoy our entire library, plus exclusive streaming access to the
              biggest winner movies.
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
          <View style={[styles.depth2Frame02, styles.depth2FrameLayout]}>
            <View style={[styles.depth3Frame0, styles.depth3FrameFlexBox]}>
              <View style={[styles.depth4Frame0, styles.depth4FrameLayout]}>
                <View style={styles.depth2Frame0}>
                  <Text style={[styles.monthly, styles.yearlyTypo]}>
                    Monthly
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame1, styles.depth3FrameFlexBox]}>
              <View style={[styles.depth4Frame01, styles.depth4FrameLayout]}>
                <View style={styles.depth2Frame0}>
                  <Text style={[styles.yearly, styles.yearlyTypo]}>Yearly</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame4}>
          <Depth2Frame3 />
          <Depth2Frame2 />
        </View>
        <View style={styles.depth1Frame5} />
        <View style={[styles.depth1Frame6, styles.depth1FrameSpaceBlock]}>
          <View style={[styles.depth2Frame03, styles.depth3FrameFlexBox]}>
            <View style={[styles.depth3Frame01, styles.depth4FrameLayout]}>
              <View style={styles.depth2Frame0}>
                <Text style={styles.selectPlan}>Select Plan</Text>
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
  depth1FrameSpaceBlock1: {
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  huluNoAdsFlexBox: {
    textAlign: "left",
    color: Color.colorGray_300,
  },
  depth1FrameSpaceBlock: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    height: 64,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth2FrameLayout: {
    height: 40,
    width: 358,
    backgroundColor: Color.colorWhitesmoke_300,
  },
  depth3FrameFlexBox: {
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  depth4FrameLayout: {
    height: 21,
    overflow: "hidden",
  },
  yearlyTypo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  huluNoAds: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  depth2Frame0: {
    alignSelf: "stretch",
  },
  depth1Frame1: {
    height: 60,
    paddingTop: Padding.p_xl,
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
  monthly: {
    color: Color.colorGray_300,
    fontWeight: "500",
  },
  depth4Frame0: {
    width: 55,
  },
  depth3Frame0: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_5xs,
    height: 32,
    width: 175,
    paddingVertical: 0,
    backgroundColor: Color.colorWhite,
  },
  yearly: {
    color: "#637587",
  },
  depth4Frame01: {
    width: 41,
  },
  depth3Frame1: {
    paddingHorizontal: Padding.p_5xs,
    height: 32,
    width: 175,
    paddingVertical: 0,
  },
  depth2Frame02: {
    padding: Padding.p_9xs,
    borderRadius: Border.br_xs,
    height: 40,
    width: 358,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  depth1Frame3: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    height: 64,
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
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth3Frame01: {
    width: 81,
    backgroundColor: Color.colorWhitesmoke_300,
    height: 21,
  },
  depth2Frame03: {
    height: 40,
    width: 358,
    backgroundColor: Color.colorWhitesmoke_300,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  depth1Frame6: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    height: 64,
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
  planchooseinterface: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default PlanChooseInterface;
