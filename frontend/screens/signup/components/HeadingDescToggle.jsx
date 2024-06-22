import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import { Color, Padding, FontFamily, FontSize, Border } from "../../../GlobalStyles";

const HeadingDescToggle = ({ heading, desc=null, toggleOn, setToggleOn }) => {

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{heading}</Text>
        {desc && <Text style={styles.description}>{desc}</Text>}
      </View>
      <SwitchToggle
        switchOn={toggleOn}
        onPress={() => setToggleOn(!toggleOn)}
        circleColorOff={Color.colorGray_100}
        circleColorOn={Color.colorWhite}
        backgroundColorOn={Color.colorSteelblue_100}
        backgroundColorOff={Color.colorAliceblue}
        containerStyle={styles.toggleContainer}
        circleStyle={styles.toggleCircle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 360,
    marginVertical: 10,
  },
  textContainer: {
    flex: 1,
  },
  heading: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansMedium,
    color: Color.colorGray_100,
  },
  description: {
    fontSize: FontSize.size_sm,
    marginTop: 5,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorSlategray_100,
  },
  toggleContainer: {
    width: 51,
    height: 31,
    borderRadius: Border.br_base_5,
    padding: 5,
  },
  toggleCircle: {
    width: 24,
    height: 24,
    borderRadius: Border.br_base_5,
  },
});

export default HeadingDescToggle;
