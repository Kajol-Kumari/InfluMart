import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Depth1Frame1 = () => {
  return (
    <View style={styles.depth1Frame2}>
      <View style={[styles.depth2Frame0, styles.depth2FrameLayout]}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <Text style={styles.text}>|</Text>
          </View>
        </View>
      </View>
      <View style={[styles.depth2Frame1, styles.depth2FrameLayout]} />
      <View style={[styles.depth2Frame1, styles.depth2FrameLayout]} />
      <View style={[styles.depth2Frame1, styles.depth2FrameLayout]} />
      <View style={[styles.depth2Frame1, styles.depth2FrameLayout]} />
      <View style={[styles.depth2Frame1, styles.depth2FrameLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  depth2FrameLayout: {
    height: 56,
    width: 48,
    borderBottomWidth: 1,
    borderColor: Color.colorLavender,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.workSansRegular,
    color: Color.colorGray,
    textAlign: "center",
  },
  depth4Frame0: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth3Frame0: {
    width: 4,
    height: 24,
    alignItems: "center",
  },
  depth2Frame0: {
    padding: Padding.p_5xs,
    flexDirection: "row",
    height: 56,
    width: 48,
    borderBottomWidth: 1,
    borderColor: Color.colorLavender,
    borderStyle: "solid",
  },
  depth2Frame1: {
    marginLeft: 12,
  },
  depth1Frame2: {
    width: 390,
    height: 80,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Depth1Frame1;
