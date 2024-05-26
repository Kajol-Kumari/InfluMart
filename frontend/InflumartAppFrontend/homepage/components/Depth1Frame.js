import * as React from "react";
import { StyleSheet, View } from "react-native";
import Depth3Frame from "./Depth3Frame";
import { Padding } from "../GlobalStyles";

const Depth1Frame = () => {
  return (
    <View style={[styles.depth1Frame11, styles.frameFlexBox]}>
      <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
        <Depth3Frame
          depth4Frame0={require("../assets/depth-4-frame-03.png")}
          zara="Zara"
          menswearCollection="Menswear collection"
        />
        <Depth3Frame
          depth4Frame0={require("../assets/depth-4-frame-04.png")}
          zara="Lulu Lemon"
          menswearCollection="Yoga pants"
          propMarginLeft={12}
        />
        <Depth3Frame
          depth4Frame0={require("../assets/depth-4-frame-05.png")}
          zara="Chanel"
          menswearCollection="Handbags"
          propMarginLeft={12}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    height: 261,
  },
  depth2Frame0: {
    width: 536,
    padding: Padding.p_base,
  },
  depth1Frame11: {
    width: 390,
    overflow: "hidden",
  },
});

export default Depth1Frame;
