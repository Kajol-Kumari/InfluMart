import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Depth1Frame2 = ({
  brands,
  depth3Frame1,
  propBackgroundColor,
  propFontFamily,
  propColor,
}) => {
  return (
    <View style={[styles.depth1Frame8, { backgroundColor: propBackgroundColor }]}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <Text style={[styles.brands, { fontFamily: propFontFamily, color: propColor }]}>{brands}</Text>
          </View>
        </View>
        <Image
          style={styles.depth3Frame1}
          contentFit="cover"
          source={depth3Frame1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  brands: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    textAlign: "left",
  },
  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth3Frame0: {
    flex: 1,
    height: 24,
    overflow: "hidden",
  },
  depth3Frame1: {
    width: 28,
    marginLeft: 16,
    height: 28,
  },
  depth2Frame0: {
    position: "absolute",
    top: 14,
    left: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    height: 28,
  },
  depth1Frame8: {
    backgroundColor: Color.colorWhite,
    height: 56,
    width: '100%', 
  },
});

export default Depth1Frame2;
