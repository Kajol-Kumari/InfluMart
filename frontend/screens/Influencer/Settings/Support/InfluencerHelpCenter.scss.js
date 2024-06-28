import {
    Padding,
    FontSize,
    Color,
    FontFamily,
    Border,
  } from "../../../../GlobalStyles";

export const InfluencerHelpCenterStyles = {
  helpcenter: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
  },
  headerContainer: {
    height: 72,
    marginTop: Padding.p_base,
    padding: Padding.p_base,
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
    width: "90%",
    textAlign: "center",
    color: Color.colorGray_400,
    fontFamily: FontFamily.beVietnamProBold,
  },
  section: {
    padding: Padding.p_base,
  },
  sectionTitle: {
    fontSize: 22,
    lineHeight: 28,
    color: Color.colorGray,
    fontFamily: FontFamily.plusJakartaSansBold,
  },
  faqsContainer: {
    padding: Padding.p_base,
  },
  faqItem: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_xs,
    padding: Padding.p_base,
    marginBottom: 12,
  },
  faqQuestionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQuestion: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.plusJakartaSansMedium,
    color: Color.colorGray,
  },
  faqIcon: {
    width: 20,
    height: 20,
  },
  faqAnswer: {
    marginTop: 8,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: "#4a739c",
  },
  footerSpacing: {
    height: 20,
    backgroundColor: Color.colorWhitesmoke,
  },
};
