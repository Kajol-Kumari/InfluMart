import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView ,TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";
import CustomSlider from "../shared/CustomSlider";
import DropDown from "../shared/DropDown";

const FiltersUI = () => {
  const navigation = useNavigation()
  const [selectedAges, setSelectedAges] = React.useState({})
  const [selectedFollowersCount, setSelectedFollowersCount] = React.useState({})
  const [selectedPostCount, setSelectedPostCount] = React.useState({})
  const [selectedLocation, setSelectedLocation] = React.useState("India")

  const locationData = [
    {
      key: "india",
      value: "India"
    },
    {
      key: "pakistan",
      value: "Pakistan"
    },
    {
      key: "srilanka",
      value: "Srilanka"
    }
  ]

  return (
    <ScrollView style={{ backgroundColor: Color.colorWhite }}>
      <View style={[styles.filtersui, styles.filtersuiLayout]}>
        <View style={styles.depth0Frame0}>
          <View style={styles.depth1Frame0}>
            <View style={[styles.depth2Frame0]}>
              <View style={styles.depth3Frame0}>
                <Text style={[styles.filter, styles.ageFlexBox]}>Filter</Text>
              </View>
              <Pressable onPress={() => { navigation.navigate("InfluencersList") }} style={{ width: "auto", height: 24 }}>
                <Image
                  style={styles.depth5Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-4-frame-08.png")}
                />
              </Pressable>
            </View>
            <View style={styles.depth2FrameSpaceBlock1}>
              <Text style={[styles.filter, styles.ageFlexBox]}>Followers</Text>
            </View>
            <View style={styles.depth1Frame0}>
              <View style={styles.depth3Frame01}>
                <View style={styles.depth1Frame0}>
                  <Text style={[styles.age, styles.ageLayout]}>Age</Text>
                </View>
                <View style={styles.depth4Frame1}>
                  <View style={[styles.depth5Frame01, styles.frameLayout]}>
                    <CustomSlider minValue={20} maxValue={35} selectedValues={setSelectedAges} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.depth1Frame0}>
              <View style={styles.depth3Frame01}>
                <View style={styles.depth1Frame0}>
                  <Text style={[styles.age, styles.ageLayout]}>
                    Followers Count
                  </Text>
                </View>
                <View style={styles.depth4Frame1}>
                  <View style={[styles.depth5Frame01, styles.frameLayout]}>
                    <CustomSlider minValue={1000} maxValue={50000} selectedValues={setSelectedFollowersCount} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.depth2FrameSpaceBlock1}>
              <Text style={[styles.filter, styles.ageFlexBox]}>Likes</Text>
            </View>
            <View style={styles.depth1Frame0}>
              <View style={styles.depth3Frame01}>
                <View style={styles.depth1Frame0}>
                  <Text style={[styles.age, styles.ageLayout]}>Post Count</Text>
                </View>
                <View style={styles.depth4Frame1}>
                  <View style={[styles.depth5Frame01, styles.frameLayout]}>
                    <CustomSlider minValue={100} maxValue={2000} selectedValues={setSelectedPostCount} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.depth2FrameSpaceBlock1}>
              <Text style={[styles.filter, styles.ageFlexBox]}>Location</Text>
            </View>
            <View style={{paddingHorizontal:Padding.p_base,paddingVertical:8}}>
              <View>
                <DropDown
                  name={selectedLocation}
                  items={locationData}
                  dropDownOptionStyle={{
                    width: "100%",
                    paddingVertical: 16,
                    backgroundColor:"#fff",
                    borderWidth:2,
                    borderColor:"#DBE0E5"
                  }}
                  dropDownContainerStyle={{ width: "100%" }}
                  dropDownItemsStyle={{ width: "100%",position:"absolute",top:-120,zIndex:1000,height:160,overflow:"scroll"}}
                  titleStyle={{ paddingStart: 12, color: "#4F7A94" }}
                  selectedValue={setSelectedLocation}
                />
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame0}>
            <View style={[styles.depth2Frame01, styles.depth2FrameSpaceBlock]}>
              <TouchableOpacity onPress={()=>{navigation.navigate("InfluencersList")}} style={[styles.depth3Frame05, styles.frameFlexBox]}>
                <View style={styles.depth4Frame05}>
                  <Text
                    style={[styles.applyFilters, styles.ageLayout]}
                    numberOfLines={1}
                  >
                    Apply Filters
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.depth2Frame11} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  filtersuiLayout: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  depth2FrameSpaceBlock1: {
    width: "100%",
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  ageFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
    width: "auto"
  },
  frameFlexBox: {
    justifyContent: "center",
    height: 48,
    maxWidth: "auto",
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  ageLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  frameLayout: {
    height: "auto",
    borderRadius: Border.br_11xs,
    flex: 1,
  },
  depth2FrameSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  vector0Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  filter: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  depth3Frame0: {
    flex: 1,
  },
  depth5Frame0: {
    width: 24,
    height: 24,
    overflow: "hidden",
    flex: 1,
    marginEnd: 8
  },
  depth4Frame0: {
    width: "auto",
    maxWidth: 480,
  },
  depth3Frame1: {
    width: 48,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  depth2Frame0: {
    width: "100%",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 40,
    paddingBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Color.colorWhite,
  },
  age: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    textAlign: "left",
    color: Color.colorGray,
    alignSelf: "stretch",
  },
  depth1Frame0: {
    width: "100%",
    alignSelf: "stretch"
  },
  depth6Frame1: {
    backgroundColor: Color.colorGray,
  },
  depth5Frame01: {
    backgroundColor: Color.colorGainsboro,
    paddingLeft: Padding.p_196xl,
    paddingRight: Padding.p_35xl,
    flexDirection: "row",
  },
  depth4Frame1: {
    height: 38,
    paddingTop: Padding.p_7xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth3Frame01: {
    width: "auto",
    padding: Padding.p_base,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flex: 1,
    marginBottom: Padding.p_xs
  },
  vector0: {
    width: 24,
    height: 24,
  },
  selectA: {
    fontFamily: FontFamily.beVietnamProRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray,
  },
  depth4Frame04: {
    width: "100%",
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    height: 56,
    borderRadius: Border.br_xs,
    overflow: "hidden",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Padding.p_base
  },
  depth3Frame04: {
    minWidth: 160,
    flex: 1,
  },
  depth2Frame7: {
    flexWrap: "wrap",
    alignItems: "flex-end",
    width: "100%",
    flex: 1,
  },
  applyFilters: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  depth4Frame05: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth3Frame05: {
    backgroundColor: "#1a80e6",
    paddingHorizontal: 20,
    paddingVertical: 0,
    minWidth: 84,
    maxWidth: 480,
    flex: 1,
    zIndex:6,
    marginTop:32
  },
  depth2Frame01: {
    alignSelf: "stretch",
  },
  depth2Frame11: {
    height: 20,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  depth0Frame0: {
    minHeight: "100%",
    justifyContent: "space-between",
    overflow: "hidden",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    width: "100%"
  },
  filtersui: {
    backgroundColor: Color.colorWhite,
  },
});

export default FiltersUI;
