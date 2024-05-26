import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Depth2Frame from "./Depth2Frame";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Depth1Frame1 = () => {
  return (
    <View style={styles.depth1Frame6}>
      <View style={styles.depth2Frame0}>
        <View style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
          <View style={styles.depth4Frame0}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.basic, styles.moTypo]}>Basic</Text>
            </View>
          </View>
          <Image
            style={styles.depth4Frame1}
            contentFit="cover"
            source={require("../assets/depth-4-frame-1.png")}
          />
        </View>
        <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
          <View style={styles.depth5Frame0}>
            <Text style={[styles.mo, styles.moTypo]}>$500 /mo</Text>
          </View>
        </View>
      </View>
      <Depth2Frame standard="Standard" />
      <Depth2Frame standard="Premium" propWidth={60} />
      <Depth2Frame standard="Product Post" propWidth={90} />
      <Depth2Frame standard="Story Post" propWidth={72} />
      <Depth2Frame standard="Reel" propWidth={29} />
    </View>
  );
};

const styles = StyleSheet.create({
  depth3FrameLayout: {
    width: 326,
    height: 21,
  },
  moTypo: {
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  basic: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorWhite,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 38,
    height: 21,
  },
  depth4Frame1: {
    width: 20,
    height: 20,
  },
  depth3Frame0: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 21,
  },
  mo: {
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorLightgray,
  },
  depth3Frame1: {
    marginTop: 8,
    height: 21,
  },
  depth2Frame0: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 358,
    height: 82,
    padding: Padding.p_base,
  },
  depth1Frame6: {
    width: 390,
    height: 439,
    padding: Padding.p_base,
  },
});

export default Depth1Frame1;
