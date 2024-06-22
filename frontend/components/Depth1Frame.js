import React, { useMemo } from "react";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { FontFamily, Color, Padding } from "../GlobalStyles";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  } from "react-native-responsive-dimensions";

const { height, width } = Dimensions.get('window');
const itemWidth = width / 4 - 16;

const dynamicStyles = {
  frameWidth: Math.min(width * 0.9), 
  frameHeight: height * 0.08,
  imageSize: Math.min(width * 0.05, 30),
  fontSize: Math.min(width * 0.04, 20), 
};

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Depth1Frame = ({
  depth5Frame0,
  depth5Frame01,
  search,
  depth5Frame02,
  myBrands,
  depth5Frame03,
  propBorderColor,
  propFontFamily,
  propColor,
  propFontFamily1,
  propColor1,
  propFontFamily2,
  propColor2,
  propFontFamily3,
  propColor3,
}) => {
  const navigation = useNavigation();

  const depth1Frame13Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("color", propColor),
    };
  }, [propFontFamily, propColor]);

  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily1),
      ...getStyleValue("color", propColor1),
    };
  }, [propFontFamily1, propColor1]);

  const myBrandsStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily2),
      ...getStyleValue("color", propColor2),
    };
  }, [propFontFamily2, propColor2]);

  const profileStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily3),
      ...getStyleValue("color", propColor3),
    };
  }, [propFontFamily3, propColor3]);

  return (
    <View style={[styles.depth1Frame13, depth1Frame13Style]}>
      <View style={styles.depth2Frame0}>

        {/* Home Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <View style={[styles.depth3FrameLayout, { width: itemWidth }]}>
            <View style={styles.depth4FrameFlexBox}>
              <Image style={[styles.depth5Frame0, { width: dynamicStyles.imageSize, height: dynamicStyles.imageSize }]} resizeMode="contain" source={depth5Frame0} />
            </View>
            <View style={styles.depth4FrameSpaceBlock}>
              <Text style={[styles.homeTypo, homeStyle]}>Home</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Search Button */}
        <TouchableOpacity onPress={() => navigation.navigate('InfluencersList')}>
          <View style={[styles.depth3FrameLayout, { width: itemWidth }]}>
            <View style={styles.depth4FrameFlexBox}>
              <Image style={[styles.depth5Frame0, { width: dynamicStyles.imageSize, height: dynamicStyles.imageSize }]} resizeMode="contain" source={depth5Frame01} />
            </View>
            <View style={styles.depth4FrameSpaceBlock}>
              <Text style={[styles.homeTypo, searchStyle]}>{search}</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* My Brands Button */}
        <TouchableOpacity onPress={() => navigation.navigate('BrandsAssosciated')}>
          <View style={[styles.depth3FrameLayout, { width: itemWidth }]}>
            <View style={styles.depth4FrameFlexBox}>
              <Image style={[styles.depth5Frame0, { width: dynamicStyles.imageSize, height: dynamicStyles.imageSize }]} resizeMode="contain" source={depth5Frame02} />
            </View>
            <View style={styles.depth4FrameSpaceBlock}>
              <Text style={[styles.homeTypo, myBrandsStyle]}>{myBrands}</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Profile Button */}
        <TouchableOpacity onPress={() => navigation.navigate('BrandorInfluencer')}>
          <View style={[styles.depth3FrameLayout, { width: itemWidth }]}>
            <View style={styles.depth4FrameFlexBox}>
              <Image style={[styles.depth5Frame0, { width: dynamicStyles.imageSize, height: dynamicStyles.imageSize }]} resizeMode="contain" source={depth5Frame03} />
            </View>
            <View style={styles.depth4FrameSpaceBlock}>
              <Text style={[styles.homeTypo, profileStyle]}>Profile</Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth1Frame13: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGhostwhite,
    borderTopWidth: 1,
    paddingHorizontal: Padding.p_base,
    // paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_xs,
  },
  depth2Frame0: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width - 16, // Adjust based on padding and margins
    height: dynamicStyles.frameHeight,
  },
  depth3FrameLayout: {
    alignItems: "center",
    height: responsiveHeight(5),
  },
  depth4FrameFlexBox: {
    height: responsiveHeight(4),
    alignItems: "center",
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    alignItems: "center",
    marginTop: 4,
    height: dynamicStyles.frameHeight, // Adjust based on text height
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    lineHeight: responsiveHeight(3),
    letterSpacing: 0,
    fontSize: dynamicStyles.fontSize,
    // marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    color: 'gray',
  },
  depth5Frame0: {
    borderRadius: 8, 
  },
});

export default Depth1Frame;
