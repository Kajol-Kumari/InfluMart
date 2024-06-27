import {Padding} from '../GlobalStyles';

export const BrandProfileStyles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop:40
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal:Padding.p_base
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profileContainer: {
    width:"100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal:Padding.p_base,
    boxSizing:"border-box"
  },
  profileImageContainer: {
    width:280,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  profileInfoContainer: {
    width:280,
    flex: 1,
  },
  brandName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop:20
  },
  brandDetails: {
    color: "#666",
    marginTop: 5,
  },
  actionButtons: {
    width:"100%",
    display:"flex",
    flexDirection: "row",
    justifyContent:"center",
    marginTop: 20,
    gap: 16,
    paddingHorizontal:Padding.p_base
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 40,
    borderRadius: 12,
  },
  followButton: {
    backgroundColor: "#f0f0f0",
    color: "black",
  },
  messageButton: {
    backgroundColor: "#3498db",
  },
  followButtonText: {
    fontWeight: "bold",
    color: "#333",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
  section: {
    padding: 20,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  insightContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  insightIcon: {
    width: 24,
    height: 24,
  },
  insightDetails: {
    flex: 1,
  },
  insightTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  insightText: {
    color: "#666",
  },
  requirementContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  requirementIcon: {
    width: 24,
    height: 24,
  },
  iconBg: {
    backgroundColor: "#E8EDF5",
    borderRadius: 8,
    padding: 10,
    width: 48,
    height: 48,
    marginRight: 15,
  },
  requirementDetails: {
    flex: 1,
  },
  requirementTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  requirementText: {
    color: "#666",
  },
  collabCountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  collabIcon: {
    width: 28,
    height: 28,
  },
  collabCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
};
