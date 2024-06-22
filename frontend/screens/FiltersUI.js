import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const FiltersUI = () => {
  return (
    <View style={[styles.filtersui, styles.filtersuiLayout]}>
      <View style={styles.depth0Frame0}>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.depth2FrameSpaceBlock1]}>
            <View style={styles.depth3Frame0}>
              <Text style={[styles.filter, styles.ageFlexBox]}>Filter</Text>
            </View>
            <View style={styles.depth3Frame1}>
              <View style={[styles.depth4Frame0, styles.frameFlexBox]}>
                <Image
                  style={styles.depth5Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-5-frame-0.png")}
                />
              </View>
            </View>
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
            <View style={styles.depth3Frame04}>
              <View style={styles.depth4Frame04}>
                <Image
                  style={[styles.vector0, styles.vector0Position]}
                  contentFit="cover"
                  source={require("../assets/vector--0.png")}
                />
                <Text style={[styles.selectA, styles.vector0Position]}>
                  Select a country
                </Text>
              </View>
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
  );
};

const styles = StyleSheet.create({
  filtersuiLayout: {
    width: "100%",
    flex: 1,
  },
  depth2FrameSpaceBlock1: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  ageFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  frameFlexBox: {
    justifyContent: "center",
    height: 48,
    maxWidth: 480,
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
    maxWidth: "100%",
    height: 24,
    overflow: "hidden",
    flex: 1,
  },
  depth4Frame0: {
    maxWidth: 480,
  },
  depth3Frame1: {
    width: 48,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  depth2Frame0: {
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
    padding: Padding.p_base,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flex: 1,
  },
  vector0: {
    width: 358,
    height: 56,
  },
  selectA: {
    fontFamily: FontFamily.beVietnamProRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray,
  },
  depth4Frame04: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    height: 56,
    borderRadius: Border.br_xs,
    overflow: "hidden",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  depth3Frame04: {
    minWidth: 160,
    flex: 1,
  },
  depth2Frame7: {
    flexWrap: "wrap",
    alignItems: "flex-end",
    maxWidth: 480,
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
    minHeight: 844,
    justifyContent: "space-between",
    overflow: "hidden",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  filtersui: {
    backgroundColor: Color.colorWhite,
  },
});

export default FiltersUI;
