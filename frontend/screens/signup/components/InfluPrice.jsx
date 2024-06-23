import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../../../GlobalStyles";

const InfluPrice = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.freeText}>Free</Text>
          </View>
        </View>
        <View style={[styles.row, styles.marginTop]}>
          <View style={styles.cell}>
            <Text style={styles.priceText}>0</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.monthText}>/month</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 143,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "auto",
  },
  innerContainer: {
    width: '100%',
    height: 119,
    borderColor: Color.colorGainsboro_500,
    borderWidth: 1,
    borderRadius: Border.br_xs,
    padding: Padding.p_5xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  freeText: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorGray_100,
    textAlign: 'left',
  },
  priceText: {
    fontSize: FontSize.size_17xl,
    lineHeight: 45,
    fontWeight: '800',
    fontFamily: FontFamily.plusJakartaSansExtraBold,
    color: Color.colorGray_100,
    textAlign: 'left',
  },
  monthText: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorGray_100,
    textAlign: 'left',
  },
  marginTop: {
    marginTop: 4,
  },
});

export default InfluPrice;
