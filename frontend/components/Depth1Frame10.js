import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Depth1Frame10 = ({ depth5Frame0, kylieCosmetics, beauty }) => {
  return (
    <View style={styles.frameLayout2}>
      <View style={[styles.depth2Frame0, styles.frameLayout2]}>
        <View style={styles.depth3Frame0}>
          <View style={[styles.depth4Frame0, styles.frameLayout1]}>
            <Image
              style={[styles.depth5Frame0, styles.frameLayout1]}
              contentFit="cover"
              source={depth5Frame0}
            />
          </View>
          <View style={styles.depth4Frame1}>
            <View style={styles.depth5Frame01}>
              <View style={styles.depth6Frame0}>
                <Text style={styles.kylieCosmetics}>{kylieCosmetics}</Text>
              </View>
            </View>
            <View style={[styles.depth5Frame1, styles.frameLayout]}>
              <View style={styles.frameLayout}>
                <View style={styles.frameLayout}>
                  <View style={styles.depth6Frame0}>
                    <Text style={styles.beauty}>{beauty}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout2: {
    height: 316,
    width: 390,
  },
  frameLayout1: {
    height: 201,
    width: 358,
  },
  frameLayout: {
    height: 24,
    width: 358,
  },
  depth5Frame0: {
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
  depth4Frame0: {
    flexDirection: "row",
  },
  kylieCosmetics: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  depth6Frame0: {
    alignSelf: "stretch",
  },
  depth5Frame01: {
    height: 23,
    width: 358,
  },
  beauty: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorSlategray_200,
    textAlign: "left",
  },
  depth5Frame1: {
    alignItems: "flex-end",
    marginTop: 4,
    justifyContent: "center",
    flexDirection: "row",
  },
  depth4Frame1: {
    height: 83,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    width: 358,
  },
  depth3Frame0: {
    height: 284,
    width: 358,
    borderRadius: Border.br_xs,
  },
  depth2Frame0: {
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
    flexDirection: "row",
  },
});

export default Depth1Frame10;
