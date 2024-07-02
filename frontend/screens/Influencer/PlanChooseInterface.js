import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Depth1Frame7 from "../../components/Depth1Frame7";
import PlanBox from "../../shared/PlansBox";
import {
  getSubscriptionPlans,
  subscribe,
} from "../../controller/subscriptionController";
import { generateSubscriptionDates } from "../../util/subscriptionDate";
import { PlanChooseInterfaceStyles } from "./PlanChooseInterface.scss";
import { useAlert } from "../../util/AlertContext";
import {
  handlePayment,
  verifyPayment,
} from "../../controller/paymentController";

const PlanChooseInterface = ({ route, navigation }) => {
  const [plans, setPlans] = useState(false);
  const payload = route.params?.payload;
  const [planData, setPlanData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { showAlert } = useAlert();
  const [orderId, setOrderId] = useState(null);

  const initiatePayment = async () => {
    const _data = generateSubscriptionDates(selectedPlan?.duration);
    let subscription = {
      userName: payload.userName,
      plan: selectedPlan?.plan || "free",
      startDate: _data.startDate,
      endDate: _data.endDate,
      isFree: _data.isFree,
      amount: selectedPlan ? selectedPlan?.price : "",
      paymentMode: "",
      transactionDate: _data.transactionDate,
    };
    try {
      await handlePayment(subscription, payload,navigation, showAlert);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getPlans = async () => {
      const data = await getSubscriptionPlans(
        {
          platform: payload.follower.platform,
          followers: payload.follower.value,
        },
        showAlert
      );
      setPlanData(data);
    };

    getPlans();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("InfluencerRegistrationForm")}
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
            Join now to unlock exclusive brand collaborations and elevate your
            marketing game!
          </Text>
        </View>

        <View style={styles.planToggle}>
          <TouchableOpacity
            style={[styles.planButton, !plans && styles.planActive]}
            onPress={() => setPlans(false)}
          >
            <Text style={[plans && styles.planText]}>Monthly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPlans(true)}
            style={[styles.planButton, plans && styles.planActive]}
          >
            <Text style={[!plans && styles.planText]}>Yearly</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.planContainer}>
          {!plans && planData && (
            <PlanBox
              setSelect={setSelectedPlan}
              select={selectedPlan}
              plan={"halfYearly"}
              duration={"6 months"}
              price={`${planData?.halfYearly}`}
              suggested={true}
            />
          )}
          {!plans && planData && (
            <PlanBox
              setSelect={setSelectedPlan}
              select={selectedPlan}
              plan={"quarterly"}
              duration={"3 months"}
              price={`$ ${planData?.quarterly}`}
            />
          )}
          {plans && planData && (
            <PlanBox
              setSelect={setSelectedPlan}
              select={selectedPlan}
              plan={"annually"}
              duration={"1 year"}
              price={`$ ${planData?.annually}`}
            />
          )}
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(PlanChooseInterfaceStyles);

export default PlanChooseInterface;
