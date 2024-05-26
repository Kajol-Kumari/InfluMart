import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Depth1Frame2 from "../components/Depth1Frame2";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
        <Depth1Frame2 />
        <Depth1Frame1 />
        <Depth1Frame
          depth3Frame0={require("../assets/depth-3-frame-01.png")}
          projectWithAnna="Project with Anna"
          inProgress="In progress"
        />
        <View style={styles.depth1Frame3}>
          <View style={styles.depth2Frame0}>
            <Text style={styles.hiAnnaHere}>
              Hi Anna, here are the assets and schedule for our collaboration.
            </Text>
          </View>
        </View>
        <Depth1Frame
          depth3Frame0={require("../assets/depth-3-frame-02.png")}
          projectWithAnna="Project with Will"
          inProgress="Not started"
          propWidth={129}
          propWidth1={129}
          propWidth2={129}
        />
        <View style={styles.depth1Frame3}>
          <View style={styles.depth2Frame0}>
            <Text style={styles.hiAnnaHere}>
              Hi Will, how was your experience using the product?
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame6} />
        <View style={styles.depth1Frame7}>
          <View style={[styles.depth2Frame02, styles.frameLayout]}>
            <View style={[styles.depth3Frame0, styles.frameLayout]}>
              <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={require("../assets/depth-4-frame-0.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame8} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 56,
    width: 56,
    flexDirection: "row",
    overflow: "hidden",
  },
  hiAnnaHere: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorGray,
    textAlign: "left",
  },
  depth2Frame0: {
    alignSelf: "stretch",
  },
  depth1Frame3: {
    height: 64,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_xs,
    width: 390,
  },
  depth1Frame6: {
    height: 308,
    width: 390,
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_xs,
    backgroundColor: "#1a5ce6",
    alignItems: "center",
    justifyContent: "center",
  },
  depth2Frame02: {
    justifyContent: "flex-end",
  },
  depth1Frame7: {
    height: 76,
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    justifyContent: "flex-end",
    flexDirection: "row",
    overflow: "hidden",
    width: 390,
  },
  depth1Frame8: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  galileoDesign: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GalileoDesign;
