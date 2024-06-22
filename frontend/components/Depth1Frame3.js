import React, { useMemo } from "react";
import { Text, StyleSheet, View, Dimensions} from "react-native";
import { Image } from "expo-image";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const { height, width } = Dimensions.get('window');

const dynamicStyles = {
  imageSize: Math.min(width * 0.06, 40),
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
    width: responsiveFontSize(3),
    height: responsiveFontSize(3),
  },
  depth3Frame0: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGhostwhite,
    width: responsiveFontSize(4),
    height: responsiveFontSize(4),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  contactUs: {
    fontSize: responsiveFontSize(2),
    lineHeight: responsiveFontSize(3),
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: responsiveScreenWidth(80),
    // height: responsiveWidth(6),
  },
  sanFranciscoCa: {
    fontSize: responsiveFontSize(1.75),
    lineHeight: responsiveFontSize(2.5),
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorSlategray_300,
    textAlign: "left",
  },
  depth4Frame1: {
    // height: responsiveWidth(5),
    width: responsiveScreenWidth(80),
  },
  depth3Frame1: {
    marginLeft: responsiveWidth(4),
    width: responsiveScreenWidth(80),
    justifyContent: "center",
    // height: responsiveWidth(16),
  },
  depth2Frame0: {
    position: "absolute",
    top: responsiveWidth(3),
    left: responsiveWidth(4),
    width: responsiveScreenWidth(95),
    flexDirection: "row",
    // height: responsiveWidth(16),
  },
  depth1Frame5: {
    backgroundColor: Color.colorWhite,
    width: responsiveScreenWidth(100),
    height: responsiveFontSize(12),
  },
});

export default Depth1Frame3;
