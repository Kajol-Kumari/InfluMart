import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Depth2Frame = () => {
  return (
    <View style={styles.depth2Frame1}>
      <View style={styles.depth3Frame0}>
        <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
          <View style={styles.depth5Frame0}>
            <View style={styles.depth6Frame0}>
              <Text style={[styles.adFree, styles.textClr]}>Ad-Free</Text>
            </View>
          </View>
          <View style={styles.frameLayout}>
            <View style={[styles.depth6Frame01, styles.frameLayout]}>
              <View style={styles.depth7Frame0}>
                <View style={styles.depth6Frame0}>
                  <Text style={styles.currentPlan}>Current Plan</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth4Frame1, styles.depth4FrameFlexBox]}>
          <View style={styles.depth5Frame01}>
            <View style={styles.depth6Frame0}>
              <Text style={[styles.text, styles.textClr]}>$14.99</Text>
            </View>
          </View>
          <View style={styles.depth5Frame11}>
            <View style={styles.depth6Frame0}>
              <Text style={[styles.adFree, styles.textClr]}>/mo</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.depth3Frame1}>
        <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
          <View style={styles.depth5Frame02}>
            <Image
              style={styles.depth6Frame04}
              contentFit="cover"
              source={require("../assets/depth-6-frame-0.png")}
            />
          </View>
          <View style={styles.depth5Frame12}>
            <View style={styles.depth6Frame0}>
              <Text style={[styles.downloadYourFavorites, styles.textClr]}>
                Download your favorites to watch on-the-go Stream in 4K UHD
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth4FrameFlexBox: {
    flexDirection: "row",
    width: 308,
  },
  textClr: {
    color: Color.colorGray,
    textAlign: "left",
  },
  frameLayout: {
    width: 101,
    flexDirection: "row",
    height: 24,
  },
  adFree: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
    textAlign: "left",
    lineHeight: 20,
    color: Color.colorGray,
  },
  depth6Frame0: {
    alignSelf: "stretch",
  },
  depth5Frame0: {
    width: 64,
    height: 20,
  },
  currentPlan: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  depth7Frame0: {
    width: 77,
    height: 18,
  },
  depth6Frame01: {
    backgroundColor: Color.colorDodgerblue,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_10xs,
    borderRadius: Border.br_xs,
  },
  depth4Frame0: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 24,
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_17xl,
    letterSpacing: -1,
    lineHeight: 45,
    fontWeight: "900",
    fontFamily: FontFamily.workSansBlack,
    textAlign: "left",
  },
  depth5Frame01: {
    width: 112,
    height: 45,
  },
  depth5Frame11: {
    width: 32,
    marginLeft: 4,
    height: 20,
  },
  depth4Frame1: {
    marginTop: 4,
    height: 45,
  },
  depth3Frame0: {
    height: 73,
    width: 308,
  },
  depth6Frame04: {
    overflow: "hidden",
    width: 20,
    height: 20,
  },
  depth5Frame02: {
    width: 20,
    height: 39,
  },
  downloadYourFavorites: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    lineHeight: 20,
    color: Color.colorGray,
  },
  depth5Frame12: {
    width: 276,
    marginLeft: 12,
    height: 39,
  },
  depth4Frame01: {
    height: 39,
  },
  depth3Frame1: {
    marginTop: 16,
    height: 39,
    width: 308,
  },
  depth2Frame1: {
    position: "absolute",
    top: 196,
    left: 16,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    width: 358,
    height: 178,
    padding: Padding.p_5xl,
    borderRadius: Border.br_xs,
  },
});

export default Depth2Frame;
