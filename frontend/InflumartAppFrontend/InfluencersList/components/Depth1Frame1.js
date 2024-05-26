import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Depth1Frame1 = () => {
  return (
    <View style={styles.depth1Frame16}>
      <View style={[styles.depth2Frame0, styles.frameLayout]}>
        <View style={[styles.depth3Frame0, styles.frameLayout]}>
          <Image
            style={styles.depth4Frame0}
            contentFit="cover"
            source={require("../assets/depth-4-frame-0.png")}
          />
          <View style={styles.depth4Frame1}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.filters}>Filters</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 40,
    width: 103,
    flexDirection: "row",
    overflow: "hidden",
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  filters: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame1: {
    width: 47,
    height: 21,
    marginLeft: 8,
    overflow: "hidden",
  },
  depth3Frame0: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorRoyalblue,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: Padding.p_5xs,
    paddingRight: Padding.p_base,
  },
  depth2Frame0: {
    justifyContent: "flex-end",
  },
  depth1Frame16: {
    width: 390,
    height: 60,
    paddingHorizontal: Padding.p_9xl,
    paddingBottom: Padding.p_xl,
    justifyContent: "flex-end",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default Depth1Frame1;
