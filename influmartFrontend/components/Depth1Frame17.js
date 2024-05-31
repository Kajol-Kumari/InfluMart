import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text , TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Depth1Frame17 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.depth1Frame1}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-026.png")}
            />
          </View>
          <View style={styles.depth4Frame1}>
            <View style={styles.depth5Frame01}>
              <View style={styles.depth6Frame0}>
                <Text style={[styles.marissa, styles.marissaTypo]}>
                  Marissa
                </Text>
              </View>
            </View>
            <View style={styles.depth5Frame1}>
              <View style={styles.depth6Frame0}>
                <Text style={styles.influencer150kFollowers}>
                  Influencer, 150k followers
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.frameLayout]}>
          <View style={styles.frameLayout}>
          <TouchableOpacity onPress={() => navigation.navigate('InboxInterface')}>

            <View style={[styles.depth5Frame02, styles.frameBg]}>
              <View style={[styles.depth6Frame02, styles.frameBg]}>
                <View style={styles.depth6Frame0}>
                  <Text style={[styles.message, styles.marissaTypo]}>
                    Message
                  </Text>
                </View>
              </View>
            </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marissaTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  frameLayout: {
    height: 40,
    width: 358,
  },
  frameBg: {
    backgroundColor: Color.colorDarkslategray_200,
    overflow: "hidden",
  },
  depth5Frame0: {
    borderRadius: Border.br_45xl,
    overflow: "hidden",
    width: 128,
    height: 128,
  },
  depth4Frame0: {
    width: 128,
    height: 128,
  },
  marissa: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    textAlign: "left",
  },
  depth6Frame0: {
    alignSelf: "stretch",
  },
  depth5Frame01: {
    height: 28,
    width: 214,
  },
  influencer150kFollowers: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorLightgray,
    textAlign: "left",
  },
  depth5Frame1: {
    height: 24,
    width: 214,
  },
  depth4Frame1: {
    marginLeft: 16,
    justifyContent: "center",
    width: 214,
    height: 128,
  },
  depth3Frame0: {
    height: 128,
    width: 358,
    flexDirection: "row",
  },
  message: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    textAlign: "left",
  },
  depth6Frame02: {
    width: 65,
    height: 21,
  },
  depth5Frame02: {
    borderRadius: Border.br_xl,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    height: 40,
    width: 358,
    justifyContent: "center",
    flexDirection: "row",
  },
  depth3Frame1: {
    marginTop: 16,
    flexDirection: "row",
  },
  depth2Frame0: {
    height: 184,
    width: 358,
  },
  depth1Frame1: {
    width: 390,
    height: 216,
    padding: Padding.p_base,
    flexDirection: "row",
  },
});

export default Depth1Frame17;
