import * as React from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createCollabPost } from "../../controller/collabOpenController";
import { useAlert } from "../../util/AlertContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Color} from '../../GlobalStyles'

const CollabForm = ({navigation}) => {
  const [collabPostData, setCollabPostData] = React.useState({
    campaignType: '',
    earningCapacity: '',
    campaignTimelines: '',
    minEligibilityCriteria: '',
    postInfo: '',
    productReviewInstructions: '',
    campaignSteps: '',
    brandName: '',
    numberOfInfluencers: '',
    brandDescription: '',
  });
  const {showAlert} = useAlert()
  const handleInputChange = (field, value) => {
    setCollabPostData({ ...collabPostData, [field]: value });
  };
  const handleBackPress = async () => {
    const brandId = await AsyncStorage.getItem("brandId")
    if(brandId)
      navigation.navigate("BrandProfile")
    else
      navigation.navigate("UserProfile")
  }

  const handleNextPress = async () => {
    const brandId = await AsyncStorage.getItem("brandId")
    const data = {...collabPostData,brandId:brandId}
    await createCollabPost(data, showAlert,navigation);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            style={styles.backButton}
            source={require("../../assets/depth-4-frame-07.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create a Campaign</Text>
        <View style={{width:24,height:24}}></View>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Campaign Type</Text>
        <TextInput
          style={styles.input}
          placeholder="Fashion, Beauty, Lifestyle"
          placeholderTextColor="#4F7096"
          onChangeText={(text) => handleInputChange('campaignType', text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Earning Capacity</Text>
        <TextInput
          style={styles.input}
          placeholder="$1,000 - $2,000"
          placeholderTextColor="#4F7096"
          onChangeText={(text) => handleInputChange('earningCapacity', text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Timeline</Text>
        <TextInput
          style={styles.input}
          placeholder="June 14, 2023 - June 20, 2023"
          placeholderTextColor="#4F7096"
          onChangeText={(text) => handleInputChange('campaignTimelines', text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Eligibility</Text>
        <TextInput
          style={styles.input}
          placeholder="100,000 followers"
          placeholderTextColor="#4F7096"
          onChangeText={(text) => handleInputChange('minEligibilityCriteria', text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Posting Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Instagram, Facebook, Twitter"
          placeholderTextColor="#4F7096"
          onChangeText={(text) => handleInputChange('postInfo', text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Product Tagging</Text>
        <TextInput
          style={styles.inputLarge}
          placeholder="Details about product tagging"
          placeholderTextColor="#4F7096"
          multiline={true}
          onChangeText={(text) => handleInputChange('productReviewInstructions', text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Campaign Steps</Text>
        <TextInput
          style={styles.inputLarge}
          placeholder="Steps to follow for the campaign"
          placeholderTextColor="#4F7096"
          multiline={true}
          onChangeText={(text) => handleInputChange('campaignSteps', text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Brand Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Brand Name"
          placeholderTextColor="#4F7096"
          onChangeText={(text) => handleInputChange('brandName', text)}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.brandImage}
          source={""}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Influencers to Hire</Text>
        <TextInput
          style={styles.input}
          placeholder="5"
          placeholderTextColor="#4F7096"
          onChangeText={(text) => handleInputChange('numberOfInfluencers', text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Brand Description</Text>
        <TextInput
          style={styles.inputLarge}
          placeholder="Description of the brand"
          placeholderTextColor="#4F7096"
          multiline={true}
          onChangeText={(text) => handleInputChange('brandDescription', text)}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleNextPress}>
          <Text style={styles.footerText}>Next: Review & Publish</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    width: 24,
    height: 24,
    marginRight: 10,
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
    color: '0D141C',
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
    backgroundColor: Color.colorRoyalblue,
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