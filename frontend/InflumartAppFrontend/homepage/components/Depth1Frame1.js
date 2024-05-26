import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Depth1Frame1 = ({ brands }) => {
  return (
    <View style={styles.depth1Frame8}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <Text style={styles.brands}>{brands}</Text>
          </View>
        </View>
        <Image
          style={styles.depth3Frame1}
          contentFit="cover"
          source={require("../assets/depth-3-frame-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  brands: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorGray,
    textAlign: "left",
  },
  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: 314,
    height: 24,
    overflow: "hidden",
  },
  depth3Frame1: {
    width: 28,
    marginLeft: 16,
    height: 28,
  },
  depth2Frame0: {
    position: "absolute",
    top: 14,
    left: 16,
    width: 358,
    flexDirection: "row",
    alignItems: "center",
    height: 28,
  },
  depth1Frame8: {
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 56,
  },
});

export default Depth1Frame1;
