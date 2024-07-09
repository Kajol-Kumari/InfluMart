import { Color, FontSize, Border, FontFamily, Padding } from "../../GlobalStyles";

export const chatStyles = {
  topbar: {
    width: "100%",
    height: "auto",
    position: "relative",
    top: 0
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  lineHeight: {
    width: 2,
    backgroundColor: Color.colorGainsboro_400,
  },
  timeText: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  messageDot: {
    height: 16,
  },
  messageSmallDot: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_200,
    width: 8,
    height: 8,
    marginTop: 4,
  },
  messageLine: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 72,
  },
  messageText: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorBlack,
  },
  messageTextWrapper: {
    alignSelf: "stretch",
  },
  messageTextContainer: {
    width: 'auto',
    height: 'auto',
  },
  senderContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
    height: "auto",
    paddingHorizontal: Padding.p_base,
    justifyContent: "flex-end",
    gap: 12,
    paddingVertical: Padding.p_base,
  },
  senderTimeAgo: {
    width: "100%",
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorWhite,
    fontSize: 10,
    textAlign: "right",
    marginTop: 6
  },
  senderName: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.beVietnamProRegular,
    position: "absolute",
    top: -20,
    color: Color.colorSlategray_100,
    right: 10
  },
  messageTimeContainer: {
    width: 'auto',
    height: 24,
  },
  messageContent: {
    flex: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_base,
    marginLeft: 8,
    height: "auto",
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_base
  },
  messageRow: {
    flex: 1,
    flexDirection: "row",
    height: "auto",
    marginVertical: 6
  },
  messagesContainer: {
    paddingVertical: Padding.p_base,
    width: '100%',
    height: "auto",
  },
  senderMessageContainer: {
    backgroundColor: Color.colorMediumslateblue,
    maxWidth: "70%",
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs
  },
  spacer: {
    height: 389,
    width: '100%',
  },
  footerSpacer: {
    height: 20,
    width: '100%',
    backgroundColor: Color.colorWhite,
  },
  chatContent: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.colorWhite,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  bottomBar: {
    width: "100%",
    position: "relative",
    bottom: 0,
    backgroundColor: Color.colorWhite
  },
  senderMessage: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorWhite,
    padding: 0,
    lineHeight: 24
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 50
  },
  receiverContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
    height: "auto",
    paddingHorizontal: Padding.p_base,
    gap: 12,
    paddingVertical: Padding.p_base,
    alignItems:"flex-end"
  },
  receiverMessageContainer: {
    backgroundColor: Color.colorAliceblue,
    maxWidth: "70%",
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs
  },
  receiverName: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.beVietnamProRegular,
    position: "absolute",
    top: -20,
    color: Color.colorSlategray_100,
    left: 10
  },
  receiverMessage: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorBlack,
    padding: 0,
    lineHeight: 24
  },
  receiverTimeAgo: {
    width: "100%",
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorBlack,
    fontSize: 10,
    textAlign: "right",
    marginTop: 6
  }
};
