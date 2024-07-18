import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Depth1Frame4 from "../components/Depth1Frame4";
import Depth1Frame3 from "../components/Depth1Frame3";
import Depth1Frame2 from "../components/Depth1Frame2";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient'
import ImageWithFallback from '../util/ImageWithFallback'
import {useAlert} from '../util/AlertContext'
import {getTopAccounts} from '../controller/homeController'

const Homepage = ({ route, navigation }) => {
  const [searchValue, setSearchValue] = React.useState("")
  const [viewWidth, setViewWidth] = React.useState(0)
  const showAlert=useAlert()
  const[topAccounts,setTopAccounts]=React.useState([])

  React.useEffect(()=>{
    async function fetchData(){
      const res=await getTopAccounts(showAlert)
      setTopAccounts(res)
    }
    fetchData()
  },[])

  const data = {
    features: [
      {
        title: "Find Influencers",
        desc: "Filter and sort based on campaign needs",
        image:require("../assets/home-page-cover.png")
      },
      {
        title: "Analyze Influencers",
        desc: "Make data-driven decisions",
        image:require("../assets/feature2.png")
      },
      {
        title: "Influencer Database",
        desc: "Curate lists and manage relationships",
        image:require("../assets/feature3.jpg")
      },
      {
        title: "Recruit Influencers",
        desc: "Find influencers interested in your brand",
        image:require("../assets/feature4.jpg")
      },
      {
        title: "Influencer Outreach",
        desc: "Data-driven communications",
        image:require("../assets/feature5.jpg")
      },
      {
        title: "Manage Campaigns",
        desc: "Complete oversight from start to finish",
        image:require("../assets/feature6.jpg")
      }
    ],
    ourPlatform: [
      {
        title: "Influencer Discover",
        desc: "Find the influencers that work for you",
        image:require("../assets/feature7.jpg")
      },
      {
        title: "Influencer Relationship Management",
        desc: "Your processes in one central hub",
        image:require("../assets/feature8.jpg")
      },
      {
        title: "Campaign Manager",
        desc: "We help your team do more",
        image:require("../assets/feature9.jpg")
      }
    ]
  }

  return (
    <View style={styles.homepage} onLayout={(evt) => {
      setViewWidth(evt.nativeEvent.layout.width)
    }}>
      <View style={[styles.depth0Frame0, styles.frameLayout1]}>
        <Depth1Frame4 isSearch={true} onChange={(value) => {
          setSearchValue(value)
        }} />
        <ScrollView style={{ marginBottom: 80 }}>
          <View style={styles.frameLayout}>
            <View style={styles.frameLayout}>
              <View style={[styles.depth3Frame0, styles.frameLayout]}>
                <Image
                  style={[styles.depth4Frame0, { height: viewWidth <= 375 ? 450 : viewWidth <= 550 ? 550 : viewWidth <= 768 ? 400 : 600 }]}
                  contentFit="cover"
                  source={require("../assets/home-page-cover.png")}
                />
                <LinearGradient style={styles.overlay} colors={['transparent', '#000']}>
                  <Text
                    style={[
                      styles.welcomeToInflumart,
                      styles.welcomeToInflumartFlexBox,
                    ]}
                  >
                    Welcome to Influmart
                  </Text>
                  <Text
                    style={[styles.anOnboardingPlatform, styles.registrationLayout]}
                  >
                    The world's premier marketplace for social media accounts.
                  </Text>
                  <TouchableOpacity style={{ width: 160 }} onPress={() => navigation.navigate('BrandorInfluencer')}>
                    <View style={[styles.getstartedbtn]}>
                      <Text
                        style={[
                          styles.brandRegistration, { fontSize: 14 }
                        ]}
                      >
                        Get Started
                      </Text>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame4}>
            <View style={styles.depth2Frame03}>
              <View style={styles.depth3FrameLayout}>
                <TouchableOpacity style={{ width: "100%" }} onPress={() => navigation.navigate('BrandRegistrationForm')}>
                  <View style={[styles.depth4Frame01, styles.depth4FrameLayout]}>
                    <View style={[styles.depth5Frame0, styles.frameBg1]}>
                      <View style={styles.depth2Frame01}>
                        <Text
                          style={[
                            styles.brandRegistration
                          ]}
                        >
                          Brand Registration
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
                <TouchableOpacity style={{ width: "100%" }} onPress={() => navigation.navigate('InfluencerRegistrationForm')}>
                  <View style={[styles.depth4Frame02, styles.frameBg]}>
                    <View style={[styles.depth5Frame01, styles.frameBg]}>
                      <View style={styles.depth2Frame01}>
                        <Text
                          style={[
                            styles.influencerRegistration,
                            styles.registrationTypo,
                          ]}
                        >
                          Influencer Registration
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame7}>
            <Text style={[styles.subtitle]}>
              Features
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                data?.features?.map((feature, index) => (
                  <Feature key={index} feature={feature} />
                ))
              }
            </ScrollView>
          </View>
          <View style={styles.depth1Frame7}>
            <Text style={[styles.subtitle]}>
              Our platform
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                data?.ourPlatform?.map((feature, index) => (
                  <Feature key={index} feature={feature} />
                ))
              }
            </ScrollView>
          </View>
          <View style={styles.depth1Frame7}>
            <Text style={[styles.subtitle]}>
              Who we serve
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Pressable style={[styles.whoweservebox]}>
                <Text style={styles.whoweservetitle}>FOR BRAND</Text>
                <Text style={styles.whoweserve}>Save Time. Get Results.</Text>
                <Text style={styles.whoweservedesc}>We offer tools designed to grow with your brand and support your influencer marketing strategy every step of the way.</Text>
              </Pressable>
              <Pressable style={[styles.whoweservebox]}>
                <Text style={styles.whoweservetitle}>FOR INFLUENCER</Text>
                <Text style={styles.whoweserve}>Robust Tools to Boost Client Reach.</Text>
                <Text style={styles.whoweservedesc}>Your clients want results, and we can help you deliver. Access helpful tools to explore new influencer profiles and improve ROI.</Text>
              </Pressable>
            </ScrollView>
          </View>
          <View style={styles.depth1Frame7}>
            <Text style={[styles.subtitle]}>
              Top Accounts
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                topAccounts&&topAccounts?.map((account,index)=>{
                  return(
                    <AccountProfile account={account} key={index}/>
                  )
                })
              }
            </ScrollView>
          </View>
        </ScrollView>
        <Depth1Frame
          depth5Frame0={require("../assets/depth-5-frame-01.png")}
          depth5Frame01={require("../assets/depth-5-frame-02.png")}
          search="Influencers"
          depth5Frame02={require("../assets/depth-5-frame-03.png")}
          myBrands="Brands"
          depth5Frame03={require("../assets/depth-5-frame-04.png")}
          style={styles.bottomBar}
        />
      </View>
    </View>
  );
};

const Feature = ({ feature }) => {
  return (
    <Pressable style={styles.featureContainer}>
      <Image contentFit="cover"
        source={feature?.image} style={styles.featureImage} />
      <Text style={styles.featureName}>{feature?.title}</Text>
      <Text style={styles.featureDesc}>{feature?.desc}</Text>
    </Pressable>
  )
}

const AccountProfile=({account})=>{
  return(
    <Pressable style={styles.accountProfileContainer}>
      <ImageWithFallback imageStyle={styles.accountProfile} image={account?.profileUrl}/>
      <Text style={styles.featureName}>@{account?.name}</Text>
      <Text style={styles.whoweservetitle}>{account?.accountType}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    width: "100%",
    height: "100%"
  },
  frameLayout1: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  frameLayout: {
    height: "auto",
    width: "100%",
  },
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: "100%",
  },
  welcomeToInflumartFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  registrationLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth4FrameLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_xs,
    height: 48,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  frameBg1: {
    backgroundColor: Color.colorRoyalblue,
    overflow: "hidden",
  },
  registrationTypo: {
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
  },
  depth3FrameLayout: {
    height: 48,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base
  },
  frameBg: {
    backgroundColor: Color.colorGhostwhite,
    overflow: "hidden",
  },
  depth4Frame0: {
    width: "100%"
  },
  depth3Frame0: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center"
  },
  welcomeToInflumart: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -1,
    lineHeight: 35,
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    textAlign: "left",
  },
  depth2Frame01: {
    alignSelf: "stretch",
  },
  depth1Frame2: {
    height: "auto",
    paddingTop: Padding.p_xl,
  },
  anOnboardingPlatform: {
    fontFamily: FontFamily.lexendRegular,
    textAlign: "left",
    color: Color.colorWhite,
  },
  depth1Frame3: {
    height: 'auto',
    paddingTop: Padding.p_9xs,
  },
  brandRegistration: {
    color: Color.colorWhite,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
  },
  depth5Frame0: {
    width: '100%',
    height: 24,
  },
  depth4Frame01: {
    backgroundColor: Color.colorRoyalblue,
    overflow: "hidden",
  },
  influencerRegistration: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorGray_500,
    letterSpacing: 0,
  },
  depth5Frame01: {
    width: 'auto',
    height: 24,
  },
  depth4Frame02: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_xs,
    height: 48,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  depth3Frame1: {
    marginTop: 12,
  },
  depth2Frame03: {
    height: "auto",
    alignItems: "center",
    width: "100%",
    marginTop:40,
    paddingBottom:30
  },
  depth1Frame4: {
    height: 132,
    paddingVertical:30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  depth2Frame04: {
    height: 23,
  },
  depth1Frame7: {
    height: "auto",
    paddingVertical: Padding.p_base,
    flexDirection: "column",
    gap: 12,
    paddingHorizontal: Padding.p_base,
    width: '100%',
  },
  depth2Frame05: {
    width: "auto",
    height: 23,
  },
  depth1Frame14: {
    height: 20,
  },
  depth0Frame0: {
    height: "100%",
    overflow: "hidden",
  },
  homepage: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: Color.colorWhite,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: Padding.p_base,
    gap: 16,
    paddingBottom: 40
  },
  whyInflumart: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
    gap: 16,
    paddingVertical: 48
  },
  getstartedbtn: {
    width: "auto",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_base
  },
  subtitle: {
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg
  },
  featureImage: {
    width: "100%",
    height: 150,
    borderRadius: Border.br_xs
  },
  featureName: {
    marginTop: 8,
    fontFamily: FontFamily.lexendMedium,
    fontSize: 16,
    width: "100%"
  },
  featureDesc: {
    fontFamily: FontFamily.lexendRegular,
    fontSize: 14,
    color: Color.colorSlategray_300,
    width: "100%"
  },
  featureContainer: {
    width: 300,
    paddingHorizontal: Padding.p_xs,
    gap: 6,
    paddingVertical: Padding.p_base,
    height: "auto",
    marginEnd: Padding.p_xl
  },
  whoweservetitle: {
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorRoyalblue,
    fontSize: FontSize.size_xs
  },
  whoweserve: {
    fontFamily: FontFamily.lexendMedium,
    fontSize: FontSize.size_3xl
  },
  whoweservedesc: {
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_base,
    fontWeight: "100",
    lineHeight: 24
  },
  whoweservebox: {
    backgroundColor:Color.colorWhitesmoke_500,
    padding:Padding.p_xl,
    borderRadius:Border.br_base,
    width:320,
    gap:14,
    paddingVertical:40,
    marginEnd:40
  },
  learnmoretext:{
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_base,
    fontWeight: "600",
  },
  accountProfileContainer:{
    width:200,
    height:"auto",
    marginHorizontal:Padding.p_base,
    gap:6
  },
  accountProfile:{
    width:200,
    height:200,
    borderRadius:Border.br_base
  }
});

export default Homepage;
