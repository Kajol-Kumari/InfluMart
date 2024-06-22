import { Color, Padding, FontFamily, FontSize, Border } from "../../GlobalStyles";

export const InfluencerRegistrationFormStyles = {
  influencerRegistrationForm: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: 390,
    padding: Padding.p_base,
  },
  header: {
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  headerText: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansBold,
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
    fontSize: FontSize.size_3xl,
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
};
