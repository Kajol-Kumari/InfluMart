import * as React from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, Image } from "react-native";

const CollabForm = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create a Campaign</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Campaign Type</Text>
        <TextInput
          style={styles.input}
          placeholder="Fashion, Beauty, Lifestyle"
          placeholderTextColor="#4F7096"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Earning Capacity</Text>
        <TextInput
          style={styles.input}
          placeholder="$1,000 - $2,000"
          placeholderTextColor="#4F7096"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Timeline</Text>
        <TextInput
          style={styles.input}
          placeholder="June 14, 2023 - June 20, 2023"
          placeholderTextColor="#4F7096"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Eligibility</Text>
        <TextInput
          style={styles.input}
          placeholder="100,000 followers"
          placeholderTextColor="#4F7096"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Posting Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Instagram, Facebook, Twitter"
          placeholderTextColor="#4F7096"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Product Tagging</Text>
        <TextInput
          style={styles.inputLarge}
          placeholder="Details about product tagging"
          placeholderTextColor="#4F7096"
          multiline={true}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Campaign Steps</Text>
        <TextInput
          style={styles.inputLarge}
          placeholder="Steps to follow for the campaign"
          placeholderTextColor="#4F7096"
          multiline={true}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Brand Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Brand Name"
          placeholderTextColor="#4F7096"
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.brandImage}
          source={require("../assets/depth-4-frame-01.png")}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Influencers to Hire</Text>
        <TextInput
          style={styles.input}
          placeholder="5"
          placeholderTextColor="#4F7096"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Brand Description</Text>
        <TextInput
          style={styles.inputLarge}
          placeholder="Description of the brand"
          placeholderTextColor="#4F7096"
          multiline={true}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Next: Review & Publish</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0D141C',
  },
  inputGroup: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4F7096',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#E8EDF2',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#0D141C',
  },
  inputLarge: {
    backgroundColor: '#E8EDF2',
    padding: 15,
    borderRadius: 10,
    height: 100,
    fontSize: 16,
    color: '#0D141C',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  brandImage: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#1a78e6',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default CollabForm;
