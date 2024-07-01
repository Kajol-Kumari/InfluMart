import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useAlert } from "../../../util/AlertContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Color, Padding, FontFamily, FontSize, Border } from "../../../GlobalStyles";

const FormField = ({
  label,
  value,
  setValue,
  secureTextEntry = false,
  showPassword,
  setShowPassword,
}) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={secureTextEntry}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
        placeholder={label}
        secureTextEntry={secureTextEntry && !showPassword}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.password}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const BrandManageAccount = ({ route, navigation }) => {
  const { showAlert } = useAlert();
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ScrollView style={{ backgroundColor: Color.colorWhite }}>
        <View style={styles.influencerRegistrationForm}>
          <TouchableOpacity
            onPress={() => navigation.navigate("BrandAdminPanel")}
          >
            <View style={styles.header}>
              <Image
                style={styles.headerNavigation}
                resizeMode="cover"
                source={require("../../../assets/depth-4-frame-Backarrow3x.png")}
              />
              <Text style={styles.headerText}>Manage Account</Text>
              <View style={styles.headerNavigation} />
            </View>
          </TouchableOpacity>

          <FormField label="Email" value={email} setValue={setEmail} />
          <FormField
            label="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <FormField label="Username" value={username} setValue={setUsername} />

          
          <TouchableOpacity
            disabled={!isFormValid}
            style={[
              styles.selectPlanButton,
              !isFormValid && styles.selectPlanButtonDisabled,
            ]}
          >
            <View>
              <Text
                style={[
                  styles.selectPlanButtonText,
                  !isFormValid && styles.selectPlanButtonDisabledText,
                ]}
              >
                Update Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    influencerRegistrationForm: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: "100%",
      padding: Padding.p_base,
    },
    header: {
      paddingVertical: Padding.p_base,
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    headerText: {
      fontSize: FontSize.size_lg,
      lineHeight: 23,
      color: Color.colorGray_100,
      fontFamily: FontFamily.plusJakartaSansBold,
    },
    headerNavigation: {
      height: 24,
      width: 24,
    },
    fieldContainer: {
      marginVertical: Padding.p_xs,
    },
    fieldLabel: {
      fontFamily: FontFamily.plusJakartaSansMedium,
      fontWeight: "500",
      fontSize: FontSize.size_base,
      color: Color.colorGray_100,
    },
    textInput: {
      borderRadius: Border.br_xs,
      backgroundColor: Color.colorAliceblue,
      padding: Padding.p_base,
      marginTop: Padding.p_5xs,
      color: "#4F7A94",
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.plusJakartaSansRegular,
    },
    sectionHeader: {
      marginVertical: Padding.p_base,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: Padding.p_xs,
    },
    icon: {
      width: 28,
      height: 28,
      marginLeft: 16,
    },
    sectionHeaderText: {
      fontSize: FontSize.size_base,
      lineHeight: 28,
      color: Color.colorGray_100,
      fontFamily: FontFamily.plusJakartaSansBold,
    },
    selectPlanButton: {
      backgroundColor: Color.colorSteelblue_100,
      borderRadius: Border.br_xs,
      paddingVertical: Padding.p_base,
      alignItems: "center",
      marginVertical: Padding.p_base,
    },
    loginFrame: {
      height: 60,
      justifyContent: "center",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
    },
    loginText: {
      color: Color.colorDodgerblue,
    },
    selectPlanButtonDisabled: {
      backgroundColor: "#F0F2F5",
    },
    selectPlanButtonDisabledText: {
      color: "black",
    },
    selectPlanButtonText: {
      color: Color.colorWhitesmoke_200,
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.plusJakartaSansBold,
    },
    password: {
      position: "absolute",
      top: 23,
      right: 18,
    },
  });

export default BrandManageAccount;
