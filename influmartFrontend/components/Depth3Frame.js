import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

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
        contentFit="cover"
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
    height: 160,
    overflow: "hidden",
    width: 160,
  },
  zara: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.colorGray_500,
  },
  depth6Frame0: {
    height: 24,
    width: 160,
  },
  menswearCollection: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorSlategray_300,
  },
  depth6Frame1: {
    height: 21,
    width: 160,
  },
  depth5Frame0: {
    height: 45,
    width: 160,
  },
  depth4Frame2: {
    height: 69,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    width: 160,
  },
  depth3Frame0: {
    borderRadius: Border.br_5xs,
    height: 229,
    width: 160,
  },
});

export default Depth3Frame;
