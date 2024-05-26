import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={[styles.depth0Frame0, styles.frameLayout3]}>
        <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock1]}>
          <View style={[styles.depth2Frame0, styles.depth2FrameLayout]}>
            <View style={[styles.depth3Frame0, styles.depth3FrameLayout]} />
            <View style={styles.depth3Frame1}>
              <View style={styles.depth4Frame0}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.signUp, styles.signUpTypo]}>
                    Sign up
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame2, styles.depth3FrameLayout]}>
              <View style={[styles.depth4Frame01, styles.depth3FrameLayout]} />
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
          <View style={[styles.depth2Frame01, styles.frameLayout2]}>
            <View style={styles.frameLayout2}>
              <View style={styles.depth4Frame02}>
                <Text style={[styles.email, styles.emailTypo]}>Email</Text>
              </View>
              <View style={styles.depth4Frame1}>
                <View style={[styles.depth5Frame01, styles.frameLayout1]}>
                  <View style={styles.depth6Frame0}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.email1, styles.email1Typo]}>
                        Email
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
          <View style={[styles.depth2Frame01, styles.frameLayout2]}>
            <View style={styles.frameLayout2}>
              <View style={styles.depth4Frame02}>
                <Text style={[styles.email, styles.emailTypo]}>Password</Text>
              </View>
              <View style={styles.depth4Frame1}>
                <View style={[styles.depth5Frame01, styles.frameLayout1]}>
                  <View style={styles.depth6Frame01}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.email1, styles.email1Typo]}>
                        Password
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
          <View style={[styles.depth2Frame01, styles.frameLayout2]}>
            <View style={styles.frameLayout2}>
              <View style={styles.depth4Frame02}>
                <Text style={[styles.email, styles.emailTypo]}>Username</Text>
              </View>
              <View style={styles.depth4Frame1}>
                <View style={[styles.depth5Frame01, styles.frameLayout1]}>
                  <View style={styles.depth6Frame02}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.email1, styles.email1Typo]}>
                        Username
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame4, styles.depth1FrameSpaceBlock1]}>
          <View style={styles.depth2Frame04}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.addSocialProfiles, styles.signUpTypo]}>
                Add social profiles
              </Text>
            </View>
          </View>
        </View>
        <Depth1Frame1
          instagram="Instagram"
          depth3Frame1={require("../assets/depth-3-frame-1.png")}
        />
        <Depth1Frame1
          instagram="YouTube"
          depth3Frame1={require("../assets/depth-3-frame-1.png")}
        />
        <Depth1Frame1
          instagram="Snapchat"
          depth3Frame1={require("../assets/depth-3-frame-1.png")}
        />
        <Depth1Frame1
          instagram="TikTok"
          depth3Frame1={require("../assets/depth-3-frame-1.png")}
        />
        <Depth1Frame1
          instagram="Facebook"
          depth3Frame1={require("../assets/depth-3-frame-1.png")}
        />
        <Depth1Frame1
          instagram="Twitter"
          depth3Frame1={require("../assets/depth-3-frame-1.png")}
        />
        <View style={[styles.depth1Frame4, styles.depth1FrameSpaceBlock1]}>
          <View style={styles.depth2Frame05}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.addSocialProfiles, styles.signUpTypo]}>
                Content and age restriction
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame12, styles.frameLayout3]}>
          <View style={[styles.depth2Frame06, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame06}>
              <View style={styles.depth4Frame05}>
                <View style={styles.depth5Frame0}>
                  <Text style={styles.emailTypo}>I am over 18</Text>
                </View>
              </View>
              <View style={[styles.depth4Frame13, styles.depth4FrameLayout]}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.youMustBe, styles.email1Typo]}>
                    You must be at least 18 to use this service.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameLayout]}>
            <View style={[styles.depth3Frame07, styles.frameLayout]}>
              <View style={[styles.depth4Frame06, styles.frameLayout]}>
                <View style={[styles.depth5Frame06, styles.frameLayout]} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame12, styles.frameLayout3]}>
          <View style={[styles.depth2Frame07, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame08}>
              <View style={styles.depth4Frame07}>
                <View style={styles.depth5Frame0}>
                  <Text style={styles.emailTypo}>
                    I agree to the terms of service
                  </Text>
                </View>
              </View>
              <View style={[styles.depth4Frame14, styles.depth4FrameLayout]}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.youMustBe, styles.email1Typo]}>
                    You need to agree to the terms of service.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameLayout]}>
            <View style={[styles.depth3Frame07, styles.frameLayout]}>
              <View style={[styles.depth4Frame06, styles.frameLayout]}>
                <View style={[styles.depth5Frame06, styles.frameLayout]} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame4, styles.depth1FrameSpaceBlock1]}>
          <View style={styles.depth2Frame08}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.addSocialProfiles, styles.signUpTypo]}>
                Industry association
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame15, styles.frameLayout3]}>
          <View style={[styles.depth2Frame09, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame011}>
              <View style={styles.depth5Frame0}>
                <Text style={styles.iAmA}>
                  I am a member of an industry association
                </Text>
              </View>
            </View>
            <View style={[styles.depth3Frame11, styles.frameLayout]}>
              <View style={[styles.depth4Frame06, styles.frameLayout]}>
                <View style={[styles.depth3Frame07, styles.frameLayout]}>
                  <View style={[styles.depth4Frame06, styles.frameLayout]}>
                    <View style={[styles.depth5Frame06, styles.frameLayout]} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame4, styles.depth1FrameSpaceBlock1]}>
          <View style={styles.depth2Frame010}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.addSocialProfiles, styles.signUpTypo]}>
                Price per post
              </Text>
            </View>
          </View>
        </View>
        <Depth1Frame1
          instagram="USD"
          depth3Frame1={require("../assets/depth-3-frame-11.png")}
        />
        <View style={[styles.depth1Frame4, styles.depth1FrameSpaceBlock1]}>
          <View style={styles.depth2Frame011}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.addSocialProfiles, styles.signUpTypo]}>
                Location
              </Text>
            </View>
          </View>
        </View>
        <Depth1Frame1
          instagram="United States"
          depth3Frame1={require("../assets/depth-3-frame-12.png")}
        />
        <View style={[styles.depth1Frame4, styles.depth1FrameSpaceBlock1]}>
          <View style={styles.depth2Frame012}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.addSocialProfiles, styles.signUpTypo]}>
                Subscription plans
              </Text>
            </View>
          </View>
        </View>
        <Depth1Frame />
        <View style={[styles.depth1Frame23, styles.depth1FrameSpaceBlock]}>
          <View style={[styles.depth2Frame013, styles.frameBg]}>
            <View style={[styles.depth3Frame015, styles.frameBg]}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.createAccount, styles.email1Layout]}>
                  Create account
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame24, styles.frameLayout3]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout3: {
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  depth1FrameSpaceBlock1: {
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth2FrameLayout: {
    height: 48,
    alignItems: "center",
  },
  depth3FrameLayout: {
    width: 48,
    height: 48,
  },
  signUpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth1FrameSpaceBlock: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  frameLayout2: {
    height: 88,
    width: 358,
  },
  emailTypo: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray,
  },
  frameLayout1: {
    borderRadius: Border.br_xs,
    flexDirection: "row",
    width: 358,
  },
  email1Typo: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    textAlign: "left",
  },
  depth2FramePosition: {
    left: 16,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  depth4FrameLayout: {
    height: 21,
    overflow: "hidden",
  },
  frameLayout: {
    width: 51,
    height: 31,
  },
  frameBg: {
    backgroundColor: Color.colorSteelblue,
    overflow: "hidden",
  },
  email1Layout: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth3Frame0: {
    alignItems: "center",
  },
  signUp: {
    fontSize: 18,
    lineHeight: 23,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 63,
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
    alignItems: "center",
  },
  depth3Frame2: {
    flexDirection: "row",
  },
  depth2Frame0: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  depth1Frame0: {
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    height: 72,
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: Padding.p_base,
  },
  email: {
    alignSelf: "stretch",
  },
  depth4Frame02: {
    height: 32,
    width: 358,
    paddingBottom: Padding.p_5xs,
  },
  email1: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth6Frame0: {
    width: 41,
    height: 24,
    overflow: "hidden",
  },
  depth5Frame01: {
    padding: Padding.p_base,
    backgroundColor: Color.colorAliceblue,
    height: 56,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  depth4Frame1: {
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  depth2Frame01: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  depth1Frame1: {
    height: 112,
    alignItems: "center",
  },
  depth6Frame01: {
    width: 74,
    height: 24,
    overflow: "hidden",
  },
  depth6Frame02: {
    width: 77,
    height: 24,
    overflow: "hidden",
  },
  addSocialProfiles: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame04: {
    width: 191,
    height: 28,
  },
  depth1Frame4: {
    height: 60,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
  },
  depth2Frame05: {
    width: 284,
    height: 28,
  },
  depth4Frame05: {
    width: 271,
    height: 24,
    overflow: "hidden",
  },
  youMustBe: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
  },
  depth4Frame13: {
    width: 271,
  },
  depth3Frame06: {
    width: 271,
    height: 45,
    justifyContent: "center",
  },
  depth2Frame06: {
    width: 281,
    height: 45,
    top: 14,
    left: 16,
  },
  depth5Frame06: {
    borderRadius: Border.br_base_5,
    height: 31,
    backgroundColor: Color.colorAliceblue,
  },
  depth4Frame06: {
    height: 31,
  },
  depth3Frame07: {
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  depth2Frame1: {
    top: 21,
    left: 323,
    height: 31,
    position: "absolute",
    width: 51,
  },
  depth1Frame12: {
    height: 72,
  },
  depth4Frame07: {
    width: 273,
    height: 24,
    overflow: "hidden",
  },
  depth4Frame14: {
    width: 273,
  },
  depth3Frame08: {
    width: 273,
    height: 45,
    justifyContent: "center",
  },
  depth2Frame07: {
    width: 282,
    height: 45,
    top: 14,
    left: 16,
  },
  depth2Frame08: {
    width: 209,
    height: 28,
  },
  iAmA: {
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray,
  },
  depth3Frame011: {
    width: 291,
    height: 24,
    overflow: "hidden",
  },
  depth3Frame11: {
    marginLeft: 16,
    height: 31,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  depth2Frame09: {
    top: 12,
    height: 31,
    width: 358,
  },
  depth1Frame15: {
    height: 56,
  },
  depth2Frame010: {
    width: 144,
    height: 28,
  },
  depth2Frame011: {
    width: 92,
    height: 28,
  },
  depth2Frame012: {
    width: 193,
    height: 28,
  },
  createAccount: {
    color: Color.colorWhitesmoke,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth3Frame015: {
    width: 125,
    height: 24,
  },
  depth2Frame013: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    width: 358,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
  },
  depth1Frame23: {
    height: 72,
  },
  depth1Frame24: {
    height: 20,
  },
  depth0Frame0: {
    height: 1648,
    overflow: "hidden",
  },
  galileoDesign: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default GalileoDesign;
