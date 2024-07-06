import React, { useState, useContext, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Color } from "../../GlobalStyles";
import { inboxStyles } from './InboxInterface.scss';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllConversations } from "../../controller/connectionsController";
import { useAlert } from "../../util/AlertContext";
import ImageWithFallback from "../../util/ImageWithFallback";

const InboxInterface = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [conversations, setConversations] = useState([]);
  const [userId,setUserId] = useState(null)
  const [userType,setUserType] = useState(null)
  const {showAlert} = useAlert()
  useEffect(() => {
    const getData = async () => {
      let id;
      let data;
      const _influencer = await AsyncStorage.getItem('influencerId')
      const _brand = await AsyncStorage.getItem('brandId')
      console.log(_influencer, _brand)
      if (_influencer) {
        id = _influencer;
        data = await getAllConversations(id, 'influencer',setConversations,showAlert)
        setUserId(id)
        setUserType('influencer')
      } else if (_brand) {
        id = _brand;
        data = await getAllConversations(id, 'brand',setConversations,showAlert)
        setUserId(id)
        setUserType('brand')
      }
    }
    getData(); 
  }, []);

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };
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
        {conversations?.map((message,index) => (
          <React.Fragment key={index}>
            <TouchableOpacity onPress={() => navigation.navigate("ChatInterface", { name: message?.name, image: message?.profileUrl, conversationId:message?.conversationId,userId:userId,userType:userType,receiverId: message?.receiverId })}>
              <View style={styles.messageContainer}>
                <ImageWithFallback image={message?.profileUrl} imageStyle={styles.messageImage} key={index} />
                <View style={styles.messageContent}>
                  <Text style={styles.messageTitle}>{message?.name}</Text>
                  <Text style={styles.messageStatus}>{message?.lastUpdate}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.messagePreviewContainer}>
              <Text style={styles.messagePreview}>{message?.lastMessage}</Text>
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
