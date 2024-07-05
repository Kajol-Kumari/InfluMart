import { Color, FontSize, Border, FontFamily, Padding } from "../../GlobalStyles";

export const chatStyles = {
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
  timeAgo: {
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorDimgray,
  },
  messageTimeContainer: {
    width: 'auto',
    height: 24,
  },
  messageContent: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    marginLeft: 8,
    height: 72,
  },
  messageRow: {
    flex: 1,
    flexDirection: "row",
    height: 72,
  },
  messagesContainer: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    width: '100%',
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
};
