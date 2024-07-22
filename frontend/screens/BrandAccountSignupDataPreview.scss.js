import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

export const BrandAccountSignupDataPreviewStyles = {
  container: {
    height: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  mainView: {
    paddingBottom: 30,
  },
  fullWidth: {
    width: "100%",
  },
  header: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  headerText: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansBold,
    color: Color.colorGray_400,
    textAlign: "center",
  },
  tipContainer: {
    flexDirection: "row",
    marginBottom: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
    padding: Padding.p_base,
  },
  tipImage: {
    width: 48,
    height: 48,
    borderRadius: Border.br_xs,
  },
  tipTextContainer: {
    marginLeft: Padding.p_base,
    flex: 1,
  },
  tipTitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorSlategray_300,
    marginBottom: Padding.p_5xs,
    textAlign: "center",
    marginTop: 60,
  },
  tipDescription: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.beVietnamProRegular,
    color: "#637587",
    lineHeight: FontSize.size_base,
  },
  avatarsContainer: {
    width: "100%",
    paddingVertical: 40,
    height: "auto",
    paddingHorizontal: Padding.p_base,
  },
  avatarContainer: {
    padding: 20,
    width: 190,
    borderRadius: Border.br_base,
    marginEnd: 16,
  },
  selectedAvatar: {
    borderWidth: 2,
    backgroundColor: Color.colorWhitesmoke_400,
    borderColor: Color.colorGainsboro_300,
  },
  avatarImage: {
    width: 150,
    height: 150,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Color.colorGainsboro_300,
    marginVertical: 12,
  },
  orText: {
    position: "absolute",
    left: "50%",
    top: -10,
    color: Color.colorDimgray,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
  },
  centeredView: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 250,
    height: 250,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  uploadButton: {
    width: "40%",
    marginHorizontal: 10,
  },
  uploadBtnText: {
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: "700",
    backgroundColor: Color.colorDodgerblue,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    borderRadius: Border.br_xs,
  },
  removeBtnText: {
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: "700",
    backgroundColor: Color.colorAliceblue,
    color: Color.colorBlack,
    textAlign: "center",
    borderRadius: Border.br_xs,
  },
  rowContainer: {
    width: "100%",
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansMedium,
    color: Color.colorGray_400,
  },
  value: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansRegular,
    color: Color.colorGray_400,
  },
  password: {
    paddingRight: 30,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 19,
  },
  createAccountButton: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 12,
    backgroundColor: Color.colorDodgerblue,
    alignItems: "center",
    marginVertical: Padding.p_base,
  },
  createAccountText: {
    color: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansBold,
  },
};
