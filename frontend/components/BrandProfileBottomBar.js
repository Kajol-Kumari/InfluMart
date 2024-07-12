import React, { useMemo } from "react";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BrandProfileBottomBar = ({
  depth5Frame0,
  depth5Frame01,
  search,
  depth5Frame02,
  myBrands,
  depth5Frame03,
  propBorderColor,
  propWidth,
  propWidth1,
  propFontFamily,
  propColor,
  propWidth2,
  propWidth3,
  propFontFamily1,
  propColor1,
  propWidth4,
  propWidth5,
  propFontFamily2,
  propColor2,
  propWidth6,
  propWidth7,
  propFontFamily3,
  propColor3,
  style
}) => {
  const navigation = useNavigation();

  const depth1Frame13Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  const depth3Frame01Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const depth4Frame1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("color", propColor),
    };
  }, [propFontFamily, propColor]);

  const depth3Frame1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  const depth4Frame11Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth3),
    };
  }, [propWidth3]);

  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily1),
      ...getStyleValue("color", propColor1),
    };
  }, [propFontFamily1, propColor1]);

  const depth3Frame2Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth4),
    };
  }, [propWidth4]);

  const depth4Frame12Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth5),
    };
  }, [propWidth5]);

  const myBrandsStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily2),
      ...getStyleValue("color", propColor2),
    };
  }, [propFontFamily2, propColor2]);

  const depth3Frame3Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth6),
    };
  }, [propWidth6]);

  const depth4Frame13Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth7),
    };
  }, [propWidth7]);

  const profileStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily3),
      ...getStyleValue("color", propColor3),
    };
  }, [propFontFamily3, propColor3]);
  const handleProfileClick = async () => {
    const brand = await AsyncStorage.getItem("brandId")
    const influencer = await AsyncStorage.getItem("influencerId")
    if (brand) {
      navigation.navigate('BrandProfile')
    } else if (influencer) {
      navigation.navigate('UserProfile')
    } else {
      navigation.navigate('BrandorInfluencer')
    }
  }
  return (
    <View style={[styles.depth1Frame13, depth1Frame13Style, style]}>
      <View style={styles.depth2Frame0}>
        <TouchableOpacity onPress={() => navigation.navigate('CollabForm')}>

          <View
            style={[
              styles.depth3Frame1,
              styles.depth3FrameLayout,
              depth3Frame1Style,
            ]}
          >
            <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
              <Image
                style={styles.depth5Frame0}
                contentFit="cover"
                source={require('../assets/post_icon.png')}
              />
            </View>
            <View
              style={[
                styles.depth4Frame11,
                styles.depth4FrameSpaceBlock,
                depth4Frame11Style
              ]}
            >
              <View style={styles.depth5Frame01}>
                <Text style={[styles.search, styles.homeTypo, searchStyle]}>
                  Post
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('InfluencersList')}>

          <View
            style={[
              styles.depth3Frame1,
              styles.depth3FrameLayout,
              depth3Frame1Style,
            ]}
          >
            <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
              <Image
                style={styles.depth5Frame0}
                contentFit="cover"
                source={depth5Frame01}
              />
            </View>
            <View
              style={[
                styles.depth4Frame11,
                styles.depth4FrameSpaceBlock,
                depth4Frame11Style,
              ]}
            >
              <View style={styles.depth5Frame01}>
                <Text style={[styles.search, styles.homeTypo, searchStyle]}>
                  {search}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('BrandsAssosciated')}>

          <View
            style={[
              styles.depth3Frame1,
              styles.depth3FrameLayout,
              depth3Frame2Style,
            ]}
          >
            <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
              <Image
                style={styles.depth5Frame0}
                contentFit="cover"
                source={depth5Frame02}
              />
            </View>
            <View
              style={[
                styles.depth4Frame12,
                styles.depth4FrameSpaceBlock,
                depth4Frame12Style,
              ]}
            >
              <View style={styles.depth5Frame01}>
                <Text style={[styles.search, styles.homeTypo, myBrandsStyle]}>
                  {myBrands}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity >

        <TouchableOpacity onPress={() => handleProfileClick()}>

          <View
            style={[
              styles.depth3Frame1,
              styles.depth3FrameLayout,
              depth3Frame3Style,
            ]}
          >
            <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
              <Image
                style={styles.depth5Frame0}
                contentFit="cover"
                source={depth5Frame03}
              />
            </View>
            <View
              style={[
                styles.depth4Frame13,
                styles.depth4FrameSpaceBlock,
                depth4Frame13Style,
              ]}
            >
              <View style={styles.depth5Frame01}>
                <Text style={[styles.search, styles.homeTypo, profileStyle]}>
                  Profile
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth3FrameLayout: {
    width: "auto",
    alignItems: "center",
    height: 55,
  },
  depth4FrameFlexBox: {
    height: 32,
    justifyContent:"center",
    alignItems: "center",
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    marginTop: 4,
    height: 18,
    alignItems: "center",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    width: "auto"
  },
  depth5Frame0: {
    height: 24,
    width: 24,
  },
  depth4Frame0: {
    borderRadius: Border.br_base,
    width: "auto",
    justifyContent: "center",
  },
  home: {
    color: Color.colorGray_500,
  },
  depth5Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame1: {
    width: "auto",
  },
  depth3Frame0: {
    alignItems: "center",
  },
  depth4Frame01: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    width: 30,
  },
  search: {
    color: Color.colorSlategray_300,
  },
  depth4Frame11: {
    width: "auto",
  },
  depth3Frame1: {
    marginLeft: 8,
    alignItems: "center",
  },
  depth4Frame12: {
    width: 70,
  },
  depth4Frame13: {
    width: 45,
  },
  depth2Frame0: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 54,
    justifyContent: "space-evenly",
    gap: 20
  },
  depth1Frame13: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGhostwhite,
    borderTopWidth: 1,
    width: "100%",
    height: 80,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    position: "absolute",
    bottom: 0
  },
});

export default BrandProfileBottomBar;
