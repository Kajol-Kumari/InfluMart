import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendCollabOpenRequest } from "../../controller/collabOpenController";
import { useAlert } from "../../util/AlertContext";
import ImageWithFallback from "../../util/ImageWithFallback";

const CampaignDetail = ({ route, navigation }) => {
  const { data } = route.params;
  const { showAlert } = useAlert();

  const handleApply = async () => {
    const influencerId = await AsyncStorage.getItem("influencerId");
    await sendCollabOpenRequest(
      influencerId,
      data.brandId,
      showAlert,
      navigation
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 24, height: 24 }}></View>
        <TouchableOpacity onPress={() => navigation.navigate("CollabPost")}>
          <Text style={styles.campaignDetails}>Campaign Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIcon}>
          <Image
            style={styles.icon}
            source={require("../../assets/collab/depth-5-frame-0.png")}
          />
        </TouchableOpacity>
      </View>
      {data?.imageSource == null ? (
        <ImageWithFallback
          imageStyle={styles.mainImage}
          image={data?.imageSource}
        />
      ) : (
        data?.imageSource && (
          <ImageWithFallback
            imageStyle={styles.mainImage}
            image={data?.imageSource}
          />
        )
      )}
      <Text style={styles.title}>{data?.brandName}</Text>
      <Text style={styles.description}>{data.brandDescription}</Text>
      <Text style={styles.description}>
        {data?.category != [] ? JSON.parse(data.category[0]).join(",") : ""}
      </Text>
      <Text style={styles.sectionHeader}>Requirements</Text>

      <View style={styles.requirement}>
        <Image
          style={styles.icon}
          source={require("../../assets/collab/depth-5-frame-01.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Campaign Type</Text>
          <Text style={styles.requirementDetail}>{data?.campaignType}</Text>
        </View>
      </View>

      <View style={styles.requirement}>
        <Image
          style={styles.icon}
          source={require("../../assets/collab/depth-5-frame-01.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Campaign Steps</Text>
          <Text style={styles.requirementDetail}>{data?.campaignSteps}</Text>
        </View>
      </View>

      <View style={styles.requirement}>
        <Image
          style={styles.icon}
          source={require("../../assets/collab/depth-5-frame-01.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Campaign Timeline</Text>
          <Text style={styles.requirementDetail}>
            {data?.campaignTimelines}
          </Text>
        </View>
      </View>

      <View style={styles.requirement}>
        <Image
          style={styles.icon}
          source={require("../../assets/collab/depth-5-frame-01.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Minimum Eligibility</Text>
          <Text style={styles.requirementDetail}>
            {data?.minEligibilityCriteria}
          </Text>
        </View>
      </View>

      <View style={styles.requirement}>
        <Image
          style={styles.icon}
          source={require("../../assets/collab/depth-5-frame-01.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Review Instructions</Text>
          <Text style={styles.requirementDetail}>
            {data.productReviewInstructions}
          </Text>
        </View>
      </View>

      <View style={styles.requirement}>
        <Image
          style={styles.icon}
          source={require("../../assets/collab/depth-5-frame-01.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Open Positions</Text>
          <Text style={styles.requirementDetail}>
            {data?.numberOfInfluencers}
          </Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Compensation</Text>

      <View style={styles.requirement}>
        <Image
          style={styles.icon}
          source={require("../../assets/collab/depth-4-frame-01.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Base Fee</Text>
          <Text
            style={styles.requirementDetail}
          >{`$ ${data.earningCapacity}`}</Text>
        </View>
      </View>

      <View style={styles.requirement}>
        <Image
          style={styles.icon}
          source={require("../../assets/collab/depth-5-frame-01.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Compensation Type</Text>
          <Text style={styles.requirementDetail}>
            {data?.compensationType ? data?.compensationType : "N/A"}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleApply()}>
        <View style={styles.footer}>
          <Text style={styles.applyNow}>Apply Now</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  campaignDetails: {
    fontSize: 18,
    fontWeight: "bold",
  },
  shareIcon: {
    padding: 10,
  },
  mainImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  requirement: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  requirementTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  requirementDetail: {
    fontSize: 14,
    color: "#555",
  },
  requirementPoints: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#0d7df2",
    padding: 10,
    borderRadius: 5,
  },
  applyNow: {
    fontSize: 16,
    color: "#fff",
  },
});

export default CampaignDetail;
