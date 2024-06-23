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
import { getSubscriptionPlans, subscribe } from "../../controller/subscriptionController";
import { generateSubscriptionDates } from "../../util/subscriptionDate";
import { PlanChooseInterfaceStyles } from "./PlanChooseInterface.scss";
import { useAlert } from "../../util/AlertContext";

const PlanChooseInterface = ({ route, navigation }) => {
  const [plans, setPlans] = useState(false);
  const payload = route.params?.payload;
  const [planData, setPlanData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { showAlert } = useAlert();
  const handleSelectPlan = async () => {
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
    await subscribe(subscription, payload, navigation,showAlert);
  };
  useEffect(() => {
    const getPlans = async () => {
      const data = await getSubscriptionPlans({
        platform: payload.follower.platform,
        followers: payload.follower.value,
      });
      setPlanData(data);
    };

    getPlans();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("InfluencerRegistrationForm")}
        >
          <Depth1Frame7
            depth4Frame0={require("../../assets/depth-4-frame-019.png")}
            requestDetails="Choose Your Plan"
            depth3Frame0BackgroundColor="#fff"
            requestDetailsWidth="auto"
            depth4Frame0FontFamily="WorkSans-Bold"
            depth4Frame0Color="#121417"
          />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.headerText}>{`Hulu (No Ads)`}</Text>
        </View>

        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>
            Enjoy our entire library, plus exclusive streaming access to the
            biggest winner movies.
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

        {!plans && planData && (
          <PlanBox
            setSelect={setSelectedPlan}
            select={selectedPlan}
            plan={"halfYearly"}
            duration={"6 months"}
            price={`$ ${planData?.halfYearly}`}
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
        <TouchableOpacity
          onPress={() => {
            handleSelectPlan();
          }}
        >
          <View style={styles.selectPlanButton}>
            <Text style={styles.selectPlanButtonText}>Select Plan</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(PlanChooseInterfaceStyles);

export default PlanChooseInterface;
