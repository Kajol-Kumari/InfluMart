import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Depth1Frame7 from "../../components/Depth1Frame7";
import { CollabOpenPaymentStyles } from "./CollabOpenPayment.scss";
import { useAlert } from "../../util/AlertContext";
import { handlePayment } from "../../controller/paymentController";
import Loader from "../../shared/Loader";
import CountryCurrencyPicker from "../../shared/CountryCurrencyPicker";

const CollabOpenPayment = ({ route, navigation }) => {
  const payload = route.params?.payload;
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [openCountryCode, setOpenCountryCode] = useState(false);
  const [currency, setCurrency] = useState({
    code: "IN",
    name: { en: "India" },
    dial_code: "+91",
    currency: "INR",
    subunits: 100,
  });

  const initiatePayment = async () => {
    setLoading(true);
    try {
      const subscription = {
        amount: "499",
        userName: payload?.brandName,
        notSave: true,
      };
      await handlePayment(subscription, {...payload,price:{currency:currency}}, navigation, showAlert);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <ScrollView style={styles.container}>
      {loading && <Loader loading={loading} />}
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => navigation.goBack()}
        >
          <Depth1Frame7
            depth4Frame0={require("../../assets/depth-4-frame-019.png")}
            requestDetails="Choose Your Plan"
            depth3Frame0BackgroundColor="#fff"
            requestDetailsWidth="100%"
            depth4Frame0FontFamily="WorkSans-Bold"
            depth4Frame0Color="#121417"
          />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.headerText}>{`Influmart Subscriptions`}</Text>
        </View>

        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>
            Share the Opportunity with Influencers. Get Worlds Best Influencers.
            Get Started Now with Influmart!
          </Text>
        </View>
        <View style={styles.planContainer}>
          <View style={styles.planDetailsContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.planPrice}>₹ {499}</Text>
              <Text style={styles.planDuration}>/post</Text>
            </View>
            <View style={styles.validityContainer}>
              <Text style={styles.validityHeader}>Validity: </Text>
              <Text style={styles.validityText}>1 Post</Text>
            </View>
            <TouchableOpacity onPress={()=>setOpenCountryCode(true)}>
              <View style={styles.validityContainer}>
                <Text style={styles.validityHeader}>Currency: </Text>
                <Text style={styles.validityText}>
                  {currency?.currency || "USD"}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.validityContainer}>
              <Text style={styles.star}>*</Text>
              <Text style={styles.require}>
                Please checkout to post Opportunity
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => {
            initiatePayment();
          }}
        >
          <View style={styles.selectPlanButton}>
            <Text style={styles.selectPlanButtonText}>Proceed to payment</Text>
          </View>
        </TouchableOpacity>
        <CountryCurrencyPicker
          show={openCountryCode}
          pickerButtonOnPress={(item) => {
            setCurrency(item);
            setOpenCountryCode(false);
          }}
          onBackdropPress={() => setOpenCountryCode(false)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(CollabOpenPaymentStyles);

export default CollabOpenPayment;
