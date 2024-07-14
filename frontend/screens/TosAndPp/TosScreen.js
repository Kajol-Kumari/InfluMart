import { Image } from "expo-image";
import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { TosAndPpStyles } from "./TosPP.scss";
const TosScreen = ({ route, navigation }) => {
  const navigate = route.params?.navigate;
  const content = [
    {
      subheading: "Contact Information:",
      bulletPoints: [
        "Email: influmart.social@influmart.in",
        "Address: Bengaluru, karnataka, India",
      ],
    },
    {
      heading: "1. Acceptance of Terms",
      content:
        "By accessing or using Influmart, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.",
    },
    {
      heading: "2. Description of Service",
      content:
        "Influmart is a platform connecting influencers and brands for collaborative marketing opportunities. Our services include profile creation, campaign management, communication facilitation, and secure payment processing between parties.",
    },
    {
      heading: "3. User Accounts",
      content:
        "You must register to use Influmart. You are responsible for maintaining the confidentiality of your account and password. Users must provide accurate, current, and complete information during registration and keep their profile information updated.",
    },
    {
      heading: "4. User Conduct",
      content:
        "Users must not engage in any activity that: violates laws or regulations; infringes on intellectual property rights; is fraudulent, false, or misleading; harasses or discriminates against others; distributes malware or viruses; or interferes with the proper functioning of Influmart.",
    },
    {
      heading: "5. Content Ownership and Licensing",
      content:
        "Users retain ownership of their content posted on Influmart. By posting content, you grant Influmart a non-exclusive, worldwide, royalty-free license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through Influmart.",
    },
    {
      heading: "6. Influencer Responsibilities",
      content:
        "Influencers must disclose their relationship with brands as per applicable advertising standards and laws. They are responsible for the accuracy of their reported metrics and for delivering agreed-upon services to brands.",
    },
    {
      heading: "7. Brand Responsibilities",
      content:
        "Brands must provide clear campaign briefs, adhere to agreed-upon terms with influencers, and make timely payments for services rendered. They are responsible for ensuring their products and promotional content comply with all applicable laws and regulations.",
    },
    {
      heading: "8. Payment Terms",
      content:
        "Influmart facilitates payments between influencers and brands. We may charge service fees for transactions. All fees are non-refundable. Users are responsible for all applicable taxes related to their use of Influmart.",
    },
    {
      heading: "9. Dispute Resolution",
      content:
        "In the event of a dispute between users, Influmart will provide a resolution process. Users agree to attempt to resolve disputes through our internal processes before pursuing external legal action.",
    },
    {
      heading: "10. Intellectual Property",
      content:
        "The Influmart platform, including its original content, features, and functionality, is owned by Influmart and protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
    },
    {
      heading: "11. Privacy and Data Protection",
      content:
        "Our Privacy Policy, incorporated herein by reference, explains how we collect, use, and protect your personal information. By using Influmart, you consent to our data practices as described in our Privacy Policy.",
    },
    {
      heading: "12. Limitation of Liability",
      content:
        "Influmart shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service. Our liability to you for any cause whatsoever shall not exceed the amount paid by you to Influmart.",
    },
    {
      heading: "13. Indemnification",
      content:
        "You agree to indemnify and hold Influmart harmless from any claims, losses, liability, damages, and/or costs (including attorney fees) arising from your violation of these Terms of Service or your use of Influmart's services.",
    },
    {
      heading: "14. Termination",
      content:
        "We may terminate or suspend your account and access to Influmart immediately, without prior notice or liability, for any reason, including breach of these Terms of Service. Upon termination, your right to use Influmart will immediately cease.",
    },
    {
      heading: "15. Changes to Terms",
      content:
        "We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes via email or through the platform. Your continued use of Influmart after changes constitute acceptance of those changes.",
    },
    {
      heading: "16. Governing Law",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.",
    },
    {
      heading: "17. Contact Information",
      content:
        "For any questions about these Terms of Service, please contact us at influmart.social@influmart.in.",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
          <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
              <Image
                style={styles.headerImage}
                contentFit="cover"
                source={require("../../assets/depth-4-frame-07.png")}
              />
              <Text style={styles.headerText}>Terms of Conditions</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.content}>
            Welcome to Influmart! These terms and conditions outline the rules
            and regulations for the use of Influmart's website and services.
          </Text>
        </View>
        {content.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.heading}>{section.heading}</Text>
            {section.subheading && (
              <Text style={styles.subheading}>{section.subheading}</Text>
            )}
            <Text style={styles.content}>{section.content}</Text>
            {section.bulletPoints && (
              <View style={styles.bulletPoints}>
                {section.bulletPoints.map((point, idx) => (
                  <View key={idx} style={styles.bulletPoint}>
                    <Text style={styles.bulletPointText}>• {point}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(TosAndPpStyles);

export default TosScreen;
