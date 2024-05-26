import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const Depth1Frame1 = () => {
  return (
    <View style={styles.depth1Frame4}>
      <View style={styles.depth2Frame0}>
        <View style={[styles.depth3Frame0, styles.depth3FramePosition]}>
          <View style={[styles.depth4Frame0, styles.frameLayout1]}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.pastCollaborations, styles.contactInfoTypo]}>
                Past Collaborations
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.frameLayout]}>
          <View style={[styles.depth4Frame01, styles.frameLayout]}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.contactInfo, styles.contactInfoTypo]}>
                Contact Info
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth3FramePosition: {
    paddingBottom: Padding.p_smi,
    paddingTop: Padding.p_base,
    justifyContent: "center",
    height: 53,
    borderBottomWidth: 3,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  frameLayout1: {
    width: 145,
    alignItems: "center",
  },
  contactInfoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  frameLayout: {
    width: 92,
    alignItems: "center",
  },
  pastCollaborations: {
    color: Color.colorGray,
  },
  depth5Frame0: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame0: {
    height: 21,
    alignItems: "center",
  },
  depth3Frame0: {
    alignItems: "center",
    width: 145,
  },
  contactInfo: {
    color: Color.colorSlategray,
  },
  depth4Frame01: {
    height: 21,
  },
  depth3Frame1: {
    marginLeft: 32,
    paddingBottom: Padding.p_smi,
    paddingTop: Padding.p_base,
    justifyContent: "center",
    height: 53,
    borderBottomWidth: 3,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  depth2Frame0: {
    borderColor: Color.colorGainsboro_200,
    borderBottomWidth: 1,
    height: 54,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    borderStyle: "solid",
    width: 390,
  },
  depth1Frame4: {
    height: 66,
    paddingBottom: Padding.p_xs,
    width: 390,
  },
});

export default Depth1Frame1;
