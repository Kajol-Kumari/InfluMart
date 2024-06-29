import {
  Color,
  FontSize,
  Padding,
  Border,
  FontFamily,
} from "../../GlobalStyles";
export const AnalyticsStyles = {
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
    width:"100%",
    backgroundColor:Color.colorWhite
  },
  ScrollCards: {
    gap: 10,
    margin: 20,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 10,
    maxHeight: 150, // Set the maximum height for the container
    paddingHorizontal:Padding.p_base
  },
  frame: {
    width: 350,
    height: 320,
    margin: 10,
  },
  tagItem: {
    padding: 8,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginVertical: 5,
    overflow: "hidden",
    height: "auto",
  },

  recentContainer: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 4,
    marginHorizontal: 4,
  },
  recentText: {
    fontFamily: FontFamily.lexendBold,
    fontSize: FontSize.size_base,
    lineHeight: 22.5,
  },
  tagText: {
    fontFamily: FontFamily.beVietnamProMedium,
    fontSize: FontSize.size_base,
  },
  connectContainer: {
    margin: 10,
    paddingBottom: 10,
    paddingHorizontal:Padding.p_base
  },
  connectButton: {
    backgroundColor: "#1A5CE5",
    height: "auto",
    width: "100%",
    margin: "auto",
    borderRadius: 12,
    paddingVertical: 12,
  },
  connectText: {
    fontFamily: FontFamily.beVietnamProBold,
    fontSize: FontSize.size_base,
    color: "white",
    textAlign: "center",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro_100,
    paddingHorizontal: 15,
    margin: 10,
  },
  navItems: {
    padding: 10,
    borderColor: Color.colorGainsboro_100,
    borderBottomWidth: 3,
  },
  navText: {
    fontFamily: FontFamily.beVietnamProBold,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    color: "#637087",
  },
  navSelectText: {
    color: "black",
  },
  depth3FramePosition: {
    paddingBottom: Padding.p_smi,
    paddingTop: Padding.p_base,
    height: 53,
    borderBottomWidth: 3,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },
  contactInfoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  cartier1Clr: {
    color: Color.colorSlategray_200,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  frameLayout: {
    height: 173,
    width: 173,
  },
  travel: {
    textAlign: "left",
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
    color: Color.colorGray_500,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: 42,
    height: 21,
  },
  depth2Frame0: {
    width: 74,
    paddingHorizontal: Padding.p_base,
    height: 32,
    backgroundColor: Color.colorWhitesmoke_300,
    top: 12,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    position: "absolute",
    left: 12,
  },
  pastCollaborations: {
    color: Color.colorGray_500,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  depth5Frame0: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame09: {
    width: "auto",
    height: 21,
    alignItems: "center",
  },
  depth3Frame09: {
    width: 145,
  },
  contactInfo: {
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth4Frame010: {
    width: "auto",
    height: 21,
    alignItems: "center",
  },
  depth3Frame1: {
    marginLeft: 32,
    width: 92,
  },
  depth2Frame02: {
    borderColor: Color.colorGainsboro_300,
    borderBottomWidth: 1,
    height: 54,
    borderStyle: "solid",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    overflow: "hidden",
    width: 390,
  },
  depth1Frame4: {
    height: 66,
    paddingBottom: Padding.p_xs,
    width: 390,
  },
  cartier: {
    alignSelf: "stretch",
  },
  cartier1: {
    fontFamily: FontFamily.beVietnamProRegular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  connectWithCaroline: {
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  depth1Frame9: {
    height: 72,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 390,
  },
  depth0Frame0: {
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  analytics: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
    height:"auto"
  },
  averagePriceSection: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  averagePriceHeaderText: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    color: Color.colorGray_200,
    marginBottom: 16,
  },
  averagePriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.colorWhitesmoke,
    padding: Padding.p_base,
    minHeight: 72,
    marginBottom: 8,
  },
  priceContainer: {
    width: 77,
    justifyContent: "center",
    alignItems: "center",
  },
  priceText: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: "#4A739C",
  },
  platformContainer: {
    alignSelf: "stretch",
  },
  platformText: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    lineHeight: 24,
  },
  insightIcon: {
    width: 24,
    height: 24,
  },
  menuBar:{
    position:"relative",
    top:0
  },
  container:{
    width:'100%',
    height:"100%"
  }
};
