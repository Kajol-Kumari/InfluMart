import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

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
    width: 308,
  },
  freeFlexBox: {
    textAlign: "left",
    color: Color.colorGray_100,
  },
  free: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
  },
  depth6Frame0: {
    alignSelf: "stretch",
  },
  depth5Frame0: {
    width: 34,
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
    fontWeight: "800",
    fontFamily: FontFamily.plusJakartaSansExtraBold,
  },
  depth5Frame01: {
    width: 24,
    height: 45,
  },
  depth5Frame1: {
    width: 59,
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
  depth2Frame0: {
    position: "absolute",
    top: 12,
    left: 16,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_500,
    borderWidth: 1,
    width: 358,
    height: 119,
    padding: Padding.p_5xl,
  },
  depth1Frame21: {
    width: 390,
    height: 143,
  },
});

export default Depth1Frame18;
