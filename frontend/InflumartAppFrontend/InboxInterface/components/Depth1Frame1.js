import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Depth1Frame1 = () => {
  return (
    <View style={[styles.depth1Frame1, styles.frameSpaceBlock]}>
      <View style={[styles.depth2Frame0, styles.frameSpaceBlock]}>
        <Image
          style={styles.depth3Frame0}
          contentFit="cover"
          source={require("../assets/depth-3-frame-0.png")}
        />
        <View style={styles.depth3Frame1}>
          <View style={styles.depth4Frame0}>
            <Text style={styles.searchForA}>
              Search for a project, brand or influencer
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  depth3Frame0: {
    width: 24,
    height: 24,
  },
  searchForA: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorSlategray,
    textAlign: "left",
  },
  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth3Frame1: {
    width: 290,
    height: 48,
    marginLeft: 12,
  },
  depth2Frame0: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 358,
    height: 72,
    alignItems: "center",
  },
  depth1Frame1: {
    width: 390,
    height: 96,
  },
});

export default Depth1Frame1;
