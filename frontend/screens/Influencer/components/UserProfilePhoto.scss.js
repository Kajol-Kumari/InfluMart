import { Border, Color, FontFamily, FontSize, Padding } from "../../../GlobalStyles";

export const UserProfilePhotoStyles = {
  userProfilePhoto: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
    width: "100%"
  },
  header: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    marginVertical: Padding.p_base,
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
    marginVertical: Padding.p_base,
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
    color: Color.colorSlategray_300,
    marginBottom: Padding.p_5xs,
    textAlign:"center",
    marginTop:60
  },
  tipDescription: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.beVietnamProRegular,
    color: "#637587",
    lineHeight: FontSize.size_base,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: Padding.p_base,
    gap: Padding.p_base,
    width:"100%",
    paddingHorizontal:Padding.p_base
  },
  button: {
    height: 40,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    marginHorizontal: Padding.p_2xs,
    width:"100%"
  },
  uploadButton: {
    backgroundColor: "#F0F2F5",
  },
  takePhotoButton: {
    backgroundColor: Color.colorRoyalblue
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorGray,
  },
  takePhotoButtonText: {
    color: Color.colorWhite,
  },
  previewContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  confirmButtonContainer: {
    margin: "auto",
    width: "100%",
    marginTop: 100,
  },
  confirmButton: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
  },
  confirmButtonText: {
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: "left",
  },
  avatarsContainer:{
    width:"100%",
    paddingVertical:40,
    height:"auto",
    paddingHorizontal:Padding.p_base
  },
  avatarContainer:{
    padding:20,
    width:190,
    borderRadius:Border.br_base,
    marginEnd:16
  },
  selectedAvatar:{
    borderWidth:2,
    backgroundColor:Color.colorWhitesmoke_400,
    borderColor:Color.colorGainsboro_300,
  },
  avatarImage:{
    width:150,
    height:150
  },
  divider:{
    width:"100%",
    height:1,
    backgroundColor:Color.colorGainsboro_300,
    marginVertical:12
  },
  orText:{
    position:"absolute",
    left:"50%",
    top:-10,
    color:Color.colorDimgray,
    backgroundColor:"#fff",
    paddingHorizontal:8
  }
};
