/* InboxInterface.scss */
import { Color, Padding, FontFamily, FontSize, Border } from "../../GlobalStyles";

export const inboxStyles = {
  scrollViewContent: {
    flexGrow: 1,
  },
  inboxContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  headerContainer: {
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorWhite,
    position:"relative",
    top:0,
    width:"100%",
    height:72
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 72,
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
    color: Color.colorGray_500,
  },
  newMessageButton: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  newMessageIcon: {
    width: 24,
    height: 24,
  },
  searchContainer: {
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorWhite,
    height: 96,
  },
  searchContent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_xs,
    padding: Padding.p_xs,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchInput: {
    flex: 1,
    fontFamily: FontFamily.beVietnamProRegular,
    fontSize: FontSize.size_base,
    color: Color.colorGray_500,
    marginLeft: 12,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    height: 72,
    backgroundColor: Color.colorWhite,
  },
  messageImage: {
    width: 56,
    height: 56,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorWhite,
  },
  messageContent: {
    marginLeft: 16,
  },
  messageTitle: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    fontSize: FontSize.size_base,
    color: Color.colorGray_500,
  },
  messageStatus: {
    fontSize: FontSize.size_sm,
    color: Color.colorSlategray_200,
    fontFamily: FontFamily.beVietnamProRegular,
  },
  messagePreviewContainer: {
    marginHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_base,
    backgroundColor: Color.colorWhite,
    borderBottomWidth:1,
    borderColor:"#ccc",
  },
  messagePreview: {
    fontFamily: FontFamily.beVietnamProRegular,
    fontSize: FontSize.size_base,
    color: Color.colorGray_500,
    marginLeft:56,
    paddingLeft:Padding.p_base
  },
  spacer: {
    height: 20,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  footer: {
    height: 76,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "flex-end",
    flexDirection: "row",
    backgroundColor: "transparent",
    width:"auto",
    position:"absolute",
    bottom:30,
    right:30
  },
  newMessageFooterButton: {
    width: 56,
    height: 56,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorRoyalblue,
    elevation: 4,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    backgroundColor: Color.colorRoyalblue,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  addButtonText: {
    fontSize: 40,
    color: 'white',
  },
};
