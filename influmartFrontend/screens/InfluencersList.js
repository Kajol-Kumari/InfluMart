import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Depth1Frame11 from "../components/Depth1Frame11";
import Depth1Frame10 from "../components/Depth1Frame10";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const InfluencersList = () => {
  return (
    <View style={styles.influencerslist}>
      <View style={[styles.depth0Frame0, styles.frameLayout1]}>
        <Depth1Frame11 />
        <View style={styles.depth1Frame1}>
          <View style={styles.depth2Frame0}>
            <Image
              style={[styles.depth3Frame0, styles.depth3FrameLayout1]}
              contentFit="cover"
              source={require("../assets/depth-3-frame-0.png")}
            />
            <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.influencers}>Influencers</Text>
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
                <Text style={styles.influencers}>Brands</Text>
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
                <Text style={styles.influencers}>Both</Text>
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
                <Text style={styles.influencers}>All</Text>
              </View>
            </View>
            <Image
              style={[styles.depth3Frame2, styles.depth3FrameLayout1]}
              contentFit="cover"
              source={require("../assets/depth-3-frame-23.png")}
            />
          </View>
        </View>
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-06.png")}
          kylieCosmetics="Kylie Cosmetics"
          beauty="Beauty"
        />
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-07.png")}
          kylieCosmetics="Huda Beauty"
          beauty="Beauty"
        />
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-08.png")}
          kylieCosmetics="Revolve"
          beauty="Fashion"
        />
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-09.png")}
          kylieCosmetics="Jen Atkin"
          beauty="Hair"
        />
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-010.png")}
          kylieCosmetics="Glossier"
          beauty="Beauty"
        />
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-011.png")}
          kylieCosmetics="Loreal"
          beauty="Beauty"
        />
        <View style={[styles.depth1Frame8, styles.depth1FrameLayout]}>
          <View style={styles.depth2Frame01}>
            <View style={styles.depth4Frame0}>
              <Text style={[styles.trending, styles.filtersTypo]}>
                Trending
              </Text>
            </View>
          </View>
        </View>
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-012.png")}
          kylieCosmetics="Gymshark"
          beauty="Fitness"
        />
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-013.png")}
          kylieCosmetics="Lululemon"
          beauty="Fitness"
        />
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-014.png")}
          kylieCosmetics="Nike"
          beauty="Sports"
        />
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-015.png")}
          kylieCosmetics="Adidas"
          beauty="Sports"
        />
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-016.png")}
          kylieCosmetics="Puma"
          beauty="Sports"
        />
        <Depth1Frame10
          depth5Frame0={require("../assets/depth-5-frame-017.png")}
          kylieCosmetics="Under Armour"
          beauty="Fitness"
        />
        <View style={[styles.depth1Frame16, styles.depth1FrameLayout]}>
          <View style={[styles.depth2Frame02, styles.frameLayout]}>
            <View style={[styles.depth3Frame05, styles.frameLayout]}>
              <Image
                style={styles.depth4Frame04}
                contentFit="cover"
                source={require("../assets/depth-4-frame-015.png")}
              />
              <View style={[styles.depth4Frame1, styles.depth3FrameLayout]}>
                <View style={styles.depth4Frame0}>
                  <Text style={[styles.filters, styles.filtersTypo]}>
                    Filters
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Depth1Frame
          depth5Frame0={require("../assets/depth-5-frame-01.png")}
          depth5Frame01={require("../assets/depth-5-frame-018.png")}
          search="Campaigns"
          depth5Frame02={require("../assets/depth-5-frame-019.png")}
          myBrands="Messages"
          depth5Frame03={require("../assets/depth-5-frame-020.png")}
          propBorderColor="#f0f2f5"
          propWidth={84}
          propWidth1={35}
          propFontFamily="BeVietnamPro-Medium"
          propColor="#121217"
          propWidth2={84}
          propWidth3={69}
          propFontFamily1="BeVietnamPro-Medium"
          propColor1="#637087"
          propWidth4={84}
          propWidth5={60}
          propFontFamily2="BeVietnamPro-Medium"
          propColor2="#637087"
          propWidth6={84}
          propWidth7={40}
          propFontFamily3="BeVietnamPro-Medium"
          propColor3="#637087"
        />
        <View style={[styles.depth1Frame18, styles.frameLayout1]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  depth3FrameLayout1: {
    width: 20,
    height: 20,
  },
  depth3FrameLayout: {
    height: 21,
    marginLeft: 8,
  },
  depth2FrameSpaceBlock: {
    marginLeft: 12,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  depth1FrameLayout: {
    height: 60,
    flexDirection: "row",
    width: 390,
  },
  filtersTypo: {
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  frameLayout: {
    height: 40,
    width: 103,
    flexDirection: "row",
    overflow: "hidden",
  },
  depth3Frame0: {
    height: 20,
  },
  influencers: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    textAlign: "left",
    color: Color.colorGray_500,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
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
    height: 32,
    backgroundColor: Color.colorWhitesmoke_300,
    justifyContent: "center",
    alignItems: "center",
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
    flexDirection: "row",
    overflow: "hidden",
    width: 390,
  },
  trending: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    color: Color.colorGray_500,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame01: {
    width: 96,
    height: 28,
  },
  depth1Frame8: {
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
  },
  depth4Frame04: {
    width: 24,
    height: 24,
  },
  filters: {
    color: Color.colorWhite,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  depth4Frame1: {
    width: 47,
    marginLeft: 8,
    overflow: "hidden",
  },
  depth3Frame05: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorRoyalblue,
    paddingLeft: Padding.p_5xs,
    paddingRight: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xs,
    height: 40,
    width: 103,
  },
  depth2Frame02: {
    justifyContent: "flex-end",
  },
  depth1Frame16: {
    paddingHorizontal: 28,
    paddingBottom: Padding.p_xl,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  depth1Frame18: {
    height: 20,
  },
  depth0Frame0: {
    height: 4133,
    overflow: "hidden",
  },
  influencerslist: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default InfluencersList;
