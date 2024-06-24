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
  }