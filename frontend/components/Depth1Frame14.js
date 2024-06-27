import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Depth2Frame1 from "./Depth2Frame1";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const PricingDropdown = ({ title, description, open }) => {
  return (
    <View style={[styles.depth2Frame0, styles.depth2FrameLayout]}>
      <View style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
        <View style={styles.depth4Frame0}>
          <View style={styles.depth5Frame0}>
            <Text style={[styles.basic, styles.moTypo]}>{title}</Text>
          </View>
        </View>
        <Image
          style={[styles.depth4Frame1, { transform: [{ rotate: open ? '0deg' : '180deg' }] }]}
          contentFit="cover"
          source={require("../assets/depth-4-frame-1.png")}
        />
      </View>
      <View style={[styles.depth3Frame1, styles.depth3FrameLayout, { display: open ? "flex" : "none" }]}>
        <View style={styles.depth5Frame0}>
          <Text style={[styles.mo, styles.moTypo]}>{description}</Text>
        </View>
      </View>
    </View>
  )
}

const Depth1Frame14 = () => {
  const [openTitle, setOpenTitle] = React.useState("")
  const handleClick = (title) => {
    if(title==openTitle)
      setOpenTitle("")
    else
      setOpenTitle(title)
  }
  const priceList = [{ title: "Basic", price: "$500 /mo" }, { title: "Standard", price: "$500 /mo" }, { title: "Premium", price: "$500 /mo" }, { title: "Product Post", price: "$500 /mo" }, { title: "Story Post", price: "$500 /mo" }, { title: "Reel", price: "$500 /mo" }]
  return (
    <View style={styles.depth1Frame6}>
      {
        priceList && priceList.map(({ title, price }) => {
          return (
            <Pressable key={title} onPress={()=>{handleClick(title)}}>
              <PricingDropdown title={title} description={price} open={title==openTitle?true:false} />
            </Pressable>
          )
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  depth2FrameLayout: {
    width: "100%",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_xs,
    padding: Padding.p_base,
  },
  depth3FrameLayout: {
    width: "100%",
    height: "auto",
  },
  moTypo: {
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  basic: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorWhite,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 'auto',
    height: 21,
  },
  depth4Frame1: {
    width: 20,
    height: 20,
  },
  depth3Frame0: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 21
  },
  mo: {
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorLightgray,
  },
  depth3Frame1: {
    marginTop: 8,
    height: 21,
  },
  depth2Frame0: {
    width: "100%",
    height: "auto",
    marginVertical:8
  },
  depth4Frame02: {
    width: 'auto',
    height: 21,
  },
  depth2Frame1: {
    height: 53,
    marginTop: 12,
  },
  depth1Frame6: {
    width: "100%",
    height: "auto",
    padding: Padding.p_base,
  },
});

export default Depth1Frame14;
