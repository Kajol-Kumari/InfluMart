import { Color, FontFamily, FontSize, Padding } from "../../../../GlobalStyles";

export const statsStyles = {
  container: {
    width:"100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    paddingHorizontal:Padding.p_base,
    justifyContent:"space-between",
  },
  statsContainer: {
    backgroundColor: "#F0F2F5",
    borderRadius: 10,
    padding: 15,
    paddingVertical: 20,
    width: "49%",
    height: 100,
  },
  fullWidth: {
    width: "100%",
  },
  statsTitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorBlack,
    lineHeight: 24,
  },
  row:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  }
};
