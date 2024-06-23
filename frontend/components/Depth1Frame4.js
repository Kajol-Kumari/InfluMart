import * as React from "react";
import { Image, StyleSheet, View, Text, Dimensions } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const { width } = Dimensions.get('window');

const Depth1Frame4 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
        <View style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
          <Image
            style={styles.depth4Frame0}
            resizeMode="cover"
            source={require("../assets/depth-4-frame-0.png")}
          />
        </View>
        <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
          <View style={styles.depth4Frame01}>
            <Text style={styles.influmart}>Influmart</Text>
          </View>
        </View>
        <View style={styles.depth3FrameLayout}>
          <View style={[styles.depth4Frame02, styles.depth3FrameLayout]}>
            <Image
              style={styles.depth4Frame0}
              resizeMode="cover"
              source={require("../assets/depth-5-frame-0.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  depth3FrameLayout: {
    width: width * 0.1, // Adjust width based on a percentage of the screen width
    flexDirection: "row",
    height: 48,
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    alignItems: "center",
  },
  influmart: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 28, // Adjust line height for better readability
    fontWeight: "700",
    fontFamily: FontFamily.lexendBold,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: 'auto',
    overflow: "hidden",
    height: 28,
  },
  depth3Frame1: {
    width: 'auto',
    justifyContent: "center",
    height: 28,
    alignItems: "center",
  },
  depth4Frame02: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  depth2Frame0: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 48,
    flexDirection: "row",
  },
  depth1Frame0: {
    backgroundColor: Color.colorWhite,
    width: width * 1, 
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
  },
});

export default Depth1Frame4;