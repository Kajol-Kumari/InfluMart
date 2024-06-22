import { Padding, Color, Border, FontFamily, FontSize } from "../../GlobalStyles";

export const PlanChooseInterfaceStyles = {
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    width: 390,
  },
  innerContainer: {
    padding: Padding.p_base,
    alignItems: "center",
    height: "auto",
  },
  header: {
    marginVertical: Padding.p_xl,
    width: "90%",
  },
  headerText: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontFamily: FontFamily.workSansBold,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  subHeader: {
    marginBottom: Padding.p_xl,
    paddingHorizontal: Padding.p_xs,
  },
  subHeaderText: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.workSansRegular,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  planToggle: {
    flexDirection: "row",
    marginBottom: Padding.p_xl,
    justifyContent: "center",
    backgroundColor: "#F0F2F5",
    width: "99%",
    paddingVertical: 4,
    paddingHorizontal: Padding.p_xs,
    borderRadius: 12,
  },
  planButton: {
    width: 165,
    height: 40,
    backgroundColor: Color.colorWhitesmoke_300,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Padding.p_5xs,
    borderRadius: Border.br_xs,
    color: "#637587",
  },
  planText: {
    color: "#637587",
  },
  planActive: {
    color: "#121417",
    backgroundColor: "#FFFFFF",
  },
  planDetails: {
    width: "100%",
    marginBottom: Padding.p_xl,
  },
  checkoutButton: {
    width: 358,
    height: 40,
    backgroundColor: Color.colorPrimary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  checkoutButtonText: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.workSansBold,
    color: Color.colorWhite,
  },
  selectPlanButton: {
    backgroundColor: "#F0F2F5",
    borderRadius: 12,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    marginVertical: Padding.p_base,
    width: 260,
  },
  selectPlanButtonText: {
    color: "black",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansBold,
  },
};
