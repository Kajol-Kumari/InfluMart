import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Color, Border, Padding, FontSize, FontFamily } from "../../../GlobalStyles";
import Loader from "../../../shared/Loader";
import Depth1Frame7 from "../../../components/Depth1Frame7";
import { acceptCollabOpen, rejectCollabOpen } from "../../../controller/collabOpenController";
import { useAlert } from "../../../util/AlertContext";
import { Image } from "expo-image";

const BrandCollabRequestPage = ({ route, navigation }) => {
  const { name, requestId } = route.params;
  const { showAlert } = useAlert();
  const [loading, setLoading] = React.useState(false);

  const handleReject = async () => {
    setLoading(true);
    await rejectCollabOpen(requestId, showAlert,navigation);
    setLoading(false);
  };

  const handleAccept = async () => {
    setLoading(true);
    await acceptCollabOpen(requestId, showAlert,navigation);
    setLoading(false);
  };

  return (
    <View style={styles.pageContainer}>
      {loading && <Loader loading={loading} />}
      <TouchableOpacity onPress={() => navigation.navigate("BrandProfile")}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <Image
              style={styles.headerImage}
              contentFit="cover"
              source={require("../../../assets/depth-4-frame-07.png")}
            />
            <Text style={styles.welcomeText}>Collaboration Request</Text>
          </View>
        </View>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={[styles.requesterName, styles.textStyle]}>{name}</Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.requestMessage, styles.textStyle]}>
              {name} would like to collaborate with you on a project. Are you interested?
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleReject} style={[styles.button, styles.rejectButton]}>
              <Text style={styles.rejectButtonText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAccept} style={[styles.button, styles.acceptButton]}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "left",
    color: Color.colorGray_400,
  },
  pageContainer: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
  },
  headerContainer: {
    height: 72,
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
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
  welcomeText: {
    fontSize: 22,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interBold,
    width: "90%",
    textAlign: "center",
  },
  scrollView: {
    width: "100%",
  },
  contentContainer: {
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  section: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
  requesterName: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  requestMessage: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
  button: {
    width: "49%",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_base,
  },
  rejectButton: {
    backgroundColor: Color.colorAliceblue,
  },
  rejectButtonText: {
    color: Color.colorGray_400,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  acceptButton: {
    backgroundColor: "#1A80E5",
  },
  acceptButtonText: {
    color: Color.colorWhite,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  footer: {
    height: 20,
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default BrandCollabRequestPage;
