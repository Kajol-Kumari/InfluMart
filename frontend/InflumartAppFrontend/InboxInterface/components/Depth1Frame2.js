import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Depth1Frame2 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
        <View style={[styles.depth3Frame0, styles.frameFlexBox]}>
          <View style={styles.depth4Frame0}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.inbox}>Inbox</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameLayout}>
          <View style={[styles.depth4Frame01, styles.frameLayout]}>
            <Image
              style={styles.depth5Frame01}
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
  frameLayout: {
    width: 48,
    flexDirection: "row",
    height: 48,
  },
  inbox: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorGray,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 49,
    overflow: "hidden",
    height: 23,
  },
  depth3Frame0: {
    width: 310,
    height: 23,
    alignItems: "center",
  },
  depth5Frame01: {
    width: 24,
    height: 24,
  },
  depth4Frame01: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  depth2Frame0: {
    width: 358,
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

export default Depth1Frame2;
