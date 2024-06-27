import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const Depth1Frame13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.depth1Frame8}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-027.png")}
            />
          </View>
          <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.depth3FrameSpaceBlock]}>
          <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-028.png")}
            />
          </View>
          <View style={[styles.depth4Frame11, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.partnerships, styles.homeTypo]}>
                Partnership
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AdminPanel')}>

        <View style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-029.png")}
            />
          </View>

          <View style={[styles.depth4Frame12, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Settings</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

        <View style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-030.png")}
            />
          </View>
          <View style={[styles.depth4Frame13, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Network</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Analytics')}>

        <View style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-031.png")}
            />
          </View>
          <View style={[styles.depth4Frame14, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth4FrameFlexBox: {
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    marginTop: 4,
    alignItems: "center",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  depth3FrameSpaceBlock: {
    marginLeft: 8,
    alignItems: "center",
    height: 72,
  },
  depth5Frame0: {
    height: 24,
    width: 24,
  },
  depth4Frame0: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    width: 24,
  },
  home: {
    color: Color.colorLightgray,
  },
  depth5Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame1: {
    width: 35,
    height: 18,
    marginTop: 4,
  },
  depth3Frame0: {
    alignItems: "center",
    width: 62,
    height: 72,
  },
  depth4Frame01: {
    borderRadius: Border.br_base,
    width: 48,
    justifyContent: "center",
  },
  partnerships: {
    color: Color.colorWhite,
  },
  depth4Frame11: {
    width: 77,
    height: 18,
    marginTop: 4,
  },
  depth3Frame1: {
    width: 77,
  },
  depth4Frame12: {
    width: 'auto',
    height: 18,
    marginTop: 4,
  },
  depth3Frame2: {
    width: 62,
  },
  depth4Frame13: {
    height: 'auto',
    width: 'auto',
  },
  depth4Frame14: {
    width: 'auto',
    height: 18,
    marginTop: 4,
  },
  depth2Frame0: {
    width: "100%",
    flexDirection: "row",
    justifyContent:"space-evenly",
    height: 72,
  },
  depth1Frame8: {
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderTopWidth: 1,
    width: "100%",
    height:88,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    position:"absolute",
    bottom:0
  },
});

export default Depth1Frame13;
