import * as React from "react";
import { Text, StyleSheet, View, Pressable,ScrollView } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const FiltersUI = () => {
  const navigation=useNavigation()
  return (
    <ScrollView style={{backgroundColor:Color.colorWhite}}>
      <View style={[styles.filtersui, styles.filtersuiLayout]}>
        <View style={styles.depth0Frame0}>
          <View style={styles.depth1Frame0}>
            <View style={[styles.depth2Frame0]}>
              <View style={styles.depth3Frame0}>
                <Text style={[styles.filter, styles.ageFlexBox]}>Filter</Text>
              </View>
              <Pressable onPress={()=>{navigation.navigate("InfluencersList")}} style={{ width: "auto", height: 24 }}>
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
                    <View style={[styles.depth6Frame1, styles.frameLayout]} />
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
                    <View style={[styles.depth6Frame1, styles.frameLayout]} />
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
                    <View style={[styles.depth6Frame1, styles.frameLayout]} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.depth2FrameSpaceBlock1}>
              <Text style={[styles.filter, styles.ageFlexBox]}>Location</Text>
            </View>
            <View style={[styles.depth2Frame7, styles.depth2FrameSpaceBlock]}>
              <View style={styles.depth4Frame04}>
                <Text style={[styles.selectA]}>
                  Select a country
                </Text>
                <Image
                  style={[styles.vector0]}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-21.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame0}>
            <View style={[styles.depth2Frame01, styles.depth2FrameSpaceBlock]}>
              <View style={[styles.depth3Frame05, styles.frameFlexBox]}>
                <View style={styles.depth4Frame05}>
                  <Text
                    style={[styles.applyFilters, styles.ageLayout]}
                    numberOfLines={1}
                  >
                    Apply Filters
                  </Text>
                </View>
              </View>
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
    height: 4,
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
    alignSelf: "stretch",
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
