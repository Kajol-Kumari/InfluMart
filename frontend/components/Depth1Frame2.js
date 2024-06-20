import React, { useMemo } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const { width: screenWidth } = Dimensions.get("window");

const scaleSize = (size) => {
  const baseWidth = 400; // Base width for scaling (iPhone 6/7/8)
  return size * (screenWidth / baseWidth);
};

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Depth1Frame2 = ({
  brands,
  depth3Frame1,
  propBackgroundColor,
  propFontFamily,
  propColor,
}) => {
  const depth1Frame8Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const brandsStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("color", propColor),
    };
  }, [propFontFamily, propColor]);

  return (
    <View style={[styles.depth1Frame8, depth1Frame8Style]}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <Text style={[styles.brands, brandsStyle]}>{brands}</Text>
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
    fontSize: scaleSize(FontSize.size_base),
    lineHeight: scaleSize(24),
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  depth4Frame0: {
    flex: 1, // Make it flexible to take up available space
  },
  depth3Frame0: {
    flex: 1, // Make it flexible to take up available space
    overflow: "hidden",
  },
  depth3Frame1: {
    width: scaleSize(28),
    height: scaleSize(28),
    marginLeft: scaleSize(16),
  },
  depth2Frame0: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scaleSize(16),
    height: scaleSize(28),
    width: '100%', // Take full width
  },
  depth1Frame8: {
    backgroundColor: Color.colorWhite,
    width: '100%', // Take full width
    paddingVertical: scaleSize(14),
  },
});

export default Depth1Frame2;
