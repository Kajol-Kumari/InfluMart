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
import {formatNumber} from '../../helpers/GraphData';
import { useNavigation } from "@react-navigation/core";
import ImageWithFallback from "../../util/ImageWithFallback";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAlert } from "../../util/AlertContext";
import { LinearGradient } from 'expo-linear-gradient'


const InfluencerCard = ({
  depth5Frame0,
  kylieCosmetics,
  beauty,
  influencerId,
  userName,
  statistics
}) => {
  const { showAlert } = useAlert()
  const navigation = useNavigation()
  const [navigate, setnavigate] = React.useState(false)
  React.useEffect(() => {
    const getData = async () => {
      const brand = await AsyncStorage.getItem("brandId")
      const influencer = await AsyncStorage.getItem("influencerId")
      if (!brand && !influencer) {
        setnavigate(false)
      } else {
        setnavigate(true)
      }
    }
    getData()
  })
  React.useEffect(() => {
    console.log(statistics)
  }, [])
  const handleClick = async () => {
    if (navigate) {
      navigation.navigate("Analytics", { influencerId })
    } else {
      showAlert("Login Require!", "Please login to see Influencer's Analytics.")
    }
  }
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <TouchableOpacity onPress={() => handleClick()}>
          <View style={styles.imageContainer}>
            <ImageWithFallback image={depth5Frame0} imageStyle={styles.image} />
            <View style={styles.overlayContainer}>
              <LinearGradient style={styles.overlay} colors={['transparent', '#000']}>
                <Text style={styles.insightText}>INSIGHT</Text>
                <Text style={styles.google}>{kylieCosmetics}</Text>
                <Text style={styles.insightText}>{beauty}</Text>
              </LinearGradient>
            </View>
            <View style={styles.statisticsContainer}>
              <View style={styles.statistics}>
                <Image style={{ width: 24, height: 24 }} source={require('../../assets/instagram_symbol.png')} />
                <Text style={styles.categoryText}>{formatNumber(statistics.instaData)}</Text>
              </View>
              <View style={styles.statistics}>
                <Image style={{ width: 24, height: 24 }} source={require('../../assets/tt_symbol.png')} />
                <Text style={styles.categoryText}>{formatNumber(statistics.fbData)}</Text>
              </View>
              <View style={styles.statistics}>
                <Image style={{ width: 24, height: 24 }} source={require('../../assets/yt_symbol.png')} />
                <Text style={styles.categoryText}>{formatNumber(statistics.ytData)}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 420,
    width: 280,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_xs,
    margin: Padding.p_base
  },
  cardContent: {
    height: "100%",
    width: "100%",
    borderRadius: Border.br_xs,
  },
  imageContainer: {
    height: 420,
    width: 280,
    borderRadius: Border.br_xs,
    overflow: "hidden",
    backgroundColor: "#0C0B0B"
  },
  image: {
    height: 350,
    width: 280,
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
    color: Color.colorWhite,
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
    color: "#ccc",
    textAlign: "left",
  },
  overlayContainer: {
    width: 280,
    height: 350,
    position: "absolute",
    top: 0,
    overflow: "hidden"
  },
  overlay: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: Padding.p_base,
    gap: 3
  },
  insightText: {
    width: "100%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorSlategray_100,
  },
  google: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  categoryText: {
    fontSize: FontSize.size_smi,
    lineHeight: 24,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorSlategray_100,
  },
  statisticsContainer:{
    width:"100%",
    height:"auto",
    paddingHorizontal:Padding.p_base,
    paddingVertical:Padding.p_xs,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  statistics:{
    width:80,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:4
  }
});

export default InfluencerCard;
