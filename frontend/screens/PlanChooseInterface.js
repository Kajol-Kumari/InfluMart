import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Depth1Frame7 from "../components/Depth1Frame7";
import Depth2Frame3 from "../components/Depth2Frame3";
import Depth2Frame2 from "../components/Depth2Frame2";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import PlanBox from "../shared/PlansBox";
import { getSubscriptionPlans, subscribe } from "../controller/subscriptionController";
import { generateSubscriptionDates } from "../util/subscriptionDate";

const PlanChooseInterface = ({ route, navigation }) => {
  const [plans, setPlans] = useState(false);
  const payload = route.params?.payload;
  const [planData, setPlanData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
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
    await subscribe(subscription, payload, navigation);
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
            depth4Frame0={require("../assets/depth-4-frame-019.png")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    width: 390,
  },
  innerContainer: {
    padding: Padding.p_base,
    alignItems: "center",
    height: "auto",
  },
  header: {
    marginVertical: Padding.p_xl,
    width: "90%",
  },
  headerText: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontFamily: FontFamily.workSansBold,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  subHeader: {
    marginBottom: Padding.p_xl,
    paddingHorizontal: Padding.p_xs,
  },
  subHeaderText: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.workSansRegular,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  planToggle: {
    flexDirection: "row",
    marginBottom: Padding.p_xl,
    justifyContent: "center",
    backgroundColor: "#F0F2F5",
    width: "99%",
    paddingVertical: 4,
    paddingHorizontal: Padding.p_xs,
    borderRadius: 12,
  },
  planButton: {
    width: 165,
    height: 40,
    backgroundColor: Color.colorWhitesmoke_300,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Padding.p_5xs,
    borderRadius: Border.br_xs,
    color: "#637587",
  },
  planText: {
    color: "#637587",
  },
  planActive: {
    color: "#121417",
    backgroundColor: "#FFFFFF",
  },
  planDetails: {
    width: "100%",
    marginBottom: Padding.p_xl,
  },
  checkoutButton: {
    width: 358,
    height: 40,
    backgroundColor: Color.colorPrimary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  checkoutButtonText: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.workSansBold,
    color: Color.colorWhite,
  },
  selectPlanButton: {
    backgroundColor: "#F0F2F5",
    borderRadius: 12,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    marginVertical: Padding.p_base,
    width: 260,
  },
  selectPlanButtonText: {
    color: "black",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansBold,
  },
});

export default PlanChooseInterface;
