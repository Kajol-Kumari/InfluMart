import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const { width: screenWidth } = Dimensions.get("window");

const scaleFontSize = (size) => {
  const baseWidth = 375; // base width for scaling (iPhone 6/7/8)
  return size * (screenWidth / baseWidth);
};

const Depth1Frame3 = ({ contactUs, sanFranciscoCA, contactinflumartcom }) => {
  return (
    <View style={styles.depth1Frame5}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <Image
            style={styles.depth4Frame0}
            contentFit="cover"
            source={require("../assets/depth-4-frame-02.png")}
          />
        </View>
        <View style={styles.depth3Frame1}>
          <View style={styles.depth4Frame01}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.contactUs}>{contactUs}</Text>
            </View>
          </View>
          <View style={styles.depth4Frame1}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.sanFranciscoCa}>{sanFranciscoCA}</Text>
            </View>
          </View>
          <View style={styles.depth4Frame1}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.sanFranciscoCa}>{contactinflumartcom}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth4Frame0: {
    width: scaleFontSize(24),
    height: scaleFontSize(24),
  },
  depth3Frame0: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGhostwhite,
    width: scaleFontSize(48),
    height: scaleFontSize(48),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  contactUs: {
    fontSize: scaleFontSize(FontSize.size_base),
    lineHeight: scaleFontSize(24),
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: scaleFontSize(294),
    height: scaleFontSize(24),
  },
  sanFranciscoCa: {
    fontSize: scaleFontSize(FontSize.size_sm),
    lineHeight: scaleFontSize(21),
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorSlategray_300,
    textAlign: "left",
  },
  depth4Frame1: {
    height: scaleFontSize(21),
    width: scaleFontSize(294),
  },
  depth3Frame1: {
    marginLeft: scaleFontSize(16),
    width: scaleFontSize(294),
    justifyContent: "center",
    height: scaleFontSize(66),
  },
  depth2Frame0: {
    position: "absolute",
    top: scaleFontSize(12),
    left: scaleFontSize(16),
    width: scaleFontSize(358),
    flexDirection: "row",
    height: scaleFontSize(66),
  },
  depth1Frame5: {
    backgroundColor: Color.colorWhite,
    width: screenWidth,
    height: scaleFontSize(90),
  },
});

export default Depth1Frame3;
