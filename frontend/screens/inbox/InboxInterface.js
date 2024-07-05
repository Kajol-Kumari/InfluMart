import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Color } from "../../GlobalStyles";
import { inboxStyles } from './InboxInterface.scss';

const InboxInterface = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "Project with Anna",
      status: "In progress",
      preview: "Hi Anna, here are the assets and schedule for our collaboration.",
      image: require("../../assets/depth-3-frame-05.png")
    },
    {
      id: 2,
      title: "Project with Will",
      status: "Not started",
      preview: "Hi Will, how was your experience using the product?",
      image: require("../../assets/depth-3-frame-06.png")
    },
  ]);

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const filteredMessages = messages.filter(message =>
    message.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.inboxContainer, { height: Dimensions.get("window").height }]}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Inbox</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("NewMessage")}>
              <View style={styles.newMessageButton}>
                <Image
                  style={styles.newMessageIcon}
                  contentFit="cover"
                  source={require("../../assets/depth-5-frame-021.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchContent}>
            <Image
              style={styles.searchIcon}
              contentFit="cover"
              source={require("../../assets/depth-3-frame-04.png")}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for a project, brand or Influencer"
              placeholderTextColor={Color.colorSlategray_200}
              value={searchQuery}
              onChangeText={handleSearchChange}
            />
          </View>
        </View>
        {filteredMessages.map(message => (
          <React.Fragment key={message.id}>
            <TouchableOpacity onPress={() => navigation.navigate("ChatInterface",{name:message.title, image: message.image})}>
              <View style={styles.messageContainer}>
                <Image
                  style={styles.messageImage}
                  contentFit="cover"
                  source={message.image}
                />
                <View style={styles.messageContent}>
                  <Text style={styles.messageTitle}>{message.title}</Text>
                  <Text style={styles.messageStatus}>{message.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.messagePreviewContainer}>
              <Text style={styles.messagePreview}>{message.preview}</Text>
            </View>
          </React.Fragment>
        ))}
        <View style={styles.spacer} />
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate("NewMessage")}>
            <View style={styles.newMessageFooterButton}>
              <Image
                style={styles.newMessageIcon}
                contentFit="cover"
                source={require("../../assets/depth-4-frame-016.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.spacer} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(inboxStyles);

export default InboxInterface;
