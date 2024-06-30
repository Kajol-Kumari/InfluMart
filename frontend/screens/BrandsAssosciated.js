import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { getAllBrandProfiles } from '../controller/brandController'
import { useAlert } from '../util/AlertContext'
import AsyncStorage from "@react-native-async-storage/async-storage";


const BrandAssosciated = ({active}) => {
  const navigation = useNavigation();
  const { showAlert } = useAlert()

  const [brands, setBrands] = React.useState([])
  React.useEffect(() => {
    async function fetchData() {
      const res = await getAllBrandProfiles(showAlert)
      setBrands(res?.brands)
    }
    fetchData()
  }, [])

  const [activeTab, setActiveTab] = React.useState(active)
  function handleClick(tab) {
    setActiveTab(tab)
    if (tab == "list")
      //navigation for home icon
      navigation.navigate('InfluencersList')
    if (tab == "partnership")
      //navigation for partnership icon
      navigation.navigate('BrandsAssosciated')
    if (tab == "events")
      //navigation.navigate('AdminPanel')
    console.log("eventspage")
    if (tab == "network")
      //navigation for partnership icon
      navigation.navigate('UserProfile')
    if (tab == "profile")
      handleProfileClick()
  }
  const fakeData = ["Google","Cisco","Zoho","PWC","Meta","Swiggy","LinkedIn","Zomato"]
  const handleProfileClick = async () => {
    const brand = await AsyncStorage.getItem("brandId")
    const influencer = await AsyncStorage.getItem("influencerId")
    if (brand) {
      navigation.navigate('BrandProfile')
    } else if (influencer) {
      navigation.navigate('UserProfile')
    }else{
      navigation.navigate('brandorInfluencer')
    }
  }
  const handleBack = async () => {
    const brand = await AsyncStorage.getItem("brandId")
    const influencer = await AsyncStorage.getItem("influencerId")
    if (brand) {
      navigation.navigate('BrandProfile')
    } else if (influencer) {
      navigation.navigate('UserProfile')
    }else{
      navigation.navigate('Homepage')
    }
  }
  return (

    <View style={styles.galileoDesign}>
      <View style={[styles.depth0Frame0, styles.frameBg]}>
        <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock]}>
          <TouchableOpacity style={{ width: "100%", height: "auto" }} onPress={() => handleBack()}>
            <View style={styles.depth2Frame0}>

              <View style={styles.depth3Frame0}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-4-frame-Backarrow3x 2.png")}
                />
              </View>
              <View style={styles.depth3Frame1}>
                <View style={styles.depth4Frame01}>
                  <View style={styles.depth5Frame0}>
                    <Text style={styles.allPartners}>Brands</Text>
                  </View>
                </View>
              </View>
              <View style={styles.depth3Frame2}>
                <View style={styles.depth4Frame02} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ width: '100%' }}>
          <View style={styles.depth1Frame1}>
            {
              brands && brands.length > 0 ?
                brands.map(({ name, profileUrl,_id }, index) => {
                  return (
                    <TouchableOpacity onPress={()=>{navigation.navigate("BrandProfile",{clickedId:_id})}}>
                      <View style={styles.depth2FrameLayout} key={index}>
                        <Image
                          style={styles.depth4Frame03}
                          contentFit="cover"
                          source={profileUrl ? profileUrl : require("../assets/depth-4-frame-01.png")}
                        />
                        <View style={styles.depth3Frame11}>
                          <View style={styles.depth4Frame04}>
                            <Text style={styles.google}>{name}</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                })
                :
                <View>
                  <Text style={{ color: "#ccc", fontSize: FontSize.size_base }}>No Brands found</Text>
                </View>
            }

          </View>
        </ScrollView>
        <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame02}>
            <View style={styles.depth3FrameLayout}>
              <TouchableOpacity onPress={() => handleClick("list")}>
              <View style={[styles.depth4Frame019, styles.depth4FrameFlexBox]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-5-frame-0.png")}
                />
              </View>
              <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
                <View style={styles.depth5Frame02}>
                  <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.depth3Frame19, styles.depth3FrameLayout]}>
            <TouchableOpacity onPress={() => handleClick("partnership")}>
              <View style={[styles.depth4Frame020, styles.depth4FrameFlexBox]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-5-frame-01.png")}
                />
              </View>
              <View
                style={[styles.depth4Frame11, styles.depth4FrameSpaceBlock]}
              >
                <View style={styles.depth5Frame02}>
                  <Text style={[styles.partners, styles.homeTypo]}>
                    Partners
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.depth3Frame19, styles.depth3FrameLayout]}>
            <TouchableOpacity onPress={() => handleClick("events")}>
              <View style={[activeTab=="events"?styles.depth4Frame020:styles.depth4Frame019, styles.depth4FrameFlexBox]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-5-frame-02.png")}
                />
              </View>
              <View
                style={[activeTab=="events"?styles.depth4Frame11:styles.depth4Frame12, styles.depth4FrameSpaceBlock]}
              >
                <View style={styles.depth5Frame02}>
                  <Text style={[activeTab=="events"? styles.partners:styles.home, styles.homeTypo]}>Events</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.depth3Frame19, styles.depth3FrameLayout]}>
            <TouchableOpacity onPress={() => handleClick("profile")}>
              <View style={[activeTab=="profile"?styles.depth4Frame020:styles.depth4Frame019, styles.depth4FrameFlexBox]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-5-frame-031.png")}
                />
              </View>
              <View
                style={[activeTab=="profile"?styles.depth4Frame11:styles.depth4Frame13, styles.depth4FrameSpaceBlock]}
              >
                <View style={styles.depth5Frame02}>
                  <Text style={[activeTab=="profile"? styles.partners:styles.home, styles.homeTypo]}>Profile</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameBg: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: "100%",
    height: "100%"
  },
  depth1FrameSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
    height: "auto"
  },
  depth2FrameLayout: {
    height: 'auto',
    width: 280,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  frameLayout: {
    height: 173,
    width: 173,
  },
  depth2FramePosition2: {
    top: 249,
    height: 221,
    width: 173,
    position: "absolute",
  },
  depth2FramePosition1: {
    top: 482,
    height: 221,
    width: 173,
    position: "absolute",
  },
  depth2FramePosition: {
    top: 715,
    height: 221,
    width: 173,
    position: "absolute",
  },
  depth4FrameFlexBox: {
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    marginTop: 4,
    height: 18,
    alignItems: "center",
  },
  homeTypo: {
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  depth3FrameLayout: {
    width: "auto",
    height: 54,
    alignItems: "center",
  },
  depth4Frame0: {
    height: 24,
    width: 24,
  },
  depth3Frame0: {
    width: 48,
    alignItems: "center",
    flexDirection: "row",
    height: 48,
  },
  allPartners: {
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorGray,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: 'auto',
    height: 23,
    overflow: "hidden",
  },
  depth3Frame1: {
    width: "auto",
    justifyContent: "center",
    height: 23,
    alignItems: "center",
    flexDirection: "row",
  },
  depth4Frame02: {
    justifyContent: "flex-end",
    width: 48,
    alignItems: "center",
    height: 48,
  },
  depth3Frame2: {
    width: 48,
    flexDirection: "row",
    height: 48,
  },
  depth2Frame0: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: "auto",
    width: "100%",
  },
  depth1Frame0: {
    paddingTop: 16,
    paddingBottom: Padding.p_5xs,
    position: "relative",
    top: 0,
    zIndex: 10
  },
  depth4Frame03: {
    borderRadius: Border.br_xs,
    overflow: "hidden",
    width: 280,
    height: 280
  },
  google: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
    alignSelf: "stretch",
  },
  depth4Frame04: {
    width: 173,
    height: "auto",
  },
  depth3Frame11: {
    height: "auto",
    marginTop: 12,
    paddingBottom: Padding.p_xs,
    width: "100%",
  },
  depth2Frame01: {
    left: 16,
  },
  depth2Frame1: {
    left: 201,
  },
  depth2Frame2: {
    left: 16,
  },
  depth2Frame3: {
    left: 201,
  },
  depth2Frame4: {
    left: 16,
  },
  depth2Frame5: {
    left: 201,
  },
  depth2Frame6: {
    left: 16,
  },
  depth2Frame7: {
    left: 201,
  },
  depth1Frame1: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
    paddingHorizontal: "2%"
  },
  depth4Frame019: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    width: "auto",
  },
  home: {
    color: Color.colorSteelblue_200,
  },
  depth5Frame02: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame1: {
    width: 'auto',
  },
  depth4Frame020: {
    borderRadius: 16,
    justifyContent: "center",
    width: 48,
  },
  partners: {
    color: Color.colorGray_400,
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.size_xs,
  },
  depth4Frame11: {
    width: 'auto',
  },
  depth3Frame19: {
    marginLeft: 8,
  },
  depth4Frame12: {
    width: 'auto',
  },
  depth4Frame13: {
    width: 'auto',
  },
  depth2Frame02: {
    height: 54,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    gap: 40
  },
  depth1Frame3: {
    borderStyle: "solid",
    borderColor: "#e8edf5",
    borderTopWidth: 1,
    height: "10%",
    width: "100%",
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    position: "relative",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  depth1Frame4: {
    height: 20,
    width: 390,
  },
  depth0Frame0: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  galileoDesign: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: "100%"
  },
});

export default BrandAssosciated;
