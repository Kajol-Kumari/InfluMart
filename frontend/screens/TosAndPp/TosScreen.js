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
const TosScreen = ({route,navigation}) => {
  const navigate = route.params?.navigate;
  const content = [
    {
      subheading: "Contact Information:",
      bulletPoints: [
        "Email: influmart@gmail.com",
        "Address: [Your Company Address Here]",
      ],
    },
    {
      heading: "1. Acceptance of Terms",
      content:
        "By accessing and using Influmart, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
    },
    {
      heading: "2. Description of Service",
      content:
        "Influmart provides a platform for influencers and brands to connect and collaborate. Our services include but are not limited to facilitating communication, project management, and payment processing between influencers and brands.",
    },
    {
      heading: "3. User Accounts",
      content:
        "To use certain features of Influmart, you must register and create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
    },
    {
      heading: "4. User Conduct",
      content:
        "You agree to use Influmart only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the platform. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within Influmart.",
    },
    {
      heading: "5. Intellectual Property",
      content:
        "All content, trademarks, and data on this site, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs, and agreements, are the property of or licensed to Influmart and as such are protected from infringement by local and international legislation and treaties.",
    },
    {
      heading: "6. Privacy Policy",
      content:
        "We respect your privacy and are committed to protecting your personal information. Our Privacy Policy explains how we collect, use, and disclose information about you.",
    },
    {
      heading: "7. Payment Terms",
      content:
        "Influmart facilitates payments between influencers and brands. By using our payment services, you agree to our Payment Terms, which are incorporated herein by reference.",
    },
    {
      heading: "8. Termination",
      content:
        "We reserve the right to terminate or suspend your account and access to Influmart at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users of Influmart, us, or third parties, or for any other reason.",
    },
    {
      heading: "9. Limitation of Liability",
      content:
        "Influmart shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the platform; (b) any unauthorized access to or use of our servers and/or any personal information stored therein.",
    },
    {
      heading: "10. Governing Law",
      content:
        "These Terms of Service shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.",
    },
    {
      heading: "11. Changes to Terms",
      content:
        "We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
    },
    {
      heading: "12. Contact Us",
      content:
        "If you have any questions about these Terms of Service, please contact us at influmart@gmail.com.",
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
