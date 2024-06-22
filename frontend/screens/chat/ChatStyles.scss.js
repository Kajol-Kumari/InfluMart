import { Color, FontSize, Border, FontFamily, Padding } from "../../GlobalStyles";

export const chatStyle = {
    scrollContentContainer: {
        flexGrow: 1,
      },
      depth4FrameLayout: {
        width: 2,
        backgroundColor: Color.colorGainsboro_400,
      },
      dAgoTypo: {
        textAlign: "left",
        lineHeight: 24,
        fontSize: FontSize.size_base,
      },
      depth4Frame0: {
        height: 16,
      },
      depth4Frame1: {
        borderRadius: Border.br_9xs,
        backgroundColor: Color.colorGray_200,
        width: 8,
        height: 8,
        marginTop: 4,
      },
      depth4Frame2: {
        height: 40,
        marginTop: 4,
      },
      depth3Frame0: {
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        height: 72,
      },
      liliamJoinedThe: {
        fontWeight: "500",
        fontFamily: FontFamily.beVietnamProMedium,
        color: Color.colorBlack,
      },
      depth5Frame0: {
        alignSelf: "stretch",
      },
      depth4Frame01: {
        width: 'auto',
        height: 'auto',
      },
      dAgo: {
        fontFamily: FontFamily.beVietnamProRegular,
        color: Color.colorDimgray,
      },
      depth4Frame11: {
        width: 'auto',
        height: 24,
      },
      depth3Frame1: {
        flex: 1,
        paddingHorizontal: 0,
        paddingVertical: Padding.p_xs,
        marginLeft: 8,
        height: 72,
      },
      depth2Frame0: {
        flex: 1,
        flexDirection: "row",
        height: 72,
      },
      depth4Frame03: {
        width: 'auto',
        height: 24,
      },
      depth4Frame13: {
        width: 'auto',
        height: 24,
      },
      depth1Frame1: {
        paddingHorizontal: Padding.p_base,
        paddingVertical: 0,
        width: '100%',
      },
      depth1Frame3: {
        height: 389,
        width: '100%',
      },
      depth1Frame5: {
        height: 20,
        width: '100%',
        backgroundColor: Color.colorWhite,
      },
      depth0Frame0: {
        flex: 1,
        width: '100%',
        backgroundColor: Color.colorWhite,
      },
      chatinterface: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.colorWhite,
      },
}