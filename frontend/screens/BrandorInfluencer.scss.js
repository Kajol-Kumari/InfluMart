import { Color, Padding, FontFamily, Border, FontSize } from "../GlobalStyles";

export const BrandorInfluencerStyles = {
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
  },
  header: {
    width: "100%",
    paddingVertical: Padding.p_base,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_400,
  },
  titleContainer: {
    paddingVertical: Padding.p_xl,
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_400,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 40,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorDodgerblue,
    marginVertical: Padding.p_xs,
  },
  buttonText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    color: Color.colorWhitesmoke_100,
  },
  influencerButton: {
    backgroundColor: Color.colorAliceblue,
  },
  influencerButtonText: {
    color: Color.colorGray_400,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    flexWrap: "wrap",
  },
  termsText: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorSteelblue_200,
    textAlign: "center",
  },
  linkText: {
    fontFamily: FontFamily.interBold,
    color: Color.colorDodgerblue,
    textAlign: "center",
    textDecorationLine: "underline",
  },
};
