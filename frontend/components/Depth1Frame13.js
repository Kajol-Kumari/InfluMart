import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const Depth1Frame13 = ({ active }) => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = React.useState(active)

  function handleClick(tab) {
    setActiveTab(tab)
    if (tab == "list")
      //navigation for home icon
      navigation.navigate('InfluencersList')
    if (tab == "partnership")
      //navigation for partnership icon
      navigation.navigate('BrandsAssosciated')
    if (tab == "settings")
      navigation.navigate('AdminPanel')
    if (tab == "network")
      //navigation for partnership icon
      navigation.navigate('UserProfile')
    if (tab == "profile")
      navigation.navigate('Analytics')
  }

  return (
    <View style={styles.depth1Frame8}>
      <View style={styles.depth2Frame0}>
        <TouchableOpacity onPress={()=>{handleClick("list")}}>
          <View style={styles.depth3Frame0}>
            <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
              <Image
                style={styles.depth5Frame0}
                contentFit="cover"
                source={require("../assets/depth-5-frame-02.png")}
              />
            </View>
            <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
              <View style={styles.depth5Frame01}>
                <Text style={[styles.home, styles.homeTypo, { color: `${activeTab == "home" ? "#fff" : "#ccc"}` }]}>Influencers</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{handleClick("partnership")}}>
        <View style={[styles.depth3Frame1, styles.depth3FrameSpaceBlock]}>
          <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-0281.png")}
            />
          </View>
          <View style={[styles.depth4Frame11, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.partnerships, styles.homeTypo, { color: `${activeTab == "partnership" ? "#fff" : "#ccc"}` }]}>
                Brands
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {handleClick("settings")}}>

          <View style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}>
            <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
              <Image
                style={styles.depth5Frame0}
                contentFit="cover"
                source={require("../assets/depth-5-frame-029.png")}
              />
            </View>

            <View style={[styles.depth4Frame12, styles.depth4FrameSpaceBlock]}>
              <View style={styles.depth5Frame01}>
                <Text style={[styles.home, styles.homeTypo, { color: `${activeTab == "settings" ? "#fff" : "#ccc"}` }]}>Settings</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{handleClick("network")}}>
          <View style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}>
            <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
              <Image
                style={styles.depth5Frame0}
                contentFit="cover"
                source={require("../assets/depth-5-frame-030.png")}
              />
            </View>
            <View style={[styles.depth4Frame13, styles.depth4FrameSpaceBlock]}>
              <View style={styles.depth5Frame01}>
                <Text style={[styles.home, styles.homeTypo, { color: `${activeTab == "network" ? "#fff" : "#ccc"}` }]}>Network</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {handleClick("profile")}}>

          <View style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}>
            <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
              <Image
                style={styles.depth5Frame0}
                contentFit="cover"
                source={require("../assets/depth-5-frame-031.png")}
              />
            </View>
            <View style={[styles.depth4Frame14, styles.depth4FrameSpaceBlock]}>
              <View style={styles.depth5Frame01}>
                <Text style={[styles.home, styles.homeTypo, { color: `${activeTab == "profile" ? "#fff" : "#ccc"}` }]}>Profile</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth4FrameFlexBox: {
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    marginTop: 4,
    alignItems: "center",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  depth3FrameSpaceBlock: {
    marginLeft: 8,
    alignItems: "center",
    height: 72,
  },
  depth5Frame0: {
    height: 24,
    width: 24,
  },
  depth4Frame0: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    width: 24,
  },
  home: {
    color: Color.colorLightgray,
  },
  depth5Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame1: {
    width: 35,
    height: 18,
    marginTop: 4,
  },
  depth3Frame0: {
    alignItems: "center",
    width: 62,
    height: 72,
  },
  depth4Frame01: {
    borderRadius: Border.br_base,
    width: 48,
    justifyContent: "center",
  },
  partnerships: {
    color: Color.colorLightgray,
  },
  depth4Frame11: {
    width: 77,
    height: 18,
    marginTop: 4,
  },
  depth3Frame1: {
    width: 77,
  },
  depth4Frame12: {
    width: 'auto',
    height: 18,
    marginTop: 4,
  },
  depth3Frame2: {
    width: 62,
  },
  depth4Frame13: {
    height: 'auto',
    width: 'auto',
  },
  depth4Frame14: {
    width: 'auto',
    height: 18,
    marginTop: 4,
  },
  depth2Frame0: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 72,
  },
  depth1Frame8: {
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderTopWidth: 1,
    width: "100%",
    height: 93,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
  },
  activeTab: {
    colorolor: Color.colorWhite
  }
});

export default Depth1Frame13;
