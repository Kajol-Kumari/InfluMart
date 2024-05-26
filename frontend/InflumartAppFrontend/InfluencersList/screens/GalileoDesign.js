import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Depth1Frame3 from "../components/Depth1Frame3";
import Depth1Frame2 from "../components/Depth1Frame2";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={[styles.depth0Frame0, styles.frameLayout]}>
        <Depth1Frame3 />
        <View style={[styles.depth1Frame1, styles.depth1FrameFlexBox]}>
          <View style={styles.depth2Frame0}>
            <Image
              style={[styles.depth3Frame0, styles.depth3FrameLayout1]}
              contentFit="cover"
              source={require("../assets/depth-3-frame-0.png")}
            />
            <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.influencers, styles.trendingFlexBox]}>
                  Influencers
                </Text>
              </View>
            </View>
            <Image
              style={[styles.depth3Frame2, styles.depth3FrameLayout1]}
              contentFit="cover"
              source={require("../assets/depth-3-frame-2.png")}
            />
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
            <Image
              style={[styles.depth3Frame0, styles.depth3FrameLayout1]}
              contentFit="cover"
              source={require("../assets/depth-3-frame-01.png")}
            />
            <View style={[styles.depth3Frame11, styles.depth3FrameLayout]}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.influencers, styles.trendingFlexBox]}>
                  Brands
                </Text>
              </View>
            </View>
            <Image
              style={[styles.depth3Frame2, styles.depth3FrameLayout1]}
              contentFit="cover"
              source={require("../assets/depth-3-frame-21.png")}
            />
          </View>
          <View style={[styles.depth2Frame2, styles.depth2FrameSpaceBlock]}>
            <Image
              style={[styles.depth3Frame0, styles.depth3FrameLayout1]}
              contentFit="cover"
              source={require("../assets/depth-3-frame-02.png")}
            />
            <View style={[styles.depth3Frame12, styles.depth3FrameLayout]}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.influencers, styles.trendingFlexBox]}>
                  Both
                </Text>
              </View>
            </View>
            <Image
              style={[styles.depth3Frame2, styles.depth3FrameLayout1]}
              contentFit="cover"
              source={require("../assets/depth-3-frame-22.png")}
            />
          </View>
          <View style={[styles.depth2Frame3, styles.depth2FrameSpaceBlock]}>
            <Image
              style={[styles.depth3Frame0, styles.depth3FrameLayout1]}
              contentFit="cover"
              source={require("../assets/depth-3-frame-03.png")}
            />
            <View style={[styles.depth3Frame13, styles.depth3FrameLayout]}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.influencers, styles.trendingFlexBox]}>
                  All
                </Text>
              </View>
            </View>
            <Image
              style={[styles.depth3Frame2, styles.depth3FrameLayout1]}
              contentFit="cover"
              source={require("../assets/depth-3-frame-23.png")}
            />
          </View>
        </View>
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-01.png")}
          kylieCosmetics="Kylie Cosmetics"
          beauty="Beauty"
        />
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-02.png")}
          kylieCosmetics="Huda Beauty"
          beauty="Beauty"
        />
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-03.png")}
          kylieCosmetics="Revolve"
          beauty="Fashion"
        />
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-04.png")}
          kylieCosmetics="Jen Atkin"
          beauty="Hair"
        />
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-05.png")}
          kylieCosmetics="Glossier"
          beauty="Beauty"
        />
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-06.png")}
          kylieCosmetics="Loreal"
          beauty="Beauty"
        />
        <View style={[styles.depth1Frame8, styles.depth1FrameFlexBox]}>
          <View style={styles.depth2Frame01}>
            <View style={styles.depth4Frame0}>
              <Text style={[styles.trending, styles.trendingFlexBox]}>
                Trending
              </Text>
            </View>
          </View>
        </View>
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-07.png")}
          kylieCosmetics="Gymshark"
          beauty="Fitness"
        />
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-08.png")}
          kylieCosmetics="Lululemon"
          beauty="Fitness"
        />
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-09.png")}
          kylieCosmetics="Nike"
          beauty="Sports"
        />
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-010.png")}
          kylieCosmetics="Adidas"
          beauty="Sports"
        />
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-011.png")}
          kylieCosmetics="Puma"
          beauty="Sports"
        />
        <Depth1Frame2
          depth5Frame0={require("../assets/depth-5-frame-012.png")}
          kylieCosmetics="Under Armour"
          beauty="Fitness"
        />
        <Depth1Frame1 />
        <Depth1Frame />
        <View style={[styles.depth1Frame18, styles.frameLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  depth1FrameFlexBox: {
    flexDirection: "row",
    width: 390,
  },
  depth3FrameLayout1: {
    width: 20,
    height: 20,
  },
  depth3FrameLayout: {
    height: 21,
    marginLeft: 8,
  },
  trendingFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  depth2FrameSpaceBlock: {
    marginLeft: 12,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  depth3Frame0: {
    height: 20,
  },
  influencers: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
  },
  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth3Frame1: {
    width: 76,
    marginLeft: 8,
  },
  depth3Frame2: {
    marginLeft: 8,
    height: 20,
  },
  depth2Frame0: {
    width: 148,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  depth3Frame11: {
    width: 48,
    marginLeft: 8,
  },
  depth2Frame1: {
    width: 120,
  },
  depth3Frame12: {
    width: 33,
    marginLeft: 8,
  },
  depth2Frame2: {
    width: 105,
  },
  depth3Frame13: {
    width: 18,
    marginLeft: 8,
  },
  depth2Frame3: {
    width: 90,
  },
  depth1Frame1: {
    height: 56,
    padding: Padding.p_xs,
    overflow: "hidden",
  },
  trending: {
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
  },
  depth2Frame01: {
    width: 96,
    height: 28,
  },
  depth1Frame8: {
    height: 60,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
  },
  depth1Frame18: {
    height: 20,
  },
  depth0Frame0: {
    height: 4133,
    overflow: "hidden",
  },
  galileoDesign: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GalileoDesign;
