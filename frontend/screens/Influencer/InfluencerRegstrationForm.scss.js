import { Color, Padding, FontFamily, FontSize, Border } from "../../GlobalStyles";

export const InfluencerRegistrationFormStyles = {
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
  madantoryText:{
    fontWeight:700,
    color:"#f00"
  },
  labelWrapper:{
    display:"flex",
    flexDirection:'row',
    gap:8
  },
  desc: {
    fontSize: FontSize.size_sm,
    marginTop: 5,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorSlategray_100,
  },
};
