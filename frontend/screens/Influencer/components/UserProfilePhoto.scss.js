import { Border, Color, FontFamily, FontSize, Padding } from "../../../GlobalStyles";

export const UserProfilePhotoStyles = {
  userProfilePhoto: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
    width: 390,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Padding.p_base,
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 24,
    marginRight: Padding.p_base,
  },
  profilePhotoText: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.beVietnamProBold,
    width: "80%",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.beVietnamProBold,
    marginBottom: Padding.p_base,
    lineHeight: 28,
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
    color: Color.colorGray,
    marginBottom: Padding.p_5xs,
  },
  tipDescription: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.beVietnamProRegular,
    color: "#637587",
    lineHeight: FontSize.size_base,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Padding.p_base,
    gap: Padding.p_base,
  },
  button: {
    height: 40,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    marginHorizontal: Padding.p_2xs,
  },
  uploadButton: {
    backgroundColor: "#F0F2F5",
  },
  takePhotoButton: {
    backgroundColor: "#1a80e6",
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorGray,
  },
  takePhotoButtonText: {
    color: Color.colorWhite,
  },
};
