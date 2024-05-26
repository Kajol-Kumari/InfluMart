import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Depth1Frame1 from "../components/Depth1Frame1";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const GalileoDesign1 = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
        <View style={[styles.depth1Frame0, styles.depth1FrameBg]}>
          <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
            <View style={[styles.depth3Frame0, styles.frameLayout]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/depth-4-frame-0.png")}
              />
            </View>
            <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
              <View style={[styles.depth4Frame01, styles.frameLayout]}>
                <View style={[styles.depth5Frame0, styles.frameLayout]} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame1}>
          <View style={styles.depth2Frame01}>
            <Text style={[styles.enterTheCode, styles.nextTypo]}>
              Enter the code sent to your email
            </Text>
          </View>
        </View>
        <Depth1Frame1 />
        <View style={styles.depth1Frame3} />
        <View style={styles.depth1Frame4}>
          <View style={[styles.depth2Frame02, styles.frameBg]}>
            <View style={[styles.depth3Frame01, styles.frameBg]}>
              <View style={styles.depth2Frame01}>
                <Text style={[styles.next, styles.nextTypo]}>Next</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame5, styles.depth1FrameBg]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth1FrameBg: {
    backgroundColor: Color.colorWhitesmoke,
    width: 390,
  },
  frameFlexBox: {
    justifyContent: "space-between",
    height: 48,
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    width: 48,
    height: 48,
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  frameBg: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    alignItems: "center",
    flexDirection: "row",
  },
  depth5Frame0: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  depth4Frame01: {
    flexDirection: "row",
  },
  depth3Frame1: {
    width: 310,
    paddingLeft: Padding.p_243xl,
  },
  depth2Frame0: {
    width: 358,
  },
  depth1Frame0: {
    height: 72,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  enterTheCode: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    color: Color.colorGray,
  },
  depth2Frame01: {
    alignSelf: "stretch",
  },
  depth1Frame1: {
    height: 60,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth1Frame3: {
    height: 549,
    width: 390,
  },
  next: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorWhitesmoke,
  },
  depth3Frame01: {
    width: 33,
    height: 21,
  },
  depth2Frame02: {
    borderRadius: Border.br_xs,
    width: 84,
    height: 40,
    justifyContent: "center",
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  depth1Frame4: {
    height: 64,
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth1Frame5: {
    height: 20,
    width: 390,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  galileoDesign: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default GalileoDesign1;
