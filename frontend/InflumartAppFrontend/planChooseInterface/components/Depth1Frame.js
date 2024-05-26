import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Depth1Frame = () => {
  return (
    <View style={styles.depth1Frame3}>
      <View style={styles.depth2Frame0}>
        <View style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
          <View style={[styles.depth4Frame0, styles.depth4FrameLayout]}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.monthly, styles.yearlyTypo]}>Monthly</Text>
            </View>
          </View>
        </View>
        <View style={styles.depth3FrameLayout}>
          <View style={[styles.depth4Frame01, styles.depth4FrameLayout]}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.yearly, styles.yearlyTypo]}>Yearly</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth3FrameLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    overflow: "hidden",
    height: 32,
    width: 175,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  depth4FrameLayout: {
    height: 21,
    overflow: "hidden",
  },
  yearlyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  monthly: {
    color: Color.colorGray,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 55,
  },
  depth3Frame0: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
  },
  yearly: {
    color: Color.colorSlategray,
  },
  depth4Frame01: {
    width: 41,
  },
  depth2Frame0: {
    backgroundColor: Color.colorWhitesmoke,
    width: 358,
    height: 40,
    padding: Padding.p_9xs,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  depth1Frame3: {
    width: 390,
    height: 64,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Depth1Frame;
