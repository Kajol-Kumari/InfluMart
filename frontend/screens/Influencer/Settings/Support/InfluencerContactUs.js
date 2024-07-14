import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Padding, FontFamily, FontSize, Color } from "../../../../GlobalStyles";
import { InfluencerContactUsStyles } from "./InfluencerContactUs.scss";

const InfoBlock = ({ title, description, details }) => (
  <View style={styles.infoBlock}>
    <View style={styles.infoBlockContent}>
      <Text style={[styles.title, styles.textCommon]}>{title}</Text>
      <Text style={[styles.description]}>{description}</Text>
      <Text style={[styles.description]}>{details}</Text>
    </View>
    <Image
      style={styles.infoIcon}
      contentFit="cover"
      source={require("../../../../assets/depth-3-frame-1.png")}
    />
  </View>
);

const InfluencerContactUs = ({ route, navigation }) => {
  const navigate = route.params?.navigate
  const [viewWidth, setViewWidth] = React.useState(0)
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} onLayout={(evt) => {
      setViewWidth(evt.nativeEvent.layout.width)
    }}>
      <View style={styles.contactus}>
        <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
          <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
              <Image
                style={styles.headerImage}
                contentFit="cover"
                source={require("../../../../assets/depth-4-frame-07.png")}
              />
              <Text style={styles.headerText}>Influmart</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.contactBlock}>
            <ImageBackground
              style={[styles.contactBackground,{height:viewWidth<=375?150:viewWidth<=550?180:viewWidth<=768?250:410}]}
              resizeMode="cover"
              source={require("../../../../assets/contact_us.png")}
            >
            </ImageBackground>
        </View>
        <View>
          <InfoBlock
            title="Email"
            description="Send us an email"
            details="help@influmart.com"
          />
          <InfoBlock
            title="Phone"
            description="Call us"
            details="+1 (800) 123-4567"
          />
          <InfoBlock
            title="Address"
            description="Visit our office"
            details="123 Main St, San Francisco, CA, 94105"
          />
          <View style={[styles.blockSpacing, styles.footer]}>
            <Text style={[styles.followUsOn, styles.emailFlexBox]}>
              Follow us on social media
            </Text>
          </View>
          <InfoBlock
            title="Instagram"
            description="Follow us"
            details="@influmart"
          />
          <InfoBlock
            title="Twitter"
            description="Follow us"
            details="@influmart"
          />
          <InfoBlock
            title="Images Credit"
            description="All profile images are Designed by freepik"
          />
          <View style={styles.footerSpacing} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(InfluencerContactUsStyles);

export default InfluencerContactUs;
