import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Depth1Frame from "../components/Depth1Frame";
import { Padding, FontFamily, FontSize, Color } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
        <View style={[styles.depth1Frame0, styles.depth1FrameLayout]}>
          <View style={[styles.depth2Frame0, styles.depth2FrameLayout]}>
            <View style={[styles.depth3Frame0, styles.depth3FrameLayout]} />
            <View style={styles.depth3Frame1}>
              <View style={styles.depth4Frame0}>
                <View style={styles.depth5Frame0}>
                  <Text
                    style={[
                      styles.reviewYourRegistration,
                      styles.createAccountTypo,
                    ]}
                  >
                    Review your registration
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame2, styles.depth3FrameLayout]}>
              <View style={styles.depth4Frame01} />
            </View>
          </View>
        </View>
        <Depth1Frame />
        <View style={styles.depth1Frame2}>
          <View style={styles.depth2Frame01}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.emailId, styles.emailIdTypo]}>
                  Email ID
                </Text>
              </View>
            </View>
            <View style={[styles.depth3Frame11, styles.depth3FrameFlexBox]}>
              <View style={styles.frameLayout2}>
                <View style={styles.frameLayout2}>
                  <Text style={[styles.sophiagetglocom, styles.emailIdTypo]}>
                    sophia@getglo.com
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame2}>
          <View style={styles.depth2Frame01}>
            <View style={styles.depth3Frame02}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.emailId, styles.emailIdTypo]}>
                  Password
                </Text>
              </View>
            </View>
            <View style={[styles.depth3Frame12, styles.frameLayout1]}>
              <View style={styles.frameLayout1}>
                <View style={styles.frameLayout1}>
                  <Text style={[styles.sophiagetglocom, styles.emailIdTypo]}>
                    8 characters
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame4}>
          <View style={[styles.depth2Frame03, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame03}>
              <View style={styles.depth4Frame06}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.brandType, styles.emailIdLayout]}>
                    Brand type
                  </Text>
                </View>
              </View>
              <View style={[styles.depth4Frame1, styles.depth4FrameLayout]}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.selectBrandType, styles.emailIdTypo]}>
                    Select brand type
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameLayout]}>
            <View style={styles.frameLayout}>
              <Text style={[styles.sophiagetglocom, styles.emailIdTypo]}>
                Personal
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame4}>
          <View style={[styles.depth2Frame04, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame05}>
              <View style={styles.depth4Frame07}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.brandType, styles.emailIdLayout]}>
                    Username
                  </Text>
                </View>
              </View>
              <View style={[styles.depth4Frame11, styles.depth4FrameLayout]}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.selectBrandType, styles.emailIdTypo]}>
                    Create a username
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameLayout]}>
            <View style={styles.frameLayout}>
              <Text style={[styles.sophiagetglocom, styles.emailIdTypo]}>
                @sophia
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame6} />
        <View style={[styles.depth1Frame7, styles.depth1FrameLayout]}>
          <View style={[styles.depth2Frame05, styles.frameBg]}>
            <View style={[styles.depth3Frame07, styles.frameBg]}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.createAccount, styles.emailIdLayout]}>
                  Create account
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame8} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth1FrameLayout: {
    paddingHorizontal: Padding.p_base,
    height: 72,
    width: 390,
  },
  depth2FrameLayout: {
    height: 48,
    width: 358,
    alignItems: "center",
    flexDirection: "row",
  },
  depth3FrameLayout: {
    width: 48,
    height: 48,
  },
  createAccountTypo: {
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  emailIdTypo: {
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
  },
  depth3FrameFlexBox: {
    marginLeft: 16,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameLayout1: {
    width: 98,
    height: 24,
  },
  depth2FramePosition: {
    top: 14,
    height: 45,
    left: 16,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  emailIdLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth4FrameLayout: {
    height: 21,
    overflow: "hidden",
  },
  frameLayout: {
    width: 67,
    height: 24,
  },
  frameBg: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  depth3Frame0: {
    alignItems: "center",
  },
  reviewYourRegistration: {
    fontSize: 18,
    lineHeight: 23,
    textAlign: "left",
    color: Color.colorGray,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 211,
    height: 23,
    overflow: "hidden",
  },
  depth3Frame1: {
    width: 262,
    justifyContent: "center",
    height: 23,
    alignItems: "center",
    flexDirection: "row",
  },
  depth4Frame01: {
    justifyContent: "flex-end",
    width: 48,
    alignItems: "center",
    height: 48,
  },
  depth3Frame2: {
    flexDirection: "row",
  },
  depth2Frame0: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  depth1Frame0: {
    paddingTop: Padding.p_base,
    paddingBottom: 8,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  emailId: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorGray,
  },
  depth3Frame01: {
    width: 191,
    height: 24,
    overflow: "hidden",
  },
  sophiagetglocom: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorGray,
    alignSelf: "stretch",
  },
  frameLayout2: {
    width: 151,
    height: 24,
  },
  depth3Frame11: {
    width: 151,
    height: 24,
  },
  depth2Frame01: {
    top: 16,
    height: 24,
    left: 16,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  depth1Frame2: {
    height: 56,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth3Frame02: {
    width: 244,
    height: 24,
    overflow: "hidden",
  },
  depth3Frame12: {
    marginLeft: 16,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  brandType: {
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    color: Color.colorGray,
  },
  depth4Frame06: {
    width: 122,
    height: 24,
    overflow: "hidden",
  },
  selectBrandType: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorSteelblue,
  },
  depth4Frame1: {
    width: 122,
  },
  depth3Frame03: {
    width: 122,
    height: 45,
    justifyContent: "center",
  },
  depth2Frame03: {
    width: 199,
    height: 45,
  },
  depth2Frame1: {
    top: 24,
    left: 307,
    position: "absolute",
    width: 67,
  },
  depth1Frame4: {
    height: 72,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth4Frame07: {
    width: 130,
    height: 24,
    overflow: "hidden",
  },
  depth4Frame11: {
    width: 130,
  },
  depth3Frame05: {
    width: 130,
    height: 45,
    justifyContent: "center",
  },
  depth2Frame04: {
    width: 203,
    height: 45,
  },
  depth1Frame6: {
    height: 104,
    width: 390,
  },
  createAccount: {
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth3Frame07: {
    width: 124,
    height: 24,
  },
  depth2Frame05: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    width: 358,
  },
  depth1Frame7: {
    paddingVertical: 12,
    flexDirection: "row",
  },
  depth1Frame8: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  galileoDesign: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default GalileoDesign;
