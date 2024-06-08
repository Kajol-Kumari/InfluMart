import React, { useMemo } from "react";
import { Image, StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Depth1Frame7 = ({
  depth4Frame0,
  requestDetails,
  depth3Frame0BackgroundColor,
  requestDetailsWidth,
  depth4Frame0FontFamily,
  depth4Frame0Color,
}) => {
  const depth1Frame0Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", depth3Frame0BackgroundColor),
    };
  }, [depth3Frame0BackgroundColor]);

  const depth4Frame0Style = useMemo(() => {
    return {
      ...getStyleValue("width", requestDetailsWidth),
    };
  }, [requestDetailsWidth]);

  const requestDetailsStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", depth4Frame0FontFamily),
      ...getStyleValue("color", depth4Frame0Color),
    };
  }, [depth4Frame0FontFamily, depth4Frame0Color]);

  return (
    <View style={[styles.depth1Frame0, depth1Frame0Style]}>
      <View style={styles.depth2Frame0}>
        <View style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
          <Image
            style={styles.depth4Frame0}
            contentFit="cover"
            source={depth4Frame0}
          />
        </View>
        <View style={styles.depth3Frame1}>
          <View style={[styles.depth4Frame01, depth4Frame0Style]}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.requestDetails, requestDetailsStyle]}>
                {requestDetails}
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame2, styles.depth3FrameLayout]}>
          <View style={[styles.depth4Frame02, styles.depth3FrameLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth3FrameLayout: {
    width: 48,
    height: 48,
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    alignItems: "center",
    flexDirection: "row",
  },
  requestDetails: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_400,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    overflow: "hidden",
    height: 'auto',
  },
  depth3Frame1: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  depth4Frame02: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  depth3Frame2: {
    flexDirection: "row",
  },
  depth2Frame0: {
    width: 358,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 'auto',
  },
  depth1Frame0: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 390,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    height: 'auto',
  },
});

export default Depth1Frame7;
