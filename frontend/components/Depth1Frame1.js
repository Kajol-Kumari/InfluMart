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
          zara="Lululemon"
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
          zara="Lululemon"
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
          zara="Lululemon"
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
          zara="Lululemon"
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
    flex: 1,
    width: "100%", // Ensures it takes full width of its container
    height: 'auto', // Automatically adjusts height based on content
    overflow: "hidden", // Prevents content overflow
  },
  scrollViewContent: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
  },
});

export default Depth1Frame1;
