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

const PPScreen = ({ route, navigation }) => {
  const navigate = route.params?.navigate;
  const content = [
    {
      subheading: "Contact Information:",
      bulletPoints: [
        {
          text: "Email: influmart@gmail.com",
        },
        {
          text: "Address: [Your Company Address Here]",
        },
      ],
    },
    {heading: "1. Information We Collect",
      subheading: "1.1 Information You Provide to Us",
      content:
        "We collect information that you provide directly to us, including:",
      bulletPoints: [
        {
          text: " When you create an account, we collect your name, email address, password, and other necessary details.",
          boldText: "Account Information:",
        },
        {
          text: " You may choose to provide additional information for your profile, such as a profile picture, bio, and social media links.",
          boldText: "Profile Information:",
        },
        {
          text: " If you make transactions through our platform, we collect payment information, including credit card details and billing addresses.",
          boldText: "Payment Information:",
        },
        {
          text: " We collect information when you communicate with us, such as when you send us emails or fill out forms on our website.",
          boldText: "Communications:",
        },
      ],
    },
    {
        subheading: "1.2 Information We Collect Automatically",
        content:
          "We automatically collect certain information about your use of our services, including:",
        bulletPoints: [
          {
            text: " We collect information about how you interact with our services, such as the pages you view, the links you click, and the date and time of your visits.",
            boldText: "Usage Information:",
          },
          {
            text: " We collect information about the device you use to access our services, including the hardware model, operating system and version, and unique device identifiers.",
            boldText: "Device Information:",
          },
          {
            text: " We may collect information about your location if you enable location services on your device.",
            boldText: "Location Information:",
          },
        ],
      },
      {
        subheading: "1.3 Information We Collect from Other Sources",
        content:
          "We may also receive information from other sources and combine it with information we collect through our services. For example, if you link your social media accounts with our platform, we may receive information from those accounts.",
      },
      {
        heading: "2. How We Use Information",
        content:
          "We use the information we collect to:",
        bulletPoints: [
          {
            text: " We use your information to operate, maintain, and improve our services.",
            boldText: "Provide and Improve Our Services:",
          },
          {
            text: " We use your information to send you updates, newsletters, and other communications related to our services.",
            boldText: "Communicate with You:",
          },
          {
            text: "  We use your information to process payments and complete transactions.",
            boldText: "Process Transactions:",
          },
          {
            text: " We use your information to personalize your experience and provide content and features that match your interests.",
            boldText: "Personalize Your Experience:",
          },
          {
            text: " We use your information to detect, investigate, and prevent fraudulent transactions and other illegal activities.",
            boldText: "Protect Our Services:",
          },
        ],
      },
      {
        heading: "3. How We Share Information",
        content:
          "We may share your information with:",
        bulletPoints: [
          {
            text: " We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery.",
            boldText: "Service Providers:",
          },
          {
            text: "  We may share your information with business partners for joint marketing efforts or other collaborative projects.",
            boldText: "Business Partners:",
          },
          {
            text: "  We may disclose your information if required to do so by law or in response to a subpoena or court order.",
            boldText: "Legal Requirements:",
          },
          {
            text: " We may transfer your information in connection with a merger, sale, or other business transfer.",
            boldText: "Business Transfers:",
          },
        ],
      },
      {
        heading: "4. Your Choices",
        content:
          "You have several choices regarding your information:",
        bulletPoints: [
          {
            text: " You can update or delete your account information by logging into your account and making the necessary changes.",
            boldText: "Account Information:",
          },
          {
            text: "  You can opt out of receiving marketing communications from us by following the unsubscribe instructions in those communications.",
            boldText: "Marketing Communications:",
          },
          {
            text: "  You can prevent us from collecting location information by disabling location services on your device.",
            boldText: "Location Information:",
          },
        ],
      },
      {
        heading: "5. Data Security",
        content:
          "We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.",
      },
      {
        heading: "6. Children's Privacy",
        content:
          "Our services are not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete that information as quickly as possible.",
      },
      {
        heading: "7. Changes to This Privacy Policy",
        content:
          "We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through a notice on our website. We encourage you to review this Privacy Policy periodically to stay informed about our information practices.",
      },
      {
        heading: "8. Contact Us",
        content:
          "If you have any questions about this Privacy Policy, please contact us at influmart@gmail.com.",
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
              <Text style={styles.headerText}>Privacy Policy</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.content}>
            Welcome to Influmart! We are committed to protecting your privacy
            and ensuring that your personal information is handled in a safe and
            responsible manner. This Privacy Policy explains how we collect,
            use, and disclose information about you when you use our services.
          </Text>
        </View>
        {content.map((section, index) => (
          <View key={index} style={styles.section}>
            {section?.heading && <Text style={styles.heading}>{section.heading}</Text>}
            {section?.subheading && (
              <Text style={styles.subheading}>{section.subheading}</Text>
            )}
            {section?.content &&<Text style={styles.content}>{section.content}</Text>}
            {section.bulletPoints && (
              <View style={styles.bulletPoints}>
                {section.bulletPoints.map((point, idx) => (
                  <View key={idx} style={styles.bulletPoint}>
                    <Text style={styles.bulletPointText}>
                    • {point?.boldText && <Text style={styles.boldText}>{point.boldText}</Text>}
                      {point.text}
                      
                    </Text>
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

export default PPScreen;
