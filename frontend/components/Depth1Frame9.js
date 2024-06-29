import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Depth1Frame9 = ({image,username,location,category}) => {
  return (
    <View style={styles.depth1Frame1}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={image}
            />
          </View>
          <View style={[styles.depth4Frame1, styles.frameFlexBox]}>
            <View style={styles.depth5Frame01}>
              <View style={styles.depth6Frame0}>
                <Text style={[styles.caroline, styles.followTypo]}>
                  {username} 
                </Text>
              </View>
            </View>
            <View style={[styles.depth5Frame1, styles.depth5FrameLayout]}>
              <View style={styles.depth6Frame0}>
                <Text style={styles.age27Los} numberOfLines={1}>
                  {location}
                </Text>
              </View>
            </View>
            <View style={[styles.depth5Frame2, styles.depth5FrameLayout]}>
              <View style={styles.depth6Frame0}>
                <Text style={styles.age27Los} numberOfLines={1}>
                  {category}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.frameLayout]}>
          <View style={styles.frameLayout}>
            <TouchableOpacity style={[styles.depth5Frame02, styles.frameBg]}>
              <View style={[styles.depth6Frame03, styles.frameBg]}>
                <View style={styles.depth7Frame0}>
                  <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  followTypo: {
    color: Color.colorGray_500,
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth5FrameLayout: {
    height: 24,
    alignItems: "center",
  },
  frameLayout: {
    height: 40,
    width: "100%",
  },
  frameBg: {
    backgroundColor: Color.colorWhitesmoke_300,
    overflow: "hidden",
  },
  depth5Frame0: {
    borderRadius: Border.br_45xl,
    overflow: "hidden",
    height: 128,
    width: 128,
  },
  depth4Frame0: {
    height: 128,
    width: 128,
  },
  caroline: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    textAlign: "center",
  },
  depth6Frame0: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth5Frame01: {
    width: 'auto',
    height: 'auto',
    alignItems: "center",
  },
  age27Los: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorSlategray_200,
    textAlign: "center",
  },
  depth5Frame1: {
    width: 'auto',
  },
  depth5Frame2: {
    width: 'auto',
  },
  depth4Frame1: {
    height: 76,
    marginTop: 16,
    width: 189,
  },
  depth3Frame0: {
    height: 220,
    width: 189,
    alignItems: "center",
  },
  follow: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    textAlign: "left",
  },
  depth7Frame0: {
    alignSelf: "stretch",
  },
  depth6Frame03: {
    width: 'auto',
    height: 21,
  },
  depth5Frame02: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  depth3Frame1: {
    marginTop: 16,
    flexDirection: "row",
  },
  depth2Frame0: {
    height: 276,
    alignItems: "center",
    width: "100%",
  },
  depth1Frame1: {
    width: "100%",
    height: 308,
    padding: Padding.p_base,
    flexDirection: "row",
  },
});

export default Depth1Frame9;
