import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import { Color, FontFamily, Border, Padding } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

const { width: screenWidth } = Dimensions.get("window");

const Depth1Frame18 = ({ isSelected, onSelect }) => {
  const handlePress = () => {
    onSelect();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.planContainer, isSelected && styles.selectedContainer]}>
        <View style={styles.priceContainer}>
          <Text style={[styles.priceText, styles.freeText]}>Free</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>0</Text>
          <Text style={[styles.amountText, styles.monthText]}>/month</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: responsiveHeight(20),
    justifyContent: "center",
    alignItems: "center",
  },
  planContainer: {
    width: screenWidth - responsiveWidth(12),
    backgroundColor: Color.colorWhitesmoke_200,
    borderColor: Color.colorGainsboro_500,
    borderWidth: 1,
    borderRadius: Border.br_xs,
    padding: responsiveFontSize(3),
  },
  selectedContainer: {
    borderColor: Color.colorPrimary, 
    backgroundColor: Color.colorPrimaryLight, 
  },
  priceContainer: {
    alignItems: "left",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    marginTop: responsiveHeight(1),
  },
  freeText: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(2),
    fontWeight: "700",
  },
  priceText: {
    fontSize: responsiveFontSize(1.8),
  },
  amountText: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansExtraBold,
    fontSize: responsiveFontSize(2.5),
    letterSpacing: -1,
    lineHeight: responsiveHeight(3),
    fontWeight: "800",
  },
  monthText: {
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(1.8),
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
  },
});

export default Depth1Frame18;
