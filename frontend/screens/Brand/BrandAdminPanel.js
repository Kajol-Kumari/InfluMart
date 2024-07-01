import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "../../GlobalStyles";

const BrandAdminPanel = () => {
  const navigation = useNavigation();

  const menuOptions = [
     {
      label: "Help center",
      image: require("../../assets/depth-3-frame-1.png"),
      navigate: "InfluencerHelpCenterPage",
    },
    {
      label: "Contact us",
      image: require("../../assets/depth-3-frame-1.png"),
      navigate: "InfluencerContactUsPage",
    },
    {
      label: "Delete account",
      image: require("../../assets/depth-3-frame-1.png"),
      navigate: "BrandAccountDeletePage",
    },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.adminPanel}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("BrandProfile")}
            style={styles.iconButton}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../../assets/adminPanelBack.png")}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Account settings</Text>
          <View style={{width:20,height:20}}></View>
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionLabel}>Logout</Text>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate("BrandLogoutPage")}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionLabel}>Manage Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate("BrandManageAccountPage")}>
            <Image
              style={styles.optionImage}
              contentFit="cover"
              source={require("../../assets/depth-3-frame-1.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.supportContainer}>
          <Text style={styles.supportText}>Support</Text>
        </View>
        {menuOptions.map((option, index) => (
          <View key={index} style={styles.optionContainer}>
            <Text style={styles.optionLabel}>{option.label}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(option.navigate,{navigate:"BrandAdminPanel"})}>
              {option.image && (
                <Image
                  style={styles.optionImage}
                  contentFit="cover"
                  source={option.image}
                />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: Color.colorWhite,
  },
  adminPanel: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    width:"100%",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhite,
  },
  iconButton: {
    marginRight: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray,
  },
  supportContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhite,
  },
  supportText: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    lineHeight: 22,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhite,
  },
  optionLabel: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray,
  },
  logoutButton: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_base,
  },
  logoutButtonText: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  optionImage: {
    width: 28,
    height: 28,
    marginLeft: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default BrandAdminPanel;
