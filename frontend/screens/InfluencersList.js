import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import Depth1Frame11 from "../components/Depth1Frame11";
import Depth1Frame10 from "../components/Depth1Frame10";
import Depth1Frame from "../components/Depth1Frame";
import DropDown from "../shared/DropDown";
import { useNavigation } from '@react-navigation/native'
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";
const InfluencerIcon = require("../assets/depth-3-frame-0.png");
const BrandIcon = require("../assets/depth-3-frame-01.png")
const BothIcon = require("../assets/depth-3-frame-02.png")
const AllIcon = require("../assets/depth-3-frame-03.png")

const InfluencersList = () => {

  const navigation = useNavigation()

  const [searchValue, setSearchValue] = React.useState("")

  const [selected, setSelected] = React.useState([]);

  const [showFloatButton, setShowFloatButton] = React.useState(true)
  const [scrollOffset, setScrollOffset] = React.useState(0)

  const FakeData = [
    { key: "one", value: "One" },
    { key: "two", value: "Two" },
    { key: "three", value: "Three" },
    { key: "four", value: "Four" },
  ];

  function handleScroll(event) {
    const currentOffset = event.nativeEvent.contentOffset.y
    const direction = (currentOffset > 0 && currentOffset > scrollOffset) ? 'down' : 'up'
    const res = direction === 'up'
    if (res !== showFloatButton) {
      setShowFloatButton(res)
    }
    setScrollOffset(currentOffset)
  }

  return (
    <View style={[styles.depth0Frame0, styles.frameLayout1]}>
      <Depth1Frame11 style={styles.menuBar} onChange={setSearchValue} />
      <View style={{ width: "100%", height: "95%",paddingBottom:80 }}>
        <ScrollView onScroll={handleScroll} style={{ width: "100%", height: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.depth1Frame1}>
            <View style={{ height: "auto", display: "flex", flexDirection: "row", gap: 12, paddingEnd: 40, zIndex: 4 }}>
              <DropDown icon={InfluencerIcon} name={"Influencers"} items={FakeData} selectedValue={(value) => {
                console.log(value)
              }} />
              <DropDown icon={BrandIcon} name={"Brands"} items={FakeData} selectedValue={(value) => {
                console.log(value)
              }} />
              <DropDown icon={BothIcon} name={"Both"} items={FakeData} selectedValue={(value) => {
                console.log(value)
              }} />
              <DropDown icon={AllIcon} name={"All"} items={FakeData} selectedValue={(value) => {
                console.log(value)
              }} />
            </View>
          </ScrollView>
          <View style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "start" }}>
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
          </View>
          <View style={[styles.depth1Frame8, styles.depth1FrameLayout]}>
            <View style={styles.depth2Frame01}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.trending, styles.filtersTypo]}>
                  Trending
                </Text>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "start" }}>
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
          </View>
        </ScrollView>
        <View style={[styles.depth1Frame16, styles.depth1FrameLayout, { opacity: showFloatButton ? 1 : 0.4 }]}>
          <Pressable onPress={() => { navigation.navigate("FilterUI") }} onHoverIn={() => { setShowFloatButton(true) }} onHoverOut={() => { setShowFloatButton(false) }} style={[styles.depth2Frame02, styles.frameLayout]}>
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
          </Pressable>
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
        propFontFamily="BeVietnamPro-Medium"
        propColor="#121217"
        propFontFamily1="BeVietnamPro-Medium"
        propColor1="#637087"
        propFontFamily2="BeVietnamPro-Medium"
        propColor2="#637087"
        propFontFamily3="BeVietnamPro-Medium"
        propColor3="#637087"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
  },
  frameLayout1: {
    width: "100%",
    backgroundColor: Color.colorWhite,
    height: "100%"
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
    height: "auto",
    flexDirection: "row",
    width: "auto",
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
    height: "auto",
    padding: Padding.p_xs,
    zIndex: 4,
    overflow: "visible"
  },
  trending: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    color: Color.colorGray_500,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame01: {
    width: 'auto',
    height: 30,
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
    width: 'auto',
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
    width: "auto",
    justifyContent: "flex-end",
    overflow: "hidden",
    position: "absoulte",
    bottom: 70,
    right: 40,
    zIndex:2
  },
  depth1Frame18: {
    height: 20,
  },
  depth0Frame0: {
    width: "100%",
    height: "100%"
  },
  influencerslist: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: Color.colorWhite,
  },
  menuBar: {
    position: "static",
    top: 0,
    zIndex: 5
  }
});

export default InfluencersList;
