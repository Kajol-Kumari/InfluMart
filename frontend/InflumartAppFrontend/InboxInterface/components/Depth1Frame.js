import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Depth1Frame = ({
  depth3Frame0,
  projectWithAnna,
  inProgress,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const depth3Frame2Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const depth4Frame0Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const depth4Frame1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  return (
    <View style={styles.depth1Frame2}>
      <View style={styles.depth2Frame0}>
        <Image
          style={styles.depth3Frame0}
          contentFit="cover"
          source={depth3Frame0}
        />
        <View style={[styles.depth3Frame2, depth3Frame2Style]}>
          <View style={[styles.depth4Frame0, depth4Frame0Style]}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.projectWithAnna}>{projectWithAnna}</Text>
            </View>
          </View>
          <View style={[styles.depth4Frame1, depth4Frame1Style]}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.inProgress}>{inProgress}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth3Frame0: {
    borderRadius: Border.br_9xl,
    width: 56,
    overflow: "hidden",
    height: 56,
  },
  projectWithAnna: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorGray,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    height: 24,
    width: 140,
    overflow: "hidden",
  },
  inProgress: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorSlategray,
    textAlign: "left",
  },
  depth4Frame1: {
    height: 21,
    width: 140,
    overflow: "hidden",
  },
  depth3Frame2: {
    height: 45,
    justifyContent: "center",
    marginLeft: 16,
    width: 140,
  },
  depth2Frame0: {
    position: "absolute",
    top: 8,
    left: 16,
    width: 358,
    flexDirection: "row",
    alignItems: "center",
    height: 56,
  },
  depth1Frame2: {
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 72,
  },
});

export default Depth1Frame;
