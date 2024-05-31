import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const Depth1Frame15 = () => {
  return (
    <View style={styles.depth1Frame5}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.pricing, styles.pricingTypo]}>Pricing</Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.depth3FramePosition]}>
          <View style={[styles.depth4Frame01, styles.frameLayout1]}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.content, styles.pricingTypo]}>Content</Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame2, styles.frameLayout]}>
          <View style={[styles.depth4Frame02, styles.frameLayout]}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.content, styles.pricingTypo]}>Services</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pricingTypo: {
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  depth3FramePosition: {
    marginLeft: 32,
    paddingBottom: Padding.p_smi,
    paddingTop: Padding.p_base,
    justifyContent: "center",
    height: 53,
    borderBottomWidth: 3,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  frameLayout1: {
    width: 59,
    alignItems: "center",
  },
  frameLayout: {
    width: 63,
    alignItems: "center",
  },
  pricing: {
    color: Color.colorWhite,
  },
  depth5Frame0: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame0: {
    height: 21,
    alignItems: "center",
    width: 52,
  },
  depth3Frame0: {
    paddingBottom: Padding.p_smi,
    paddingTop: Padding.p_base,
    justifyContent: "center",
    height: 53,
    borderBottomWidth: 3,
    borderColor: Color.colorGainsboro_100,
    alignItems: "center",
    width: 52,
    borderStyle: "solid",
  },
  content: {
    color: Color.colorLightgray,
  },
  depth4Frame01: {
    height: 21,
  },
  depth3Frame1: {
    width: 59,
    alignItems: "center",
  },
  depth4Frame02: {
    height: 21,
  },
  depth3Frame2: {
    marginLeft: 32,
    paddingBottom: Padding.p_smi,
    paddingTop: Padding.p_base,
    justifyContent: "center",
    height: 53,
    borderBottomWidth: 3,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  depth2Frame0: {
    borderColor: Color.colorDarkslategray_100,
    borderBottomWidth: 1,
    height: 54,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    borderStyle: "solid",
    width: 390,
  },
  depth1Frame5: {
    height: 66,
    paddingBottom: Padding.p_xs,
    width: 390,
  },
});

export default Depth1Frame15;
