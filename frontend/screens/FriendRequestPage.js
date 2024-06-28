import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import Depth1Frame7 from "../components/Depth1Frame7";
import { useNavigation } from "@react-navigation/native";

import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const FriendRequestPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.friendrequestpage}>
      {/* Navigate to Userprofile */}
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('UserProfile')}>

        <Depth1Frame7
          depth4Frame0={require("../assets/depth-4-frame-08.png")}
          requestDetails="Request Details"
        />
      </TouchableOpacity>
      <ScrollView style={{width:"100%"}}>
        <View style={styles.depth0Frame0}>
          <View style={styles.depth1Frame1}>
            <View style={styles.depth2Frame0}>
              <Text style={[styles.samanthaAdams, styles.samanthaFlexBox]}>
                Samantha Adams
              </Text>
            </View>
          </View>
          <View style={styles.depth1Frame2}>
            <View style={styles.depth2Frame0}>
              <Text style={[styles.samanthaWouldLike, styles.samanthaFlexBox]}>
                Samantha would like to collaborate with you on a project. Are you
                interested?
              </Text>
            </View>
          </View>
          <View style={styles.depth1Frame3}>
            <TouchableOpacity style={[styles.button, styles.rejectBtn]}>
              <Text style={styles.rejectText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.acceptBtn]}>
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.depth1Frame4} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  samanthaFlexBox: {
    textAlign: "left",
    color: Color.colorGray_400,
  },
  frameFlexBox: {
    justifyContent: "center",
    width: 85,
    height: 40,
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
    borderRadius: Border.br_xs
  },
  frameBg1: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  declineTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  frameLayout: {
    width: "50%",
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
  },
  frameBg: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  samanthaAdams: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  depth2Frame0: {
    alignSelf: "stretch",
  },
  depth1Frame1: {
    height: 'auto',
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    width: 'auto',
  },
  samanthaWouldLike: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
  },
  depth1Frame2: {
    paddingTop: Padding.p_9xs,
    height: 'auto',
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 'auto',
  },
  decline: {
    color: Color.colorGray_400,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  depth5Frame0: {
    width: 'auto',
    height: 'auto',
  },
  depth4Frame0: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
    justifyContent: "center",
    width: "50%",
    height: 40,
    flexDirection: "row",
  },
  depth3Frame0: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  collaborate: {
    color: Color.colorWhitesmoke_100,
  },
  depth5Frame01: {
    width: 'auto',
    height: 'auto',
  },
  depth4Frame01: {
    width: '100%',
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
    paddingVertical: 0,
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  depth2Frame02: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    gap: 16
  },
  depth1Frame3: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    height: "auto",
    paddingHorizontal: Padding.p_base,
    width: "100%",
    justifyContent:"space-between"
  },
  depth1Frame4: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth0Frame0: {
    height: "auto",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  friendrequestpage: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: "auto"
  },
  header: {
    width: "100%",
    height: "auto",
    position: "relative",
    top: 0,
    zIndex: 5
  },
  button: {
    width: "49%",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_base
  },
  rejectBtn: {
    backgroundColor: Color.colorAliceblue,
  },
  rejectText: {
    color: Color.colorGray_400,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  acceptBtn: {
    backgroundColor: "#1A80E5"
  },
  acceptText: {
    color: Color.colorWhite,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  }
});

export default FriendRequestPage;
