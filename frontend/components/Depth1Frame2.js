import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from "react-native-responsive-dimensions";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Depth1Frame2 = ({
  brands,
  depth3Frame1,
  propBackgroundColor,
  propFontFamily,
  propColor,
}) => {
  const depth1Frame8Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const brandsStyle = useMemo(() => {
    return {
      fontFamily: propFontFamily,
      color: propColor,
      fontSize: responsiveFontSize(2),
      lineHeight: responsiveFontSize(3),
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
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  depth4Frame0: {
    flex: 1,
  },
  depth3Frame0: {
    flex: 1,
    overflow: "hidden",
  },
  depth3Frame1: {
    width: responsiveFontSize(3),
    height: responsiveFontSize(3),
    marginRight: responsiveWidth(10),
  },
  depth2Frame0: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(4),
    height: responsiveFontSize(2), // Adjust height for better layout
    width: responsiveScreenWidth(100),
  },
  depth1Frame8: {
    backgroundColor: Color.colorWhite,
    width: responsiveScreenWidth(80),
    paddingVertical: responsiveWidth(2),
  },
});

export default Depth1Frame2;
