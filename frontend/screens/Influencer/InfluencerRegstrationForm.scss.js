import { Color, Padding, FontFamily, FontSize, Border } from "../../GlobalStyles";

export const InfluencerRegistrationFormStyles = {
  influencerRegistrationForm: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    padding: Padding.p_base,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    fontSize: FontSize.size_3xl,  
    lineHeight: 32,               
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansBold,
  },
  headerText: {
    fontSize: FontSize.size_base,  
    lineHeight: 32,               
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansBold,
  },
  fieldContainer: {
    marginVertical: Padding.p_xs,
  },
  fieldLabel: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontSize: FontSize.size_sm,  
    color: Color.colorGray_100,
    marginBottom: 8,
  },
  textInput: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorAliceblue,
    paddingVertical: 14,
    paddingHorizontal: Padding.p_base,
    marginBottom: 16,
    color: Color.colorSteelblue_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: Padding.p_xs,
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 16,
  },
  sectionHeaderText: {
    fontSize: FontSize.size_base, 
    lineHeight: 32,              
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansBold,
  },
  dropdownContainer: {
    width: "50%", // Adjust as per your design
    marginBottom: 16,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorAliceblue,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 14,
  },
  selectPlanButton: {
    backgroundColor: Color.colorSteelblue_100,
    borderRadius: Border.br_xs,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    marginBottom: 20,
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
  eyeIcon: {
    position: "absolute",
    right: 10,
    padding: Padding.p_xs,
  },
};
