import * as React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Color, FontFamily, Border, Padding } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

const { width: screenWidth } = Dimensions.get("window");

const Depth1Frame18 = () => {
  return (
    <View style={styles.depth1Frame21}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <View style={styles.depth5Frame0}>
              <View style={styles.depth6Frame0}>
                <Text style={[styles.free, styles.freeFlexBox]}>Free</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth4Frame1, styles.depth4FrameFlexBox]}>
            <View style={styles.depth5Frame01}>
              <View style={styles.depth6Frame0}>
                <Text style={[styles.text, styles.freeFlexBox]}>0</Text>
              </View>
            </View>
            <View style={styles.depth5Frame1}>
              <View style={styles.depth6Frame0}>
                <Text style={[styles.free, styles.freeFlexBox]}>/month</Text>
              </View>
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
    width: "100%",
  },
  freeFlexBox: {
    textAlign: "left",
    color: Color.colorGray_100,
  },
  free: {
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(2),
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
  },
  depth6Frame0: {
    alignSelf: "stretch",
  },
  depth5Frame0: {
    height: responsiveHeight(2.5),
  },
  depth4Frame0: {
    alignItems: "center",
    justifyContent: "space-between",
    height: responsiveHeight(2.5),
    flex: 1,
  },
  text: {
    fontSize: responsiveFontSize(2.5),
    letterSpacing: -1,
    lineHeight: responsiveHeight(8),
    fontWeight: "800",
    fontFamily: FontFamily.plusJakartaSansExtraBold,
  },
  depth5Frame01: {
    height: responsiveHeight(5.6),
  },
  depth5Frame1: {
    marginLeft: responsiveWidth(2.5),
    height: responsiveHeight(2.5),
  },
  depth4Frame1: {
    marginTop: responsiveHeight(0.5),
    height: responsiveHeight(5.6),
    flex: 1,
  },
  depth3Frame0: {
    height: responsiveHeight(8.6),
    width: "100%",
  },
  depth2Frame0: {
    position: "absolute",
    top: responsiveHeight(1.5),
    left: responsiveWidth(2.5),
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_500,
    borderWidth: 1,
    width: screenWidth - responsiveWidth(6),
    height: responsiveHeight(15),
    padding: Padding.p_5xl,
  },
  depth1Frame21: {
    width: "100%",
    height: responsiveHeight(18),
  },
});

export default Depth1Frame18;
