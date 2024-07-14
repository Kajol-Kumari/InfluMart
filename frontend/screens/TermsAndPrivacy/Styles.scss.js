import { Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";

export const TosAndPpStyles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    height: 72,
    padding: Padding.p_base,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerImage: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 22,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interBold,
    width: "90%",
    textAlign: "center",
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subheading: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    marginBottom: 8,
  },
  content: {
    fontSize: FontSize.size_sm,
  },
  bulletPoints: {
    marginTop: 8,
    marginLeft: 16,
  },
  bulletPoint: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bulletPointText: {
    fontSize: FontSize.size_sm,
  },
  boldText: {
    fontWeight: 'bold',
  },
};
