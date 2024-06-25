import { Color, FontFamily, FontSize, Padding, Border } from "../../GlobalStyles";

export const InfluencerConfirmAccountStyles = {
  container: {
    height: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  innerContainer: {
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  fullWidth: {
    width: "100%",
  },
  header: {
    paddingHorizontal: Padding.p_base,
    height: 72,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.colorGray_400,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 250,
    height: 250,
    margin: 20,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  button: {
    width: "40%",
  },
  uploadBtn: {
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: "700",
    backgroundColor: Color.colorDodgerblue,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    borderRadius: Border.br_xs,
    marginHorizontal: 10,
  },
  removeBtn: {
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: "700",
    backgroundColor: Color.colorAliceblue,
    color: Color.colorBlack,
    textAlign: "center",
    borderRadius: Border.br_xs,
    marginHorizontal: 10,
  },
  infoContainer: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
    marginBottom: 10,
  },
  label: {
    fontFamily: FontFamily.workSansMedium,
    fontSize: FontSize.size_base,
    color: Color.colorGray_400,
  },
  value: {
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_base,
    color: Color.colorGray_400,
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  createAccountContainer: {
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
  },
  createAccount: {
    backgroundColor: Color.colorDodgerblue,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_xs,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
}