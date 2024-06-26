import { Padding, Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";

export const PricePerPostStyles = {
  scrollView:{
    backgroundColor: Color.colorWhite,
  },
  pricePerPostContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Padding.p_base,
    textAlign: "center",
    justifyContent:"space-between"
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 23,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    textAlign: "center",
    width: "auto",
  },
  depth1FrameSpaceBlock: {
    paddingVertical: Padding.p_xs,
  },
  platformTitle: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    color: Color.colorGray,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
  },
  questionText: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.colorGray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F2F5",
    marginBottom: Padding.p_base,
    borderRadius: 12,
  },
  inputIcon: {
    padding: Padding.p_base,
  },
  inputImage: {
    width: 24,
    height: 24,
  },
  textInput: {
    flex: 1,
    height: 56,
    padding: Padding.p_base,
    backgroundColor: "#F0F2F5",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorGray_300,
    borderRadius: 12,
  },
  currencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
    marginBottom: Padding.p_base,
  },
  currencyIcon: {
    width: 40,
    height: 40,
  },
  currencyText: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorGray,
    flex: 1,
    marginLeft: Padding.p_base,
  },
  currencyValue: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorGray_100,
  },
  confirmButton: {
    backgroundColor: "#388fe6",
    paddingVertical: Padding.p_base,
    alignItems: "center",
    borderRadius: Border.br_xs,
    margin: Padding.p_base,
  },
  confirmText: {
    color: Color.colorWhite,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
  },
};
