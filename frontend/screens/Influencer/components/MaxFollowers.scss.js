import { Padding, Color, FontFamily, Border, FontSize } from "../../../GlobalStyles";

export const MaxFollowersNoStyles = {
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
    width: "100%",
  },
  header: {
    marginBottom: Padding.p_base,
  },
  addAccountButton: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: Padding.p_base,
  },
  addAccountText: {
    fontSize: 18,
    lineHeight: 23,
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    textAlign: "center",
    width: "auto",
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
    marginBottom: Padding.p_base,
  },
  activeAccount: {
    borderWidth: 2,
    borderColor: "#637587",
  },
  accountIcon: {
    width: 48,
    height: 48,
    marginRight: Padding.p_base,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorGray,
    marginBottom: 2,
  },
  accountDescription: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorSlategray,
  },
  followerCountContainer: {
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
    marginBottom: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    width:"100%"
  },
  enterFollowerCountText: {
    borderRadius: Border.br_xs,
    borderColor: Color.colorAliceblue,
    padding: Padding.p_base,
    marginTop: Padding.p_5xs,
    color: "#637587",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansRegular,
    borderWidth: 2,
    width: "90%",
  },
  confirmButton: {
    backgroundColor: "#388fe6",
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_xs,
    alignItems: "center",
  },
  confirmButtonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorWhite,
  },
};
