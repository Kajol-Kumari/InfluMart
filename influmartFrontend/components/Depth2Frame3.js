import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Depth2Frame3 = () => {
  return (
    <View style={styles.depth2Frame0}>
      <View style={styles.depth3Frame0}>
        <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
          <View style={styles.depth5Frame0}>
            <View style={styles.depth6Frame0}>
              <Text style={[styles.withAds, styles.withFlexBox]}>With Ads</Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth4Frame1, styles.depth4FrameFlexBox]}>
          <View style={styles.depth5Frame01}>
            <View style={styles.depth6Frame0}>
              <Text style={[styles.text, styles.withFlexBox]}>$9.99</Text>
            </View>
          </View>
          <View style={styles.depth5Frame1}>
            <View style={styles.depth6Frame0}>
              <Text style={[styles.withAds, styles.withFlexBox]}>/mo</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.depth3Frame1}>
        <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
          <View style={styles.depth5Frame02}>
            <Image
              style={styles.depth6Frame03}
              contentFit="cover"
              source={require("../assets/depth-6-frame-01.png")}
            />
          </View>
          <View style={styles.depth5Frame11}>
            <View style={styles.depth6Frame0}>
              <Text style={[styles.watchEverythingWith, styles.withFlexBox]}>
                Watch everything with limited ads for a lower price
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth4FrameFlexBox: {
    flexDirection: "row",
    width: 308,
  },
  withFlexBox: {
    textAlign: "left",
    color: Color.colorGray_300,
  },
  withAds: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
    lineHeight: 20,
    color: Color.colorGray_300,
  },
  depth6Frame0: {
    alignSelf: "stretch",
  },
  depth5Frame0: {
    width: 71,
    height: 20,
  },
  depth4Frame0: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 20,
  },
  text: {
    fontSize: FontSize.size_17xl,
    letterSpacing: -1,
    lineHeight: 45,
    fontWeight: "900",
    fontFamily: FontFamily.workSansBlack,
  },
  depth5Frame01: {
    width: 95,
    height: 45,
  },
  depth5Frame1: {
    width: 32,
    marginLeft: 4,
    height: 20,
  },
  depth4Frame1: {
    marginTop: 4,
    height: 45,
  },
  depth3Frame0: {
    height: 69,
    width: 308,
  },
  depth6Frame03: {
    overflow: "hidden",
    width: 20,
    height: 20,
  },
  depth5Frame02: {
    width: 20,
    height: 39,
  },
  watchEverythingWith: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.workSansRegular,
    lineHeight: 20,
    color: Color.colorGray_300,
  },
  depth5Frame11: {
    width: 276,
    marginLeft: 12,
    height: 39,
  },
  depth4Frame01: {
    height: 39,
  },
  depth3Frame1: {
    marginTop: 16,
    height: 39,
    width: 308,
  },
  depth2Frame0: {
    position: "absolute",
    top: 12,
    left: 16,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    width: 358,
    height: 174,
    padding: Padding.p_5xl,
  },
});

export default Depth2Frame3;
