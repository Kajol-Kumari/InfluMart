import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Image } from "expo-image";

const CampaignDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={{width:24,height:24}}></View>
        <Text style={styles.campaignDetails}>Campaign Details</Text>
        <TouchableOpacity style={styles.shareIcon}>
          <Image style={styles.icon} source={require("../../assets/collab/depth-5-frame-0.png")} />
        </TouchableOpacity>
      </View>
      <Image style={styles.mainImage} source={"../../assets/collab/depth-4-frame-0.png"} />
      <Text style={styles.title}>Sneaker Brand X - Campaign 2023</Text>
      <Text style={styles.description}>
        We're looking for influencers to promote our new line of sneakers. The campaign is open to all genders and ages.
      </Text>
      <Text style={styles.sectionHeader}>Requirements</Text>

      <View style={styles.requirement}>
        <Image style={styles.icon} source={require("../../assets/collab/depth-5-frame-01.png")} />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Content</Text>
          <Text style={styles.requirementDetail}>Post on Instagram</Text>
          <Text style={styles.requirementDetail}>Create 1 in-feed post and 1 story</Text>
        </View>
        <Text style={styles.requirementPoints}>10</Text>
      </View>

      <View style={styles.requirement}>
        <Image style={styles.icon} source={require("../../assets/collab/depth-5-frame-01.png")} />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Disclosure</Text>
          <Text style={styles.requirementDetail}>Sponsored</Text>
          <Text style={styles.requirementDetail}>Must include #sponsored</Text>
        </View>
        <Text style={styles.requirementPoints}>10% off</Text>
      </View>

      <View style={styles.requirement}>
        <Image style={styles.icon} source={require("../../assets/collab/depth-5-frame-01.png")} />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Branding</Text>
          <Text style={styles.requirementDetail}>Mention</Text>
          <Text style={styles.requirementDetail}>Tag @brandx</Text>
        </View>
        <Text style={styles.requirementPoints}>10</Text>
      </View>

      <View style={styles.requirement}>
        <Image style={styles.icon} source={require("../../assets/collab/depth-5-frame-01.png")} />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>CTA</Text>
          <Text style={styles.requirementDetail}>Link in Bio</Text>
          <Text style={styles.requirementDetail}>Include swipe up link</Text>
        </View>
        <Text style={styles.requirementPoints}>10% off</Text>
      </View>

      <Text style={styles.sectionHeader}>Compensation</Text>

      <View style={styles.requirement}>
        <Image style={styles.icon} source={require("../../assets/collab/depth-4-frame-01.png")} />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Base Fee</Text>
          <Text style={styles.requirementDetail}>$500</Text>
        </View>
      </View>

      <View style={styles.requirement}>
        <Image style={styles.icon} source={require("../../assets/collab/depth-5-frame-01.png")} />
        <View style={styles.textContainer}>
          <Text style={styles.requirementTitle}>Bonus</Text>
          <Text style={styles.requirementDetail}>Free products</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.applyNow}>Apply Now</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  campaignDetails: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shareIcon: {
    padding: 10,
  },
  mainImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: 'bold',
  },
  requirementDetail: {
    fontSize: 14,
    color: '#555',
  },
  requirementPoints: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#0d7df2',
    padding: 10,
    borderRadius: 5,
  },
  applyNow: {
    fontSize: 16,
    color: '#fff',
  },
});

export default CampaignDetail;