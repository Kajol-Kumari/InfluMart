import { Color, Padding, FontFamily, FontSize, Border } from "../../GlobalStyles";

export const InfluencerAccountSuccessStyles = {
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  contentContainer: {
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_base,
  },
  fullWidth: {
    width: "100%",
  },
  messageContainer: {
    paddingVertical: Padding.p_base,
    height: 72,
    justifyContent: "center",
    alignItems: "center",
  },
  accountCreated: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.colorGray_400,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
  },
  messageWrapper: {
    paddingVertical: Padding.p_xs,
    alignItems: "center",
  },
  messageText: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -1,
    lineHeight: 35,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorGray_400,
  },
  instructionsText: {
    fontFamily: FontFamily.manropeRegular,
    textAlign: "center",
    color: Color.colorGray_400,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  buttonWrapper: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    height: 72,
    justifyContent: "center",
  },
  button: {
    borderRadius: Border.br_5xl,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorCornflowerblue,
    height: 48,
  },
  buttonText: {
    color: Color.colorWhitesmoke_200,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
};
