import React, { useMemo, useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  Color,
  Border,
  FontFamily,
  Padding,
} from "../../GlobalStyles";
import ImageWithFallback from "../../util/ImageWithFallback";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ProductCard = ({
  imageSource,
  postTitle,
  postDate,
  productName,
  isSelectedImage,
  cardWidth,
  id,
  postTitleWidth,
  postDateWidth,
  productNameWidth,
  buttonWidth,
}) => {
  const navigation = useNavigation();

  const cardStyle = useMemo(
    () => getStyleValue("width", cardWidth),
    [cardWidth]
  );
  const postTitleStyle = useMemo(
    () => getStyleValue("width", postTitleWidth),
    [postTitleWidth]
  );
  const postDateStyle = useMemo(
    () => getStyleValue("width", postDateWidth),
    [postDateWidth]
  );
  const productNameStyle = useMemo(
    () => getStyleValue("width", productNameWidth),
    [productNameWidth]
  );
  const buttonStyle = useMemo(
    () => getStyleValue("width", buttonWidth),
    [buttonWidth]
  );
  const[viewWidth,setViewWidth]=useState(0)
  return (
    <View style={[styles.card, cardStyle]} onLayout={(evt)=>{
      setViewWidth(evt.nativeEvent.layout.width)
    }}>
      <View style={styles.cardContent}>
        <ImageWithFallback image={imageSource} imageStyle={styles.image} isSelectedImage={isSelectedImage} />
        <View style={{width:viewWidth<=468?"60%":"100%"}}>
          <View style={[styles.textContainer, postTitleStyle]}>
            <Text style={styles.postTitle}>{postTitle}</Text>
          </View>
          <View style={[styles.textContainer, postDateStyle]}>
            <Text style={styles.postDate}>Date: {postDate}</Text>
          </View>
          <View style={[styles.textContainer, productNameStyle]}>
            <Text style={styles.productName}>Product: {productName}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, buttonStyle]}
        onPress={() => navigation.navigate("FriendRequestPage",{name: postTitle,requestId: id})}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{viewWidth<=468?"View":"View Request"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.colorBlack,
    width: 390,
    height: 96,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "space-between",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    borderRadius: Border.br_5xs,
    width: 72,
    height: 72,
    overflow: "hidden",
  },
  textContainer: {
    marginLeft: 16,
  },
  postTitle: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
  },
  postDate: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorLightgray,
    fontFamily: FontFamily.beVietnamProRegular,
  },
  productName: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorLightgray,
    fontFamily: FontFamily.beVietnamProRegular,
  },
  buttonContainer: {
    height: 32,
    width: "auto",
  },
  button: {
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_base,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: Padding.p_base,
  },
  buttonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    lineHeight: 21,
  },
});

export default ProductCard;
