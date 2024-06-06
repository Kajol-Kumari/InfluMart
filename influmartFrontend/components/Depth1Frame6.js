import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Depth1Frame6 = ({ userEmail, propWidth }) => {
  const depth6Frame0Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.depth1Frame3, styles.frameFlexBox]}>
      <View style={[styles.depth2Frame0, styles.frameLayout]}>
        <View style={styles.frameLayout}>
          <View style={[styles.depth4Frame0, styles.frameLayout]}>
            <View style={[styles.depth5Frame0, styles.frameLayout]}>
              <View style={[styles.depth6Frame0, depth6Frame0Style]}>
                <View style={styles.depth7Frame0}>
                  <Text style={styles.email}>{userEmail}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    height: 56,
    width: 358,
  },
  email: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSteelblue_200,
    textAlign: "left",
  },
  depth7Frame0: {
    alignSelf: "stretch",
  },
  depth6Frame0: {
    width: 'auto',
    height: 24,
    overflow: "hidden",
  },
  depth5Frame0: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderColor: Color.colorLavender,
    borderWidth: 1,
    justifyContent: "space-between",
    padding: Padding.p_mini,
    overflow: "hidden",
    flexDirection: "row",
    height: 56,
    width: 358,
  },
  depth4Frame0: {
    alignItems: "center",
    flexDirection: "row",
  },
  depth2Frame0: {
    alignItems: "flex-end",
    flexDirection: "row",
    height: 56,
    width: 358,
  },
  depth1Frame3: {
    width: 390,
    height: 80,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
});

export default Depth1Frame6;
