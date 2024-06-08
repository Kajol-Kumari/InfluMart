import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Depth1Frame12 = () => {
  return (
    <View style={[styles.depth1Frame2, styles.frameFlexBox]}>
      <Image
        style={styles.depth2Frame0}
        contentFit="cover"
        source={require("../assets/depth-2-frame-0.png")}
      />
      <View style={[styles.depth2Frame2, styles.frameFlexBox]}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <Text style={styles.typeAMessage}>Type a message</Text>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.frameLayout]}>
          <View style={styles.frameLayout}>
            <View style={[styles.depth5Frame0, styles.frameLayout]}>
              <Image
                style={styles.depth6Frame0}
                contentFit="cover"
                source={require("../assets/depth-6-frame-0.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    height: 32,
    width: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  depth2Frame0: {
    borderRadius: Border.br_xl,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  typeAMessage: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorDimgray,
    textAlign: "left",
  },
  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: 234,
    height: 24,
    overflow: "hidden",
  },
  depth6Frame0: {
    width: 20,
    height: 20,
  },
  depth5Frame0: {
    justifyContent: "center",
    padding: Padding.p_7xs,
  },
  depth3Frame1: {
    justifyContent: "flex-end",
    marginLeft: 16,
  },
  depth2Frame2: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_400,
    width: 306,
    height: 48,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xs,
    marginLeft: 12,
  },
  depth1Frame2: {
    width: 390,
    height: 72,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
});

export default Depth1Frame12;
