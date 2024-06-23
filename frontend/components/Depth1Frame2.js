import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Depth1Frame2 = ({
  brands,
  depth3Frame1,
  propBackgroundColor,
  propFontFamily,
  propColor,
  to
}) => {
  const depth1Frame8Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const brandsStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("color", propColor),
    };
  }, [propFontFamily, propColor]);

  const navigation = useNavigation()

  return (
    <View style={[styles.depth1Frame8, depth1Frame8Style]}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <Text style={[styles.brands, brandsStyle]}>{brands}</Text>
          </View>
        </View>
        <Pressable onPress={()=>{navigation.navigate(to)}}>
          <Image
            style={styles.depth3Frame1}
            contentFit="cover"
            source={depth3Frame1}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  brands: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: "auto",
    height: 24,
    overflow: "hidden",
  },
  depth3Frame1: {
    width: 28,
    marginLeft: 16,
    height: 28,
  },
  depth2Frame0: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Padding.p_base
  },
  depth1Frame8: {
    backgroundColor: Color.colorWhite,
    width: '100%',
    height: 56,
  },
});

export default Depth1Frame2;
