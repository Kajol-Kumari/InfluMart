import { Image } from "expo-image";
import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { TosAndPpStyles } from "./Styles.scss";

const PPScreen = ({ route, navigation }) => {
  const navigate = route.params?.navigate;
  const content = [
    {
      subheading: "Contact Information:",
      bulletPoints: [
        { text: "Email: influmart.social@influmart.in" },
        { text: "Address: Bengaluru, Karnataka, India" },
      ],
    },
    {
      heading: "1. Information We Collect",
      subheading: "1.1 Information You Provide to Us",
      content:
        "We collect information that you provide directly to us, including:",
      bulletPoints: [
        {
          boldText: "Account Information:",
          text: " When you create an account, we collect your name, email address, password, and user type (influencer or brand).",
        },
        {
          boldText: "Profile Information:",
          text: " For influencers, this includes social media handles, follower counts, content niches, and portfolio. For brands, this includes company details, industry, and campaign preferences.",
        },
        {
          boldText: "Payment Information:",
          text: " We collect payment details for transactions, including bank account or credit card information.",
        },
        {
          boldText: "Communications:",
          text: " We store messages exchanged between users on our platform and communications with our support team.",
        },
        {
          boldText: "Campaign Data:",
          text: " Information about campaigns, including briefs, proposals, agreements, and performance metrics.",
        },
      ],
    },
    {
      subheading: "1.2 Information We Collect Automatically",
      content:
        "We automatically collect certain information about your use of our services, including:",
      bulletPoints: [
        {
          boldText: "Usage Information:",
          text: " Interactions with the platform, search queries, click-through rates, and time spent on various features.",
        },
        {
          boldText: "Device Information:",
          text: " Hardware model, operating system, unique device identifiers, and mobile network information.",
        },
        {
          boldText: "Location Information:",
          text: " General location based on IP address and precise location if you grant permission.",
        },
        {
          boldText: "Cookies and Similar Technologies:",
          text: " We use cookies and similar tracking technologies to collect usage data and personalize your experience.",
        },
      ],
    },
    {
      subheading: "1.3 Information from Third Parties",
      content:
        "We may receive information about you from third parties, including:",
      bulletPoints: [
        {
          boldText: "Social Media Platforms:",
          text: " When you link your social media accounts, we may receive profile data and engagement metrics.",
        },
        {
          boldText: "Analytics Providers:",
          text: " We use third-party analytics tools to measure traffic and usage trends.",
        },
        {
          boldText: "Verification Services:",
          text: " We may use third-party services to verify influencer metrics or brand credentials.",
        },
      ],
    },
    {
      heading: "2. How We Use Your Information",
      content: "We use the information we collect to:",
      bulletPoints: [
        {
          boldText: "Provide and Improve Our Services:",
          text: " Operate the platform, match influencers with brands, and enhance user experience.",
        },
        {
          boldText: "Facilitate Transactions:",
          text: " Process payments, enforce agreements, and prevent fraud.",
        },
        {
          boldText: "Communicate:",
          text: " Send notifications, updates, and marketing communications (with your consent where required).",
        },
        {
          boldText: "Personalization:",
          text: " Tailor content, recommendations, and advertising based on your preferences and activities.",
        },
        {
          boldText: "Analytics:",
          text: " Analyze usage patterns to improve our services and develop new features.",
        },
        {
          boldText: "Legal Compliance:",
          text: " Comply with legal obligations and enforce our terms of service.",
        },
      ],
    },
    {
      heading: "3. How We Share Your Information",
      content: "We may share your information with:",
      bulletPoints: [
        {
          boldText: "Other Users:",
          text: " Sharing profile information between influencers and brands as necessary for collaboration.",
        },
        {
          boldText: "Service Providers:",
          text: " Third-party vendors who perform services on our behalf, such as payment processing and data analysis.",
        },
        {
          boldText: "Business Partners:",
          text: " For joint marketing efforts or platform integrations, with your consent where required.",
        },
        {
          boldText: "Legal Requirements:",
          text: " When required by law, subpoena, or to protect our rights.",
        },
        {
          boldText: "Business Transfers:",
          text: " In connection with a merger, acquisition, or sale of assets.",
        },
      ],
    },
    {
      heading: "4. Your Rights and Choices",
      content: "You have several rights regarding your personal information:",
      bulletPoints: [
        {
          boldText: "Access and Update:",
          text: " You can access and update your account information through your profile settings.",
        },
        {
          boldText: "Data Portability:",
          text: " You can request a copy of your data in a structured, machine-readable format.",
        },
        {
          boldText: "Deletion:",
          text: " You can request deletion of your account and associated data, subject to legal retention requirements.",
        },
        {
          boldText: "Marketing Opt-out:",
          text: " You can opt out of marketing communications at any time.",
        },
        {
          boldText: "Cookies:",
          text: " You can manage cookie preferences through your browser settings.",
        },
      ],
    },
    {
      heading: "5. Data Security",
      content:
        "We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.",
    },
    {
      heading: "6. International Data Transfers",
      content:
        "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in compliance with applicable data protection laws.",
    },
    {
      heading: "7. Children's Privacy",
      content:
        "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.",
    },
    {
      heading: "8. Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. We encourage you to review this Privacy Policy periodically.",
    },
    {
      heading: "9. Contact Us",
      content:
        "If you have any questions about this Privacy Policy or our data practices, please contact us at:\nEmail: influmart.social@influmart.in\nAddress: Bengaluru, Karnataka, India",
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
            {section?.heading && (
              <Text style={styles.heading}>{section.heading}</Text>
            )}
            {section?.subheading && (
              <Text style={styles.subheading}>{section.subheading}</Text>
            )}
            {section?.content && (
              <Text style={styles.content}>{section.content}</Text>
            )}
            {section.bulletPoints && (
              <View style={styles.bulletPoints}>
                {section.bulletPoints.map((point, idx) => (
                  <View key={idx} style={styles.bulletPoint}>
                    <Text style={styles.bulletPointText}>
                      •{" "}
                      {point?.boldText && (
                        <Text style={styles.boldText}>{point.boldText}</Text>
                      )}
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
