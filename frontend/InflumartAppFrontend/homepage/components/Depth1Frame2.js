import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Depth1Frame2 = ({ contactUs, sanFranciscoCA, contactinflumartcom }) => {
  return (
    <View style={styles.depth1Frame5}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <Image
            style={styles.depth4Frame0}
            contentFit="cover"
            source={require("../assets/depth-4-frame-02.png")}
          />
        </View>
        <View style={styles.depth3Frame1}>
          <View style={styles.depth4Frame01}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.contactUs}>{contactUs}</Text>
            </View>
          </View>
          <View style={styles.depth4Frame1}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.sanFranciscoCa}>{sanFranciscoCA}</Text>
            </View>
          </View>
          <View style={styles.depth4Frame1}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.sanFranciscoCa}>{contactinflumartcom}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGhostwhite,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  contactUs: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.colorGray,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: 294,
    height: 24,
  },
  sanFranciscoCa: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorSlategray,
    textAlign: "left",
  },
  depth4Frame1: {
    height: 21,
    width: 294,
  },
  depth3Frame1: {
    marginLeft: 16,
    width: 294,
    justifyContent: "center",
    height: 66,
  },
  depth2Frame0: {
    position: "absolute",
    top: 12,
    left: 16,
    width: 358,
    flexDirection: "row",
    height: 66,
  },
  depth1Frame5: {
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 90,
  },
});

export default Depth1Frame2;
