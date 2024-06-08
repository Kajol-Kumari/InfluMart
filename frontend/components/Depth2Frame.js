import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Depth2Frame = ({
  depth4Frame0,
  carolineFemaleAge27Wearin,
  dior,
  propLeft,
  propTop,
  propHeight,
  propHeight1,
  propHeight2,
}) => {
  const depth2Frame0Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("top", propTop),
      ...getStyleValue("height", propHeight),
    };
  }, [propLeft, propTop, propHeight]);

  const depth3Frame11Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
    };
  }, [propHeight1]);

  const depth4Frame01Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight2),
    };
  }, [propHeight2]);

  return (
    <View style={[styles.depth2Frame0, depth2Frame0Style]}>
      <View style={styles.frameLayout}>
        <Image
          style={[styles.depth4Frame0, styles.frameLayout]}
          contentFit="cover"
          source={depth4Frame0}
        />
      </View>
      <View style={[styles.depth3Frame1, depth3Frame11Style]}>
        <View style={[styles.depth4Frame01, depth4Frame01Style]}>
          <Text style={[styles.carolineFemaleAge, styles.diorFlexBox]}>
            {carolineFemaleAge27Wearin}
          </Text>
        </View>
        <View style={styles.depth4Frame1}>
          <Text style={[styles.dior, styles.diorFlexBox]}>{dior}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 173,
    width: 173,
  },
  diorFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth4Frame0: {
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  carolineFemaleAge: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorGray_500,
  },
  depth4Frame01: {
    height: 72,
    width: 173,
  },
  dior: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorSlategray_200,
  },
  depth4Frame1: {
    height: 21,
    width: 173,
  },
  depth3Frame1: {
    height: 105,
    paddingBottom: Padding.p_xs,
    marginTop: 12,
    width: 173,
  },
  depth2Frame0: {
    position: "absolute",
    top: 16,
    left: 16,
    height: 290,
    width: 173,
  },
});

export default Depth2Frame;
