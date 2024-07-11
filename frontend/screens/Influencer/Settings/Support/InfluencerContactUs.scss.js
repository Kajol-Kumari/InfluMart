import { Padding, FontFamily, FontSize, Color } from "../../../../GlobalStyles";

export const InfluencerContactUsStyles = {
  scrollContainer: {
    flexGrow: 1,
  },
  contactus: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    flex: 1,
  },
  headerContainer: {
    height: 72,
    marginTop: Padding.p_base,
    padding: Padding.p_base,
    width: "100%",
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
  headerText: {
    fontSize: 22,
    textAlign: "center",
    color: Color.colorGray_400,
    fontFamily: FontFamily.beVietnamProBold,
    flex: 1,
  },
  contactBlock: {
    width: 320,
    height: 410,
    margin: "auto",
    borderWidth: 2,
  },
  contactBackground: {
    width: "100%",
    height: 380
  },
  contactContent: {
    position: "absolute",
    top: 280,
    paddingHorizontal:Padding.p_xs
  },
  blockSpacing: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    width: "100%",
  },
  footer: {
    height: 47,
  },
  footerSpacing: {
    height: 20,
    backgroundColor: Color.colorWhitesmoke,
    alignSelf: "stretch",
    width: "100%",
  },
  influmartTypo: {
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    color: Color.colorGray,
  },
  influmart: {
    textAlign: "center",
    color: Color.colorGray,
    alignSelf: "stretch",
  },
  contactUs: {
    fontSize: 36,
    letterSpacing: -1,
    lineHeight: 45,
    fontWeight: "800",
    fontFamily: FontFamily.plusJakartaSansExtraBold,
    color: Color.colorWhite,
  },
  weAreHere: {
    color: Color.colorWhite,
    marginTop: 8,
    alignSelf: "stretch",
    width:"100%"
  },
  textCommon: {
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.colorGray,
  },
  textSmall: {
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.colorSteelblue,
  },
  infoBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.colorWhitesmoke,
    alignSelf: "stretch",
    width: "100%",
  },
  infoBlockContent: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.plusJakartaSansMedium,
  },
  description: {
    marginTop: 4,
    fontFamily: FontFamily.plusJakartaSansRegular,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: "#4A739C",
  },
  details: {
    marginTop: 4,
  },
  infoIcon: {
    width: 28,
    height: 28,
  },
  followUsOn: {
    color: Color.colorGray,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    lineHeight: 23,
    fontSize: FontSize.size_lg,
  },
};
