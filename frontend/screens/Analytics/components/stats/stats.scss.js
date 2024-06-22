import { Color, FontFamily, FontSize } from "../../../../GlobalStyles";

export const statsStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  statsContainer: {
    backgroundColor: "#F0F2F5",
    borderRadius: 10,
    padding: 15,
    paddingVertical: 20,
    width: "48%",
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
};
