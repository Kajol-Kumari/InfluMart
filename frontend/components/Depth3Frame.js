import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import {
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Depth3Frame = ({
  depth4Frame0,
  zara,
  menswearCollection,
  propMarginLeft,
}) => {
  const depth3Frame0Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.depth3Frame0, depth3Frame0Style]}>
      <Image
        style={styles.depth4Frame0}
        resizeMode="cover"
        source={depth4Frame0}
      />
      <View style={styles.depth4Frame2}>
        <View style={styles.depth5Frame0}>
          <View style={styles.depth6Frame0}>
            <Text style={[styles.zara, styles.zaraFlexBox]}>{zara}</Text>
          </View>
          <View style={styles.depth6Frame1}>
            <Text style={[styles.menswearCollection, styles.zaraFlexBox]}>
              {menswearCollection}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  zaraFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth4Frame0: {
    borderRadius: Border.br_xs,
    height: responsiveWidth(30),
    overflow: "hidden",
    width: responsiveWidth(30), 
  },
  zara: {
    fontSize: responsiveFontSize(2), 
    lineHeight: responsiveFontSize(2.5), 
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.colorGray_500,
  },
  depth6Frame0: {
    height: responsiveFontSize(2.5), 
    width: responsiveWidth(30), 
  },
  menswearCollection: {
    fontSize: responsiveFontSize(1.4), 
    lineHeight: responsiveFontSize(2), 
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorSlategray_300,
  },
  depth6Frame1: {
    height: responsiveFontSize(2), 
    width: responsiveWidth(30),
  },
  depth5Frame0: {
    height: responsiveWidth(9), 
    width: responsiveWidth(30), 
  },
  depth4Frame2: {
    height: responsiveWidth(13), 
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    width: responsiveWidth(30), 
  },
  depth3Frame0: {
    borderRadius: Border.br_5xs,
    height: responsiveWidth(40), 
    width: responsiveWidth(30), 
  },
});

export default Depth3Frame;
