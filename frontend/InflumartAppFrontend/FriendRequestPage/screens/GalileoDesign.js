import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
        <Depth1Frame />
        <View style={styles.depth1Frame1}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.samanthaAdams, styles.samanthaFlexBox]}>
              Samantha Adams
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame2}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.samanthaWouldLike, styles.samanthaFlexBox]}>
              Samantha would like to collaborate with you on a project. Are you
              interested?
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame3}>
          <View style={styles.depth2Frame02}>
            <View style={[styles.depth3Frame0, styles.frameFlexBox]}>
              <View style={[styles.depth4Frame0, styles.depth4FrameSpaceBlock]}>
                <View style={[styles.depth5Frame0, styles.frameBg1]}>
                  <View style={styles.depth2Frame0}>
                    <Text style={[styles.decline, styles.declineTypo]}>
                      Decline
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame1, styles.frameLayout]}>
              <View style={[styles.depth4Frame01, styles.frameBg]}>
                <View style={[styles.depth5Frame01, styles.frameBg]}>
                  <View style={styles.depth2Frame0}>
                    <Text style={[styles.collaborate, styles.declineTypo]}>
                      Collaborate
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame4} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  samanthaFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  frameFlexBox: {
    justifyContent: "center",
    width: 85,
    height: 40,
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
  },
  frameBg1: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  declineTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  frameLayout: {
    width: 114,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
  },
  frameBg: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  samanthaAdams: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  depth2Frame0: {
    alignSelf: "stretch",
  },
  depth1Frame1: {
    height: 60,
    paddingTop: 20,
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  samanthaWouldLike: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
  },
  depth1Frame2: {
    paddingTop: 4,
    height: 64,
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  decline: {
    color: Color.colorGray,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  depth5Frame0: {
    width: 53,
    height: 21,
  },
  depth4Frame0: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
    justifyContent: "center",
    width: 85,
    height: 40,
    flexDirection: "row",
  },
  depth3Frame0: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  collaborate: {
    color: Color.colorWhitesmoke,
  },
  depth5Frame01: {
    width: 82,
    height: 21,
  },
  depth4Frame01: {
    width: 114,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
    paddingVertical: 0,
    alignItems: "center",
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
  },
  depth3Frame1: {
    left: 97,
    top: 0,
    position: "absolute",
  },
  depth2Frame02: {
    width: 211,
    height: 40,
  },
  depth1Frame3: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    height: 64,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth1Frame4: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  galileoDesign: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default GalileoDesign;
