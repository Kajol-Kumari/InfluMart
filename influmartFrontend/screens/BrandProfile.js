import * as React from "react";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet, View, Text , ScrollView, TouchableOpacity} from "react-native";
import { Color, Padding, FontFamily, Border, FontSize } from "../GlobalStyles";

const BrandProfile = () => {
    const navigation = useNavigation();

  return (
    <ScrollView style={styles.galileoDesign}>

    <View style={styles.galileoDesign}>
      <View style={[styles.depth0Frame0, styles.frameBg2]}>
      <TouchableOpacity onPress={() => navigation.navigate('LoginPageBrands')}>

        <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame0}>

            <View style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/depth-4-frame-Backarrow3x.png")}
              />

            </View>
            <View style={styles.depth3Frame1}>
              <View style={styles.depth4Frame01}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.brandProfile, styles.nikeTypo]}>
                     Profile
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame2, styles.depth3FrameLayout]}>
              <View style={[styles.depth4Frame02, styles.depth3FrameLayout]} />
            </View>
          </View>
        </View>
        </TouchableOpacity>

         <View style={styles.depth1Frame1}>
          <View style={styles.depth2Frame01}>
            <View style={styles.depth3Frame01}>
              <View style={styles.frameLayout}>
                <Image
                  style={[styles.depth5Frame01, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/brandDp.png")}
                />
              </View>
              <View style={styles.depth4Frame1}>
                <View style={styles.depth5Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.nike, styles.nikeTypo]}>Nike</Text>
                  </View>
                </View>
                <View style={styles.depth5Frame1}>
                  <View style={styles.depth5Frame0}>
                    <Text
                      style={[styles.apparelFashion, styles.apparelFashionClr]}
                    >{`Apparel & Fashion, 10M followers`}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.depth3Frame11}>
              <View style={styles.depth4FrameLayout}>
                <View style={[styles.depth5Frame03, styles.depth5FrameLayout]}>
                  <View style={[styles.depth6Frame02, styles.frameBg1]}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.follow, styles.followTypo]}>
                        Follow
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.depth4Frame11, styles.depth4FrameLayout]}>
                <View style={[styles.depth5Frame04, styles.frameBg]}>
                  <View style={[styles.depth6Frame03, styles.frameBg]}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.message, styles.followTypo]}>
                        Message
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame02}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.nike, styles.nikeTypo]}>
                Campaign Insights
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame3, styles.frameBg2]}>
          <View style={[styles.depth2Frame03, styles.depth2FramePosition]}>
            <View style={[styles.depth3Frame03, styles.depth3FrameFlexBox]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/growth.png")}
              />
            </View>
            <View style={styles.depth3Frame12}>
              <View style={styles.depth4Frame06}>
                <View style={styles.depth5Frame0}>
                  <Text
                    style={[styles.engagementRate, styles.apparelFashionTypo]}
                  >
                    Engagement Rate
                  </Text>
                </View>
              </View>
              <View style={styles.depth4Frame12}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.higherThanAverage, styles.followTypo]}>
                    Higher than average
                  </Text>
                </View>
              </View>
              <View style={styles.depth4Frame12}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.higherThanAverage, styles.followTypo]}>
                    6.3%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame3, styles.frameBg2]}>
          <View style={[styles.depth2Frame03, styles.depth2FramePosition]}>
            <View style={[styles.depth3Frame03, styles.depth3FrameFlexBox]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/growth.png")}
              />
            </View>
            <View style={styles.depth3Frame12}>
              <View style={styles.depth4Frame06}>
                <View style={styles.depth5Frame0}>
                  <Text
                    style={[styles.engagementRate, styles.apparelFashionTypo]}
                  >
                    Post Frequency
                  </Text>
                </View>
              </View>
              <View style={styles.depth4Frame12}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.higherThanAverage, styles.followTypo]}>
                    Average
                  </Text>
                </View>
              </View>
              <View style={styles.depth4Frame12}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.higherThanAverage, styles.followTypo]}>
                    5 posts per week
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame3, styles.frameBg2]}>
          <View style={[styles.depth2Frame03, styles.depth2FramePosition]}>
            <View style={[styles.depth3Frame03, styles.depth3FrameFlexBox]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/growth.png")}
              />
            </View>
            <View style={styles.depth3Frame12}>
              <View style={styles.depth4Frame06}>
                <View style={styles.depth5Frame0}>
                  <Text
                    style={[styles.engagementRate, styles.apparelFashionTypo]}
                  >
                    Follower Growth
                  </Text>
                </View>
              </View>
              <View style={styles.depth4Frame12}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.higherThanAverage, styles.followTypo]}>
                    Higher than average
                  </Text>
                </View>
              </View>
              <View style={styles.depth4Frame12}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.higherThanAverage, styles.followTypo]}>
                    7.5%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame06}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.nike, styles.nikeTypo]}>
                Collaboration Requirements
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame7, styles.depth1FrameLayout]}>
          <View style={[styles.depth2Frame07, styles.depth2FramePosition]}>
            <View style={[styles.depth3Frame03, styles.depth3FrameFlexBox]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/Mini-follower.png")}
              />
            </View>
            <View style={styles.depth3Frame15}>
              <View style={styles.depth4Frame06}>
                <View style={styles.depth5Frame0}>
                  <Text
                    style={[styles.engagementRate, styles.apparelFashionTypo]}
                  >
                    Minimum Followers
                  </Text>
                </View>
              </View>
              <View style={styles.depth4Frame12}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.higherThanAverage, styles.followTypo]}>
                    100k
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame7, styles.depth1FrameLayout]}>
          <View style={[styles.depth2Frame07, styles.depth2FramePosition]}>
            <View style={[styles.depth3Frame03, styles.depth3FrameFlexBox]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/likes.png")}
              />
            </View>
            <View style={styles.depth3Frame15}>
              <View style={styles.depth4Frame06}>
                <View style={styles.depth5Frame0}>
                  <Text
                    style={[styles.engagementRate, styles.apparelFashionTypo]}
                  >
                    Average Likes
                  </Text>
                </View>
              </View>
              <View style={styles.depth4Frame12}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.higherThanAverage, styles.followTypo]}>
                    10k
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame7, styles.depth1FrameLayout]}>
          <View style={[styles.depth2Frame07, styles.depth2FramePosition]}>
            <View style={[styles.depth3Frame03, styles.depth3FrameFlexBox]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/post-frequency.png")}
              />
            </View>
            <View style={styles.depth3Frame15}>
              <View style={styles.depth4Frame06}>
                <View style={styles.depth5Frame0}>
                  <Text
                    style={[styles.engagementRate, styles.apparelFashionTypo]}
                  >
                    Post Frequency
                  </Text>
                </View>
              </View>
              <View style={styles.depth4Frame12}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.higherThanAverage, styles.followTypo]}>
                    At least once a week
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame010}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.nike, styles.nikeTypo]}>
                Collaboration Count
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame11, styles.frameBg2]}>
          <View style={[styles.depth2Frame011, styles.depth2FramePosition]}>
            <View style={[styles.depth3Frame011, styles.depth3FrameFlexBox]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/collab_count.png")}
              />
            </View>
            <View style={styles.depth3Frame18}>
              <View style={styles.depth5Frame0}>
                <Text style={styles.text2}>9</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame12, styles.frameBg2]} />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameBg2: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 390,
  },
  depth1FrameSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth3FrameLayout: {
    width: 48,
    height: 48,
  },
  nikeTypo: {
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  frameLayout: {
    height: 128,
    width: 128,
  },
  apparelFashionClr: {
    color: Color.colorSteelblue_200,
    fontFamily: FontFamily.interRegular,
  },
  depth5FrameLayout: {
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    width: 173,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  frameBg1: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  followTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  depth4FrameLayout: {
    width: 173,
    height: 40,
  },
  frameBg: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  depth2FramePosition: {
    left: 16,
    position: "absolute",
    flexDirection: "row",
    width: 358,
  },
  depth3FrameFlexBox: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorAliceblue,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  apparelFashionTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  depth1FrameLayout: {
    height: 72,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    alignItems: "center",
    flexDirection: "row",
  },
  brandProfile: {
    fontSize: 18,
    lineHeight: 23,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: 'auto',
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
  depth4Frame02: {
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
    paddingTop: Padding.p_base,
    paddingBottom: 8,
    height: 72,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth5Frame01: {
    borderRadius: 64,
    overflow: "hidden",
  },
  nike: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
  },
  depth5Frame02: {
    height: 'auto',
    width: 'auto',
  },
  apparelFashion: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  depth5Frame1: {
    width: 400,
    height: 'auto',
  },
  depth4Frame1: {
    height: 52,
    marginTop: 16,
    width: 'auto',
    justifyContent: "center",
  },
  depth3Frame01: {
    height: 196,
    width: 250,
  },
  follow: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  depth6Frame02: {
    width: 'auto',
    height: 21,
  },
  depth5Frame03: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  message: {
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  depth6Frame03: {
    width: 'auto',
    height: 21,
  },
  depth5Frame04: {
    paddingVertical: 0,
    borderRadius: Border.br_xs,
    width: 173,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  depth4Frame11: {
    marginLeft: 12,
  },
  depth3Frame11: {
    height: 40,
    marginTop: 16,
    flexDirection: "row",
    width: 358,
  },
  depth2Frame01: {
    height: 252,
    width: 358,
  },
  depth1Frame1: {
    height: 284,
    padding: Padding.p_base,
    flexDirection: "row",
    width: 390,
  },
  depth2Frame02: {
    width: 'auto',
    height: 30,
  },
  depth1Frame2: {
    height: 60,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
  },
  depth3Frame03: {
    width: 48,
    height: 48,
  },
  engagementRate: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
  },
  depth4Frame06: {
    width: 'auto',
    height: 24,
  },
  higherThanAverage: {
    color: Color.colorSteelblue_200,
    fontFamily: FontFamily.interRegular,
  },
  depth4Frame12: {
    width: 'auto',
    height: 21,
  },
  depth3Frame12: {
    marginLeft: 16,
    width: 294,
    height: 66,
    justifyContent: "center",
  },
  depth2Frame03: {
    height: 66,
    top: 12,
    left: 16,
    position: "absolute",
  },
  depth1Frame3: {
    height: 90,
    width: 390,
  },
  depth2Frame06: {
    width: 'auto',
    height: 'auto',
  },
  depth3Frame15: {
    height: 45,
    marginLeft: 16,
    width: 294,
    justifyContent: "center",
  },
  depth2Frame07: {
    top: 12,
    left: 16,
    position: "absolute",
    height: 48,
  },
  depth1Frame7: {
    width: 390,
  },
  depth2Frame010: {
    width: 'auto',
    height: 28,
  },
  depth3Frame011: {
    width: 40,
    height: 40,
  },
  text2: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray,
  },
  depth3Frame18: {
    width: 302,
    marginLeft: 16,
    height: 24,
    overflow: "hidden",
  },
  depth2Frame011: {
    top: 8,
    left: 16,
    position: "absolute",
    height: 40,
    alignItems: "center",
  },
  depth1Frame11: {
    height: 56,
    width: 390,
  },
  depth1Frame12: {
    height: 20,
    width: 390,
  },
  depth0Frame0: {
    height: 1096,
    overflow: "hidden",
    width: 390,
  },
  galileoDesign: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default BrandProfile;
