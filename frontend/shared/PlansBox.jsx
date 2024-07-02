import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const PlanDetails = ({ duration, price, suggested }) => (
  <View>
    <View style={styles.planDetailsContainer}>
      <View style={styles.planTextContainer}>
        <Text style={styles.planDuration}>{duration}</Text>
        {suggested && (
          <View style={styles.suggestedTag}>
            <Text style={styles.suggestedText}>Suggested</Text>
          </View>
        )}
      </View>
    </View>
    <View style={styles.priceContainer}>
      <Text style={styles.planPrice}>{price}</Text>
      <Text style={styles.planDuration}>/month</Text>
    </View>
  </View>
);

const CheckoutButton = ({ onPress }) => (
  <TouchableOpacity style={styles.checkoutButton} onPress={onPress}>
    <Image
      style={styles.buttonIcon}
      contentFit="cover"
      source={require("../assets/depth-6-frame-01.png")}
    />
    <Text style={styles.checkoutText}>Checkout this plan</Text>
  </TouchableOpacity>
);

const PlanBox = ({duration,select,plan,suggested=false,setSelect,price}) => {
  const handleCheckout = () => {
    setSelect({duration:duration,price:price,plan:plan})
  };
  return (
    <View style={[styles.container, select?.duration==duration && styles.activeContainer ]}>
      <PlanDetails duration={duration} price={`$ ${price}`} suggested={suggested} />
      <CheckoutButton onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    width: 358,
    height: 178,
    padding: Padding.p_5xl,
    borderRadius: Border.br_xs,
    marginVertical: Padding.p_7xs
  },
  activeContainer: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
  },
  planDetailsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  planTextContainer: {
    width:"100%",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
  },
  planDuration: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
    color: Color.colorGray_300,
    width:"68%"
  },
  suggestedTag: {
    backgroundColor: Color.colorDodgerblue,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_10xs,
    borderRadius: Border.br_xs,
    marginLeft: Padding.p_xs,
  },
  suggestedText: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.colorWhite,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  planPrice: {
    fontSize: FontSize.size_17xl,
    letterSpacing: -1,
    lineHeight: 45,
    fontWeight: "900",
    fontFamily: FontFamily.workSansBlack,
    color: Color.colorGray_300,
    marginRight: Padding.p_xs,
  },
  checkoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    padding: Padding.p_base,
    borderRadius: Border.br_xs,
    width:"65%"
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: Padding.p_xs,
  },
  checkoutText: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.workSansRegular,
    color: Color.colorGray_300,
  },
});

export default PlanBox;
