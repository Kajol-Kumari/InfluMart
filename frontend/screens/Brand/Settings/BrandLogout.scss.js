import {
  Color,
  Padding,
  FontSize,
  Border,
  FontFamily,
} from "../../../GlobalStyles";

export const BrandLogoutStyles = {
  scrollView: {
    width: "100%",
    height: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  headerContainer: {
    height: 72,
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerImage: {
    width: 24,
    height: 24,
  },
  welcomeText: {
    fontSize: 22,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interBold,
  },
  textContainer: {
    textAlign: "center",
    margin: "auto",
    marginVertical: 20,
  },
  Text: {
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interBold,
    lineHeight: 27,
  },
  messageContainer: {
    textAlign: "center",
    margin: "auto",
  },
  messageText: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
  },
  CancelButtonContainer: {
    margin: "auto",
    width: "90%",
    marginTop: "20%",
  },
  CancelButton: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8EDF2",
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
  },
  CancelButtonText: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: "left",
  },
  loginButtonContainer: {
    margin: "auto",
    width: "90%",
    marginVertical: 20,
  },
  loginButton: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
  },
  loginButtonText: {
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: "left",
  },
};
