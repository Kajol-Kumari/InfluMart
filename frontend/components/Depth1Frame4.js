import React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const { width, height } = Dimensions.get("window");

const dynamicStyles = {
  frameWidth: Math.min(width * 0.9), // Setting a maximum width of 400
  frameHeight: height * 0.07,
  imageSize: Math.min(width * 0.06, 40), // Setting a maximum size of 40
  fontSize: Math.min(width * 0.05, 30), // Setting a maximum font size of 30
};

const Depth1Frame4 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <Image
            style={styles.depth4Frame0}
            contentFit="cover"
            source={require("../assets/depth-4-frame-0.png")}
          />
        </View>
        <View style={styles.depth3Frame1}>
          <View style={styles.depth4Frame01}>
            <Text style={styles.influmart}>Influmart</Text>
          </View>
        </View>
        <View style={styles.depth3Frame0}>
          <Image
            style={styles.depth4Frame0}
            contentFit="cover"
            source={require("../assets/depth-5-frame-0.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth1Frame0: {
    backgroundColor: Color.colorWhite,
    width: '100%',
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    alignItems: 'center',
  },
  depth2Frame0: {
    width: dynamicStyles.frameWidth,
    height: dynamicStyles.frameHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  depth3Frame0: {
    justifyContent: "center",
    alignItems: "center",
  },
  depth3Frame1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  depth4Frame0: {
    width: dynamicStyles.imageSize,
    height: dynamicStyles.imageSize,
  },
  depth4Frame01: {
    paddingHorizontal: Padding.p_5xs,
  },
  influmart: {
    fontSize: dynamicStyles.fontSize,
    lineHeight: dynamicStyles.fontSize * 1.2,
    fontWeight: "700",
    fontFamily: FontFamily.lexendBold,
    color: Color.colorGray_500,
    textAlign: "center",
  },
});

export default Depth1Frame4;
