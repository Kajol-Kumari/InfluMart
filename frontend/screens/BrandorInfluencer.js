import * as React from "react";
import { StyleSheet, View, Text , TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Color, Padding, FontFamily, Border, FontSize } from "../GlobalStyles";

const BrandorInfluencer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.brandorinfluencer}>
      <View style={[styles.depth0Frame0, styles.frameLayout]}>
      <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>

        <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock1]}>
          <View style={styles.depth2Frame0}>
            <View style={[styles.depth3Frame0, styles.depth3FrameLayout1]} />
            <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
              <View style={styles.depth4Frame0}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.joinTheFun, styles.brandTypo]}>
                    Join the Community
                  </Text>
                </View>
              </View>
            </View>
          
            <View style={[styles.depth3Frame2, styles.depth3FrameLayout1]}>
              <View style={[styles.depth4Frame01, styles.depth3FrameLayout1]} />
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <Text style={styles.areYouA}>
              Are you a brand or an influencer?
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.frameFlexBox]}>
          <View style={styles.depth2Frame02}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPageBrands')}>

            <View style={styles.depth3FrameLayout}>
              <View style={[styles.depth4Frame02, styles.depth4FrameLayout]}>
                <View style={[styles.depth5Frame01, styles.frameBg1]}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.brand, styles.brandLayout]}>
                      Brand
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <View style={[styles.depth3Frame11, styles.depth3FrameLayout]}>
              <View style={[styles.depth4Frame03, styles.frameBg]}>
                <View style={[styles.depth5Frame02, styles.frameBg]}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.influencer, styles.brandLayout]}>
                      Influencer
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            </TouchableOpacity>

          </View>
        </View>
        <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame01}>
            <Text style={[styles.byJoiningYou, styles.brandLayout]}>
              By joining, you agree to our Terms of Use and Privacy Policy
            </Text>
          </View>
        </View>
        <View style={[styles.depth1Frame4, styles.frameLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth1FrameSpaceBlock1: {
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth3FrameLayout1: {
    width: 48,
    height: 48,
  },
  frameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  brandTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_xs,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth4FrameLayout: {
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
    paddingHorizontal: Padding.p_base,
  },
  frameBg1: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  brandLayout: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  depth3FrameLayout: {
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    width: 358,
  },
  frameBg: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  depth3Frame0: {
    alignItems: "center",
  },
  joinTheFun: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.colorGray_400,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 'auto',
    height: 23,
    overflow: "hidden",
  },
  depth3Frame1: {
    width: 262,
    height: 23,
    alignItems: "center",
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
    height: 48,
    width: 358,
  },
  depth1Frame0: {
    height: 72,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_base,
  },
  areYouA: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    textAlign: "center",
    color: Color.colorGray_400,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth1Frame1: {
    height: 'auto',
    paddingTop: Padding.p_xl,
  },
  brand: {
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth5Frame01: {
    width: 'auto',
    height: 21,
  },
  depth4Frame02: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  influencer: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    color: Color.colorGray_400,
  },
  depth5Frame02: {
    width: 'auto',
    height: 21,
  },
  depth4Frame03: {
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
    paddingHorizontal: Padding.p_base,
  },
  depth3Frame11: {
    marginTop: 12,
  },
  depth2Frame02: {
    height: 92,
    alignItems: "center",
    width: 358,
  },
  depth1Frame2: {
    height: 116,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  byJoiningYou: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorSteelblue_200,
    textAlign: "center",
  },
  depth1Frame3: {
    height: 'auto',
    paddingTop: Padding.p_9xs,
  },
  depth1Frame4: {
    height: 20,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
  },
  brandorinfluencer: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default BrandorInfluencer;
