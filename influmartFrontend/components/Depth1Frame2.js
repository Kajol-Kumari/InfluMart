import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

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
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: 314,
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
    width: 358,
    flexDirection: "row",
    alignItems: "center",
    height: 28,
  },
  depth1Frame8: {
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 56,
  },
});

export default Depth1Frame2;
