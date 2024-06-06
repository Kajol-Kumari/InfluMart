import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Depth1Frame11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.depth1Frame0}>
      <View style={styles.depth2Frame0}>
        <View style={[styles.depth3Frame0, styles.depth3FrameLayout]} />
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>

        <View style={styles.depth3Frame1}>
          <View style={styles.depth4Frame0}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.marketplace}>Marketplace</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

        <View style={[styles.depth3Frame2, styles.depth3FrameLayout]}>
          <View style={[styles.depth4Frame01, styles.depth3FrameLayout]}>
            <Image
              style={styles.depth5Frame01}
              contentFit="cover"
              source={require("../assets/depth-5-frame-0.png")}
            />
          </View>
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
  depth3Frame0: {
    alignItems: "center",
  },
  marketplace: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 'auto',
    overflow: "hidden",
    height: 23,
  },
  depth3Frame1: {
    width: 262,
    justifyContent: "center",
    height: 23,
    alignItems: "center",
    flexDirection: "row",
  },
  depth5Frame01: {
    width: 24,
    height: 24,
  },
  depth4Frame01: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  depth3Frame2: {
    flexDirection: "row",
  },
  depth2Frame0: {
    width: 358,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 48,
  },
  depth1Frame0: {
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 72,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
  },
});

export default Depth1Frame11;
