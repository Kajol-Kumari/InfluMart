import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const ProfileCard = () => {
  return (
    <View style={styles.depth1Frame13}>
      <View style={styles.depth2Frame0}>
        <View style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-01.png")}
            />
          </View>
          <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
          <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-02.png")}
            />
          </View>
          <View style={[styles.depth4Frame11, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.search, styles.homeTypo]}>Search</Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
          <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-03.png")}
            />
          </View>
          <View style={[styles.depth4Frame12, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.search, styles.homeTypo]}>My Brands</Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
          <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-04.png")}
            />
          </View>
          <View style={[styles.depth4Frame13, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.search, styles.homeTypo]}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth3FrameLayout: {
    width: 84,
    alignItems: "center",
    height: 54,
  },
  depth4FrameFlexBox: {
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    marginTop: 4,
    height: 18,
    alignItems: "center",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  depth5Frame0: {
    height: 24,
    width: 24,
  },
  depth4Frame0: {
    borderRadius: Border.br_base,
    width: 48,
    justifyContent: "center",
  },
  home: {
    color: Color.colorGray,
  },
  depth5Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame1: {
    width: 36,
  },
  depth3Frame0: {
    alignItems: "center",
  },
  depth4Frame01: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    width: 24,
  },
  search: {
    color: Color.colorSlategray,
  },
  depth4Frame11: {
    width: 42,
  },
  depth3Frame1: {
    marginLeft: 8,
    alignItems: "center",
  },
  depth4Frame12: {
    width: 64,
  },
  depth4Frame13: {
    width: 39,
  },
  depth2Frame0: {
    width: 358,
    flexDirection: "row",
    height: 54,
  },
  depth1Frame13: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGhostwhite,
    borderTopWidth: 1,
    width: 390,
    height: 75,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
  },
});

export default ProfileCard;
