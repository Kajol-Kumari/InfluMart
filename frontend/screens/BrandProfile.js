import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import {
  getBrandCollaborationAnalytics,
  getBrandCollaborations,
  getBrandMinimumRequirements,
} from "../controller/collabrationController";
import { useAlert } from "../util/AlertContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { formatNumber } from "../helpers/GraphData";
import { BrandProfileStyles } from "./BrandProfile.scss";
import { getBrandProfile } from "../controller/brandController";

const BrandProfile = ({ navigation }) => {
  const { showAlert } = useAlert();
  const [brandId, setBrandId] = useState(null);
  const [token, setToken] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [minimumRequirements, setMinimumRequirements] = useState(null);
  const [collaborationCount, setCollaborationCount] = useState(0);
  const { width } = useWindowDimensions(); 
  const [brand, setBrand] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedBrandId = await AsyncStorage.getItem("brandId");
        const storedToken = await AsyncStorage.getItem("token");

        if (storedBrandId && storedToken) {
          setBrandId(storedBrandId);
          setToken(storedToken);
        } else {
          console.log("BrandId or token not found in AsyncStorage");
        }
      } catch (error) {
        console.error("Error fetching user data from AsyncStorage:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (brandId && token) {
      getBrandCollaborationAnalytics(brandId, showAlert)
        .then((data) => setAnalytics(data))
        .catch((error) =>
          console.error("Error fetching collaboration analytics:", error)
        );

      getBrandCollaborations(brandId, showAlert)
        .then((data) => setCollaborationCount(data.length))
        .catch((error) =>
          console.error("Error fetching collaborations:", error)
        );

      getBrandMinimumRequirements(brandId, showAlert)
        .then((data) => setMinimumRequirements(data))
        .catch((error) =>
          console.error("Error fetching minimum requirements:", error)
        );
        getBrandProfile(brandId, showAlert).then((data) => setBrand(data));
    }
  }, [brandId, token]);


  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginPageBrands")}
          >
            <View style={styles.headerContent}>
              <Image
                style={styles.backArrow}
                resizeMode="cover"
                source={require("../assets/depth-4-frame-Backarrow3x.png")}
              />
              <Text style={styles.headerTitle}>Profile</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.profileContainer]}>
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.profileImage}
                resizeMode="cover"
                source={brand?.profileUrl || require("../assets/blank-profile.png")}
              />
            </View>
            <View style={styles.profileInfoContainer}>
              <Text style={styles.brandName}>{brand?.name}</Text>
              <Text style={styles.brandDetails}>
              {brand?.category || "N/A"}
              </Text>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity style={[styles.button, styles.followButton]}>
                <Text style={styles.followButtonText}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.messageButton]}>
                <Text style={styles.buttonText}>inbox</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Campaign Insights</Text>
            <View style={styles.insightContainer}>
              <View style={styles.iconBg}>
                <Image
                  style={styles.insightIcon}
                  resizeMode="cover"
                  source={require("../assets/growth.png")}
                />
              </View>
              <View style={styles.insightDetails}>
                <Text style={styles.insightTitle}>Engagement Rate</Text>
                <Text style={styles.insightText}>Higher than average</Text>
                <Text style={styles.insightText}>
                  {analytics?.averageEngagementRate?`${analytics?.averageEngagementRate} %` : "N/A"}
                </Text>
              </View>
            </View>
            <View style={styles.insightContainer}>
              <View style={styles.iconBg}>
                <Image
                  style={styles.insightIcon}
                  resizeMode="cover"
                  source={require("../assets/growth.png")}
                />
              </View>
              <View style={styles.insightDetails}>
                <Text style={styles.insightTitle}>Post Frequency</Text>
                <Text style={styles.insightText}>Average</Text>
                <Text style={styles.insightText}>
                  {analytics?.averagePostFrequency?`${formatNumber(analytics?.averagePostFrequency)} posts per week`: "N/A"}
                </Text>
              </View>
            </View>
            <View style={styles.insightContainer}>
              <View style={styles.iconBg}>
                <Image
                  style={styles.insightIcon}
                  resizeMode="cover"
                  source={require("../assets/growth.png")}
                />
              </View>
              <View style={styles.insightDetails}>
                <Text style={styles.insightTitle}>Follower Growth</Text>
                <Text style={styles.insightText}>Higher than average</Text>
                <Text style={styles.insightText}>
                  {analytics?.averageGrowthValue ? `${analytics?.averageGrowthValue} %`: "N/A"}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Collaboration Requirements</Text>
            <View style={styles.requirementContainer}>
              <View style={styles.iconBg}>
                <Image
                  style={styles.requirementIcon}
                  resizeMode="cover"
                  source={require("../assets/Mini-follower.png")}
                />
              </View>
              <View style={styles.requirementDetails}>
                <Text style={styles.requirementTitle}>Minimum Followers</Text>
                <Text style={styles.requirementText}>
                  {minimumRequirements?.minimumFollowers ? `${formatNumber(minimumRequirements?.minimumFollowers)}`: "N/A"}
                </Text>
              </View>
            </View>
            <View style={styles.requirementContainer}>
              <View style={styles.iconBg}>
                <Image
                  style={styles.requirementIcon}
                  resizeMode="cover"
                  source={require("../assets/likes.png")}
                />
              </View>
              <View style={styles.requirementDetails}>
                <Text style={styles.requirementTitle}>Average Likes</Text>
                <Text style={styles.requirementText}>
                  {minimumRequirements?.minimumLikes ? `${formatNumber(minimumRequirements?.minimumLikes)}`: "N/A"}
                </Text>
              </View>
            </View>
            <View style={styles.requirementContainer}>
              <View style={styles.iconBg}>
                <Image
                  style={styles.requirementIcon}
                  resizeMode="cover"
                  source={require("../assets/post-frequency.png")}
                />
              </View>
              <View style={styles.requirementDetails}>
                <Text style={styles.requirementTitle}>Post Frequency</Text>
                <Text style={styles.requirementText}>
                  
                  {minimumRequirements?.minimumPostFrequency ? `At least ${formatNumber(minimumRequirements?.minimumPostFrequency)} posts per week`:"N/A"}
                  
                </Text>
              </View>
            </View>
          </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Collaboration Count</Text>
          <View style={styles.collabCountContainer}>
            <View style={styles.iconBg}>
              <Image
                style={styles.collabIcon}
                resizeMode="cover"
                source={require("../assets/collab_count.png")}
              />
            </View>
            <Text style={styles.collabCount}>
              {collaborationCount?`${formatNumber(collaborationCount)}`: "N/A"}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(BrandProfileStyles);

export default BrandProfile;
