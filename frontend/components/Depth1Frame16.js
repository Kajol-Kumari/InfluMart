import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType ,TouchableOpacity } from "react-native";
import { FontSize, Color, Border, FontFamily, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Depth1Frame16 = ({
  depth3Frame0,
  productPost,
  dateJun15,
  productToteBag,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
}) => {
  const navigation = useNavigation();

  const depth2Frame01Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const depth3Frame22Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const depth4Frame03Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  const depth4Frame15Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth3),
    };
  }, [propWidth3]);

  const depth4Frame2Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth4),
    };
  }, [propWidth4]);

  return (
    <View style={styles.depth1Frame3}>
      <View style={[styles.depth2Frame0, depth2Frame01Style]}>
        <Image
          style={styles.depth3Frame0}
          contentFit="cover"
          source={depth3Frame0}
        />
        <View style={[styles.depth3Frame2, depth3Frame22Style]}>
          <View style={[styles.depth4Frame0, depth4Frame03Style]}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.productPost}>{productPost}</Text>
            </View>
          </View>
          <View style={[styles.depth4Frame1, depth4Frame15Style]}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.dateJun15, styles.dateJun15Typo]}>
                {dateJun15}
              </Text>
            </View>
          </View>
          <View style={[styles.depth4Frame1, depth4Frame2Style]}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.dateJun15, styles.dateJun15Typo]}>
                {productToteBag}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.depth2Frame1, styles.frameLayout]}>
      <TouchableOpacity onPress={() => navigation.navigate('FriendRequestPage')}>

        <View style={[styles.depth3Frame01, styles.frameBg]}>
          <View style={[styles.depth4Frame01, styles.frameBg]}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.viewRequest, styles.dateJun15Typo]}>
                View
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
  dateJun15Typo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  frameLayout: {
    height: 32,
    width: 126,
  },
  frameBg: {
    backgroundColor: Color.colorDarkslategray_200,
    overflow: "hidden",
  },
  depth3Frame0: {
    borderRadius: Border.br_5xs,
    width: 72,
    overflow: "hidden",
    height: 72,
  },
  productPost: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    height: 24,
    width: 126,
  },
  dateJun15: {
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorLightgray,
  },
  depth4Frame1: {
    height: 21,
    width: 126,
  },
  depth3Frame2: {
    height: 66,
    marginLeft: 16,
    justifyContent: "center",
    width: 126,
  },
  depth2Frame0: {
    left: 16,
    width: 214,
    flexDirection: "row",
    height: 72,
    top: 12,
    position: "absolute",
  },
  viewRequest: {
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  depth4Frame01: {
    width: 'auto',
    height: 21,
  },
  depth3Frame01: {
    borderRadius: Border.br_base,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    height: 32,
    width: 126,
    justifyContent: "center",
    flexDirection: "row",
  },
  depth2Frame1: {
    left: 248,
    top: 12,
    position: "absolute",
    height: 32,
  },
  depth1Frame3: {
    backgroundColor: Color.colorBlack,
    width: 390,
    height: 96,
  },
});

export default Depth1Frame16;
