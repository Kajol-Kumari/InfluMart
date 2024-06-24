import { Padding, FontFamily, FontSize, Border, Color } from "../../../GlobalStyles";

export const AddHandlesStyles = {
  formField:{
    marginBottom:Padding.p_base
  },
  fieldContainer: {
    marginVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_xs,
  },
  fieldLabel: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
  },
  verifyContainer: {
    paddingHorizontal: Padding.p_5xs,
  },
  textInput: {
    borderRadius: Border.br_xs,
    borderColor: Color.colorAliceblue,
    padding: Padding.p_base,
    marginTop: Padding.p_5xs,
    color: "#4F7A94",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansRegular,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
    paddingHorizontal:8
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhite,
    marginTop:Padding.p_base
  },
  headerText: {
    fontSize: 18,
    lineHeight: 23,
    textAlign: "center",
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    width: "auto",
  },
  headerIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    height: 24,
    width: 24,
  },
  platform: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.colorGray,
  },
  username: {
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorSlategray,
    lineHeight: 24,
  },
  verifyButton: {
    flexDirection: "column",
    paddingLeft: Padding.p_xs,
  },
  verifyIcon: {
    width: 40,
    height: 40,
  },
  verifyText: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    color: Color.colorGray,
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
  scrollView:{
    backgroundColor:Color.colorWhite
  }
};
