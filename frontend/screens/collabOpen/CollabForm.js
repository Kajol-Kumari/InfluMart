import * as React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { RadioButton, Checkbox } from "react-native-paper";
import { createCollabPost } from "../../controller/collabOpenController";
import { useAlert } from "../../util/AlertContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Color } from "../../GlobalStyles";
import { handleImageSelection } from "../../util/imagePickerUtil";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MultipleSelectList from "../../shared/MultiSelect";
import MultiDropDown from "../../shared/MultiDropDown";

const CollabForm = ({ navigation }) => {
  const [collabPostData, setCollabPostData] = React.useState({
    campaignTimelines: "",
    minEligibilityCriteria: "",
    postInfo: "",
    productReviewInstructions: "",
    campaignSteps: "",
    brandName: "",
    numberOfInfluencers: "",
    brandDescription: "",
  });
  const [location, setLocation] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [money, setMoney] = React.useState({ min: 0, max: 0 });
  const [photo, setPhoto] = React.useState(null);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [campansationType, setCampansationType] = React.useState("Payout");
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [showStartPicker, setShowStartPicker] = React.useState(false);
  const [showEndPicker, setShowEndPicker] = React.useState(false);
  const[campaignTypeDropDown,setCampaignTypeDropdown]=React.useState(false)
  const data = [
    { key: "grocery", value: "Grocery" },
    { key: "electronics", value: "Electronics" },
    { key: "fashion", value: "Fashion" },
    { key: "toys", value: "Toys" },
    { key: "beauty", value: "Beauty" },
    { key: "home-decoration", value: "Home Decoration" },
    { key: "fitness", value: "Fitness" },
    { key: "education", value: "Education" },
    { key: "others", value: "Others" },
  ];
  const { showAlert } = useAlert();
  const handleInputChange = (field, value) => {
    setCollabPostData({ ...collabPostData, [field]: value });
  };
  const handleBackPress = async () => {
    const brandId = await AsyncStorage.getItem("brandId");
    if (brandId) navigation.navigate("BrandProfile");
    else navigation.navigate("UserProfile");
  };

  const handleImagePick = async (type) => {
    const result = await handleImageSelection(type);

    if (result.canceled) {
      if (result.error) {
        showAlert("Alert", result.error);
      }
      return;
    }

    setPhoto(result);
    setSelectedImage(result.uri);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const uri = URL.createObjectURL(file);
      setSelectedImage(uri);
    }
  };

  const handleNextPress = async () => {
    const brandId = await AsyncStorage.getItem("brandId");
    const data = {
      ...collabPostData,
      brandId: brandId,
      image: photo,
      compensationType: campansationType,
      postInfo: JSON.stringify(location),
      earningCapacity: money,
      campaignTimelines: `${startDate.toDateString()} - ${endDate.toDateString()}`,
      campaignType: JSON.stringify(selected),
    };
    navigation.navigate("CollabOpenPayment", { payload: data });
  };
  const formatDate = (date) => {
    const options = { month: "long", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleCheckboxChange = (value) => {
    if (location.includes(value)) {
      setLocation(location.filter((item) => item !== value));
    } else {
      setLocation([...location, value]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {Platform.OS === "web" && (
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      )}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            style={styles.backButton}
            source={require("../../assets/depth-4-frame-07.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create a Campaign</Text>
        <View style={{ width: 24, height: 24 }}></View>
      </View>
      <View style={[styles.inputGroup, { height: "auto", zIndex: 12 }]}>
        <Text style={styles.label}>Campaign Type</Text>
        <MultiDropDown
          name={selected?.join(", ")}
          items={data}
          placeholder={"Select option"}
          icon={"none"}
          dropDownOptionStyle={{
            width: "100%",
            paddingVertical: 16,
          }}
          dropDownContainerStyle={{ width: "100%" }}
          dropDownItemsStyle={{ width: "100%", top: "100%" }}
          titleStyle={{ paddingStart: 12, color: "#4F7A94" }}
          selectedValue={selected}
          setSelectedValues={setSelected}
          close={campaignTypeDropDown}
          setClose={setCampaignTypeDropdown}
        />

      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Earning Capacity</Text>
        <View style={styles.dateInputGroup}>
          <TextInput
            style={styles.dateInput}
            placeholder="$1,000"
            placeholderTextColor="#4F7096"
            onChangeText={(text) => setMoney({ ...money, min: parseInt(text) })}
          />
          <Text>to</Text>
          <TextInput
            style={styles.dateInput}
            placeholder="$2,000"
            placeholderTextColor="#4F7096"
            onChangeText={(text) => setMoney({ ...money, max: parseInt(text) })}
          />
        </View>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Timeline</Text>
        {Platform.OS === "web" ? (
          <View style={styles.dateInputGroup}>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MMMM dd, yyyy"
              customInput={<TextInput style={styles.dateInput} />}
              className="react-datepicker"
            />
            <Text style={styles.dateText}>to</Text>
            <DatePicker
              showIcon
              className="react-datepicker"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="MMMM dd, yyyy"
              customInput={<TextInput style={styles.dateInput} />}
            />
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={styles.mobiledateInput}
              onPress={() => setShowStartPicker(true)}
            >
              <Text style={styles.dateText}>
                {formatDate(startDate)} - {formatDate(endDate)}
              </Text>
            </TouchableOpacity>
            {showStartPicker && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display="default"
                onChange={(event, date) => {
                  setShowStartPicker(false);
                  if (date) {
                    setStartDate(date);
                    setShowEndPicker(true);
                  }
                }}
              />
            )}
            {showEndPicker && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={(event, date) => {
                  setShowEndPicker(false);
                  if (date) {
                    setEndDate(date);
                    handleInputChange(
                      "campaignTimelines",
                      `${formatDate(startDate)} - ${formatDate(date)}`
                    );
                  }
                }}
              />
            )}
          </>
        )}
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Eligibility</Text>
        <TextInput
          style={styles.input}
          placeholder="100,000 followers"
          placeholderTextColor="#4F7096"
          onChangeText={(text) =>
            handleInputChange("minEligibilityCriteria", text)
          }
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Posting Location</Text>
        <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
          <View style={styles.radioButton}>
            <Checkbox
              status={location.includes("instagram") ? "checked" : "unchecked"}
              onPress={() => handleCheckboxChange("instagram")}
            />
            <Text style={styles.radioButtonLabel}>Instagram</Text>
          </View>
          <View style={styles.radioButton}>
            <Checkbox
              status={location.includes("youtube") ? "checked" : "unchecked"}
              onPress={() => handleCheckboxChange("youtube")}
            />
            <Text style={styles.radioButtonLabel}>YouTube</Text>
          </View>
          <View style={styles.radioButton}>
            <Checkbox
              status={location.includes("facebook") ? "checked" : "unchecked"}
              onPress={() => handleCheckboxChange("facebook")}
            />
            <Text style={styles.radioButtonLabel}>Facebook</Text>
          </View>
        </View>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Product Tagging</Text>
        <TextInput
          style={styles.inputLarge}
          placeholder="Details about product tagging"
          placeholderTextColor="#4F7096"
          multiline={true}
          onChangeText={(text) =>
            handleInputChange("productReviewInstructions", text)
          }
          onFocus={()=>{setCampaignTypeDropdown(false)}}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Campaign Steps</Text>
        <TextInput
          style={styles.inputLarge}
          placeholder="Steps to follow for the campaign"
          placeholderTextColor="#4F7096"
          multiline={true}
          onChangeText={(text) => handleInputChange("campaignSteps", text)}
          onFocus={()=>{setCampaignTypeDropdown(false)}}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Brand Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Brand Name"
          placeholderTextColor="#4F7096"
          onChangeText={(text) => handleInputChange("brandName", text)}
          onFocus={()=>{setCampaignTypeDropdown(false)}}
        />
      </View>
      <TouchableOpacity onPress={() => handleImagePick("library")}>
        {selectedImage ? (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: selectedImage }}
              style={styles.brandImage}
              contentFit="cover"
            />
          </View>
        ) : (
          <View style={styles.uploadImageContainer}>
            <Text style={styles.buttonText}>Upload Photo</Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Influencers to Hire</Text>
        <TextInput
          style={styles.input}
          placeholder="5"
          placeholderTextColor="#4F7096"
          onChangeText={(text) =>
            handleInputChange("numberOfInfluencers", text)
          }
          onFocus={()=>{setCampaignTypeDropdown(false)}}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>compensation Type</Text>
        <RadioButton.Group
          onValueChange={(value) => setCampansationType(value)}
          value={campansationType}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, flexDirection: "row", gap: 10 }}>
            <View style={styles.radioButton}>
              <RadioButton value="Payout" />
              <Text style={styles.radioButtonLabel}>Payout</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="Barter" />
              <Text style={styles.radioButtonLabel}>Barter</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="Cashback" />
              <Text style={styles.radioButtonLabel}>Cashback</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="Voucher" />
              <Text style={styles.radioButtonLabel}>Voucher</Text>
            </View>
          </ScrollView>
        </RadioButton.Group>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Brand Description</Text>
        <TextInput
          style={styles.inputLarge}
          placeholder="Description of the brand"
          placeholderTextColor="#4F7096"
          multiline={true}
          onChangeText={(text) => handleInputChange("brandDescription", text)}
          onFocus={()=>{setCampaignTypeDropdown(false)}}
        />
      </View>
      <TouchableOpacity onPress={handleNextPress}>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Next: Review & Publish</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  dateInputGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#E8EDF2",
    padding: 15,
    borderRadius: 10,
  },
  dateInput: {
    backgroundColor: "#E8EDF2",
    fontSize: 16,
    color: "#0D141C",
    width: 130,
  },
  mobiledateInput: {
    width: "100%",
    backgroundColor: "#E8EDF2",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  backButton: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0D141C",
  },
  inputGroup: {
    paddingHorizontal: 20,
    marginBottom: 20,
    zIndex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "0D141C",
    marginBottom: 5,
    zIndex: -10,
  },
  input: {
    backgroundColor: "#E8EDF2",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    color: "#0D141C",
    zIndex: -10,
  },
  inputLarge: {
    backgroundColor: "#E8EDF2",
    padding: 15,
    borderRadius: 10,
    height: 100,
    fontSize: 16,
    color: "#0D141C",
    zIndex: -10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  uploadImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8EDF2",
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
    height: 200,
  },
  brandImage: {
    width: "90%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  footer: {
    alignItems: "center",
    backgroundColor: Color.colorRoyalblue,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  radioButtonLabel: {
    fontSize: 16,
    color: "#4F7096",
  },
  footerText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});

export default CollabForm;
