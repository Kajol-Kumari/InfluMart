import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

const Depth1Frame5 = () => {
  return (
    <View style={styles.frameLayout}>
      <View style={styles.frameLayout}>
        <View style={[styles.depth3Frame0, styles.frameLayout]}>
          <Image
            style={[styles.depth4Frame0, styles.depth4FramePosition]}
            contentFit="cover"
            source={require("../assets/depth-4-frame-06.png")}
          />
          <View style={[styles.depth4Frame2, styles.depth4FramePosition]}>
            <View style={styles.depth5Frame0}>
              <View style={[styles.depth6Frame0, styles.depth6FrameLayout]} />
              <View style={[styles.depth6Frame1, styles.depth6FrameLayout]} />
              <View style={[styles.depth6Frame1, styles.depth6FrameLayout]} />
              <View style={[styles.depth6Frame1, styles.depth6FrameLayout]} />
              <View style={[styles.depth6Frame1, styles.depth6FrameLayout]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 320,
    width: 390,
  },
  depth4FramePosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 320,
    width: 390,
  },
  depth6FrameLayout: {
    height: 6,
    width: 6,
    borderRadius: Border.br_10xs,
  },
  depth4Frame0: {
    zIndex: 0,
    overflow: "hidden",
  },
  depth6Frame0: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth6Frame1: {
    backgroundColor: Color.colorWhitesmoke_500,
    marginLeft: 8,
  },
  depth5Frame0: {
    width: 358,
    height: 14,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_9xs,
    flexDirection: "row",
  },
  depth4Frame2: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: Padding.p_base,
    zIndex: 1,
    flexDirection: "row",
  },
  depth3Frame0: {
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default Depth1Frame5;
