import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { FontSize, FontFamily, Color, Padding,Border } from "../GlobalStyles";

const Depth1Frame4 = ({ onChange, isSearch }) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false)

  const handleSearch = () => {
    setIsSearchBarOpen(!isSearchBarOpen)
  }

  return (
    <View style={styles.depth1Frame0}>
      <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
        {
          isSearchBarOpen ?
            <TextInput onChange={(e) => {
              onChange(e.target.value)
            }} style={styles.SearchBar} placeholder="Search anything" /> :
            <>
              <TouchableOpacity style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
              </TouchableOpacity>
              <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
                <View style={styles.depth4Frame01}>
                  <View style={styles.depth5Frame0}>
                    <Text style={styles.influmart}>Influmart</Text>
                  </View>
                </View>
              </View>
            </>

        }
        {isSearch ?<View style={styles.depth3FrameLayout}></View>: <TouchableOpacity onPress={handleSearch} style={styles.depth3FrameLayout}>
          <View style={[styles.depth4Frame02, styles.depth3FrameLayout]}>
            <Image
              style={styles.depth4Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-0.png")}
            />
          </View>
        </TouchableOpacity>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  depth3FrameLayout: {
    width: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    alignItems: "center",
  },
  influmart: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.lexendBold,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: 'auto',
    overflow: "hidden",
    height: 23,
  },
  depth3Frame1: {
    width: 'auto',
    justifyContent: "center",
    height: 23,
    alignItems: "center",
  },
  depth4Frame02: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  depth2Frame0: {
    width: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    height: "auto",
    flexDirection: "row",
  },
  depth1Frame0: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 72,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
  },
  SearchBar: {
    width: "80%",
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_base,
    fontSize: FontSize.size_base,
    color: Color.colorSteelblue_200,
    backgroundColor: Color.colorAliceblue,
    outlineStyle: "none",
    borderRadius: Border.br_xs
  }
});

export default Depth1Frame4;
