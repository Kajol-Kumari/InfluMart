import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Depth3Frame from "./Depth3Frame";
import { Padding } from "../GlobalStyles";

const Depth1Frame1 = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
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
        <Depth3Frame
          depth4Frame0={require("../assets/depth-4-frame-03.png")}
          zara="Zara"
          menswearCollection="Menswear collection"
          propMarginLeft={12}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 'auto',
    overflow: "hidden",
  },
  scrollViewContent: {
    flexDirection: "row",
    padding: Padding.p_base,
  },
});

export default Depth1Frame1;
