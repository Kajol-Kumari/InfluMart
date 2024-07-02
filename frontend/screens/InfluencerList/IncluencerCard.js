import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  Border,
  FontSize,
  FontFamily,
  Color,
  Padding,
} from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/core";
import ImageWithFallback from "../../util/ImageWithFallback";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAlert } from "../../util/AlertContext";


const InfluencerCard = ({
  depth5Frame0,
  kylieCosmetics,
  beauty,
  influencerId,
}) => {
  const {showAlert} = useAlert()
  const navigation = useNavigation()
  const [navigate,setnavigate] = React.useState(false)
  React.useEffect(()=>{
    const getData = async ()=>{
      const brand = await AsyncStorage.getItem("brandId")
      const influencer = await AsyncStorage.getItem("influencerId")
      if(!brand && !influencer){
        setnavigate(false)
      }else{
        setnavigate(true)
      }
    }
    getData()
  })
  const handleClick = async ()=>{
    if(navigate){
      navigation.navigate("Analytics",{influencerId})
    }else{
      showAlert("Login Require!", "Please login to see Influencer's Analytics.")
    }
  }
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <TouchableOpacity onPress={()=>handleClick()}>
          <View style={styles.imageContainer}>
            <ImageWithFallback image={depth5Frame0} imageStyle={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{kylieCosmetics}</Text>
            </View>
            <View style={styles.categoryContainer}>
              <Text style={styles.category}>{beauty}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 316,
    width: 360,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
    borderRadius: Border.br_xs,
  },
  cardContent: {
    height: "100%",
    width: "100%",
    borderRadius: Border.br_xs,
  },
  imageContainer: {
    height: 191,
    width: 328,
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: Border.br_xs,
  },
  textContainer: {
    height: 83,
    width: 358,
    justifyContent: "center",
    paddingVertical: Padding.p_base,
  },
  titleContainer: {
    height: 23,
    width: 358,
  },
  title: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  categoryContainer: {
    height: 24,
    width: 358,
    marginTop: 4,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  category: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorSlategray_200,
    textAlign: "left",
  },
});

export default InfluencerCard;
