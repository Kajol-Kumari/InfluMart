import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Depth1Frame4 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
        <View style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
          <Image
            style={styles.depth4Frame0}
            contentFit="cover"
            source={require("../assets/depth-4-frame-0.png")}
          />
        </View>
        <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
          <View style={styles.depth4Frame01}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.influmart}>Influmart</Text>
            </View>
          </View>
        </View>
        <View style={styles.depth3FrameLayout}>
          <View style={[styles.depth4Frame02, styles.depth3FrameLayout]}>
            <Image
              style={styles.depth4Frame0}
              contentFit="cover"
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
    width: 48,
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
    lineHeight: 23,
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
    height: 23,
  },
  depth3Frame1: {
    width: 'auto',
    justifyContent: "center",
    height: 23,
    alignItems: "center",
  },
  depth4Frame02: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  depth2Frame0: {
    width: 358,
    justifyContent: "space-between",
    alignItems: "center",
    height: 48,
    flexDirection: "row",
  },
  depth1Frame0: {
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 72,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
  },
});

export default Depth1Frame4;
