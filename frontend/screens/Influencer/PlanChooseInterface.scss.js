import { Padding, Color, Border, FontFamily, FontSize } from "../../GlobalStyles";

export const PlanChooseInterfaceStyles = {
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
  innerContainer: {
    alignItems: "center",
    height: "auto",
    paddingHorizontal:Padding.p_base
  },
  header: {
    marginVertical: Padding.p_xl,
    width: "100%",
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
    width:"100%"
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
    width: "100%",
    paddingVertical: 8,
    marginHorizontal: Padding.p_base,
    borderRadius: 12,
    paddingHorizontal:Padding.p_base
  },
  planButton: {
    width: "50%",
    height: 40,
    backgroundColor: Color.colorWhitesmoke_300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xs,
    color: "#637587",
  },
  planContainer:{
    width:"100%",
    height:"auto",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    gap:20,
    flexWrap:"wrap"
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
    width: "100%",
  },
  selectPlanButtonText: {
    color: "black",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansBold,
  },
};
