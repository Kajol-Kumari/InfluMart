import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Depth2Frame1 = ({ standard, propWidth }) => {
  const depth4Frame04Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={styles.depth2Frame2}>
      <View style={styles.depth3Frame0}>
        <View style={[styles.depth4Frame0, depth4Frame04Style]}>
          <View style={styles.depth5Frame0}>
            <Text style={styles.premium}>{standard}</Text>
          </View>
        </View>
        <Image
          style={styles.depth4Frame1}
          contentFit="cover"
          source={require("../assets/depth-4-frame-11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  premium: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 60,
    height: 21,
  },
  depth4Frame1: {
    width: 20,
    height: 20,
  },
  depth3Frame0: {
    width: 326,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 21,
  },
  depth2Frame2: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 358,
    height: 53,
    padding: Padding.p_base,
    marginTop: 12,
  },
});

export default Depth2Frame1;
