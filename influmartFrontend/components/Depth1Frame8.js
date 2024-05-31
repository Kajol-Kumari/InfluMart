import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Depth1Frame8 = ({
  engagementRateOverTime,
  prop,
  prop1,
  vector0,
  vector1,
  propWidth,
}) => {
  const depth5Frame1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={styles.depth1Frame5}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <View style={styles.depth5Frame0}>
              <Text style={[styles.engagementRateOver, styles.textClr]}>
                {engagementRateOverTime}
              </Text>
            </View>
          </View>
          <View style={[styles.depth4Frame1, styles.frameLayout]}>
            <View style={styles.frameLayout}>
              <Text style={[styles.text, styles.janTypo]}>{prop}</Text>
            </View>
          </View>
          <View style={[styles.depth4Frame2, styles.frameFlexBox]}>
            <View style={styles.depth5Frame02}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.last6Months, styles.janClr]}>
                  Last 6 Months
                </Text>
              </View>
            </View>
            <View style={[styles.depth5Frame1, depth5Frame1Style]}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.text1, styles.text1Typo]}>{prop1}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.frameSpaceBlock]}>
          <View style={styles.depth4Frame01}>
            <View style={[styles.depth5Frame03, styles.frameSpaceBlock]}>
              <View style={[styles.depth6Frame02, styles.vector0Layout]}>
                <Image
                  style={[styles.vector0, styles.vector0Position]}
                  contentFit="cover"
                  source={vector0}
                />
                <Image
                  style={[styles.vector0, styles.vector0Position]}
                  contentFit="cover"
                  source={vector1}
                />
                <Image
                  style={[styles.vector0, styles.vector0Position]}
                  contentFit="cover"
                  source={require("../assets/vector--2.png")}
                />
                <View style={[styles.depth7Frame0, styles.vector0Position]} />
                <View style={[styles.depth7Frame0, styles.vector0Position]} />
              </View>
            </View>
            <View style={[styles.depth5Frame11, styles.frameFlexBox]}>
              <View style={styles.depth6Frame03}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.jan, styles.janClr]}>Jan</Text>
                </View>
              </View>
              <View style={styles.depth6Frame1}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.jan, styles.janClr]}>Feb</Text>
                </View>
              </View>
              <View style={styles.depth6Frame2}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.jan, styles.janClr]}>Mar</Text>
                </View>
              </View>
              <View style={styles.depth6Frame1}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.jan, styles.janClr]}>Apr</Text>
                </View>
              </View>
              <View style={styles.depth6Frame4}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.jan, styles.janClr]}>May</Text>
                </View>
              </View>
              <View style={styles.depth6Frame5}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.jan, styles.janClr]}>Jun</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textClr: {
    color: Color.colorGray_500,
    textAlign: "left",
  },
  frameLayout: {
    height: 40,
    width: 308,
  },
  janTypo: {
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
  },
  frameFlexBox: {
    flexDirection: "row",
    marginTop: 8,
    width: 308,
  },
  janClr: {
    color: Color.colorSlategray_200,
    textAlign: "left",
  },
  text1Typo: {
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    width: 308,
  },
  vector0Layout: {
    height: 148,
    width: 308,
  },
  vector0Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  engagementRateOver: {
    textAlign: "left",
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    height: 24,
    width: 308,
  },
  text: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    lineHeight: 40,
    textAlign: "left",
    color: Color.colorGray_500,
    alignSelf: "stretch",
  },
  depth4Frame1: {
    marginTop: 8,
    overflow: "hidden",
  },
  last6Months: {
    fontFamily: FontFamily.beVietnamProRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorSlategray_200,
  },
  depth5Frame02: {
    width: 110,
    height: 24,
  },
  text1: {
    color: Color.colorForestgreen,
    textAlign: "left",
  },
  depth5Frame1: {
    width: 34,
    marginLeft: 4,
    height: 24,
  },
  depth4Frame2: {
    height: 24,
  },
  depth3Frame0: {
    height: 104,
    width: 308,
  },
  vector0: {
    height: 148,
    width: 308,
  },
  depth7Frame0: {
    width: 304,
    height: 146,
  },
  depth6Frame02: {
    overflow: "hidden",
  },
  depth5Frame03: {
    height: 180,
  },
  jan: {
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
  },
  depth6Frame03: {
    width: 23,
    height: 20,
  },
  depth6Frame1: {
    width: 25,
    height: 20,
  },
  depth6Frame2: {
    width: 26,
    height: 20,
  },
  depth6Frame4: {
    width: 28,
    height: 20,
  },
  depth6Frame5: {
    width: 22,
    height: 20,
  },
  depth5Frame11: {
    justifyContent: "space-between",
    height: 20,
  },
  depth4Frame01: {
    height: 208,
    width: 308,
  },
  depth3Frame1: {
    height: 240,
    marginTop: 8,
  },
  depth2Frame0: {
    top: 24,
    left: 16,
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_300,
    borderWidth: 1,
    width: 358,
    height: 402,
    padding: Padding.p_5xl,
    position: "absolute",
  },
  depth1Frame5: {
    width: 390,
    height: 450,
  },
});

export default Depth1Frame8;
