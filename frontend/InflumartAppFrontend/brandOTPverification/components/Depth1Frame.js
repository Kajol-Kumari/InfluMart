import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Depth1Frame = ({ email, email1, depth6Frame1, propWidth }) => {
  const depth6Frame0Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={styles.depth1Frame2}>
      <View style={[styles.depth2Frame0, styles.frameLayout1]}>
        <View style={styles.frameLayout1}>
          <View style={styles.depth4Frame0}>
            <Text style={[styles.email, styles.emailTypo]}>{email}</Text>
          </View>
          <View style={[styles.depth4Frame1, styles.frameLayout]}>
            <View style={[styles.depth5Frame0, styles.frameLayout]}>
              <View style={[styles.depth6Frame0, depth6Frame0Style]}>
                <View style={styles.depth7Frame0}>
                  <Text style={[styles.email1, styles.emailTypo]}>
                    {email1}
                  </Text>
                </View>
              </View>
              <Image
                style={styles.depth6Frame1}
                contentFit="cover"
                source={depth6Frame1}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 88,
    width: 358,
  },
  emailTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  frameLayout: {
    height: 56,
    width: 358,
    flexDirection: "row",
  },
  email: {
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.colorGray,
    alignSelf: "stretch",
  },
  depth4Frame0: {
    height: 32,
    paddingBottom: Padding.p_5xs,
    width: 358,
  },
  email1: {
    fontFamily: FontFamily.workSansRegular,
    color: Color.colorSteelblue,
  },
  depth7Frame0: {
    alignSelf: "stretch",
  },
  depth6Frame0: {
    width: 44,
    height: 24,
    overflow: "hidden",
  },
  depth6Frame1: {
    width: 24,
    height: 24,
  },
  depth5Frame0: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorAliceblue,
    justifyContent: "space-between",
    padding: Padding.p_base,
    overflow: "hidden",
  },
  depth4Frame1: {
    alignItems: "center",
  },
  depth2Frame0: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  depth1Frame2: {
    width: 390,
    height: 112,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Depth1Frame;
