import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  Padding,
  FontSize,
  Color,
  FontFamily,
  Border,
} from "../../../../GlobalStyles";
import { InfluencerHelpCenterStyles } from "./InfluencerHelpCenter.scss";

const FAQItem = ({ question, answer }) => (
  <View style={styles.faqItem}>
    <View style={styles.faqQuestionContainer}>
      <Text style={styles.faqQuestion}>{question}</Text>
      <Image
        style={styles.faqIcon}
        contentFit="cover"
        source={require("../../../../assets/down_symbol.png")}
      />
    </View>
    {answer && <Text style={styles.faqAnswer}>{answer}</Text>}
  </View>
);

const InfluencerHelpCenter = ({navigation}) => {
  return (
    <ScrollView style={styles.helpcenter}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("AdminPanel")}>
        <View style={styles.headerContent}>
          <Image
            style={styles.headerImage}
            contentFit="cover"
            source={require("../../../../assets/depth-4-frame-07.png")}
          />
          <Text style={styles.headerText}>Help Center</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAQs</Text>
      </View>
      <View style={styles.faqsContainer}>
        <FAQItem
          question="How does Influmart work?"
          answer="Influmart is a platform that connects influencers with brands. Brands can post campaigns and influencers apply for them."
        />
        <FAQItem question="What is Influmart?" />
        <FAQItem question="Is it free to use Influmart?" />
        <FAQItem question="Who can use Influmart?" />
        <FAQItem question="Can I use Influmart on my phone?" />
        <FAQItem question="What happens if I don't log in?" />
      </View>
      <View style={styles.footerSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create(InfluencerHelpCenterStyles);

export default InfluencerHelpCenter;
