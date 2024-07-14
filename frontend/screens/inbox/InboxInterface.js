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
import Loader from '../../shared/Loader'

const InboxInterface = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [conversations, setConversations] = useState([]);
  const [userId, setUserId] = useState(null)
  const [userType, setUserType] = useState(null)
  const { showAlert } = useAlert()
  const[loading,setLoading]=useState(false)

  const [showFloatButton, setShowFloatButton] = React.useState(true);
  const [scrollOffset, setScrollOffset] = React.useState(0);

  function handleScroll(event) {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > scrollOffset ? 'down' : 'up';
    const shouldShowButton = direction === 'up';
    if (shouldShowButton !== showFloatButton) {
      setShowFloatButton(shouldShowButton);
    }
    setScrollOffset(currentOffset);
  }

  useEffect(() => {
    const getData = async () => {
      let id;
      let data;
      const _influencer = await AsyncStorage.getItem('influencerId')
      const _brand = await AsyncStorage.getItem('brandId')
      if (_influencer) {
        id = _influencer;
        data = await getAllConversations(id, 'influencer', setConversations, showAlert)
        setUserId(id)
        setUserType('influencer')
      } else if (_brand) {
        id = _brand;
        data = await getAllConversations(id, 'brand', setConversations, showAlert)
        setUserId(id)
        setUserType('brand')
      }
      setLoading(false)
    }
    setLoading(true)
    getData();
  }, []);

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {loading&&<Loader loading={loading}/>}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Inbox</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("NewMessage")}>
            <View style={styles.newMessageButton}>
              <Image
                style={styles.newMessageIcon}
                contentFit="cover"
                source={require("../../assets/plus_icon.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView onScroll={handleScroll} contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.inboxContainer, { height: Dimensions.get("window").height }]}>
          <View style={styles.searchContainer}>
            <View style={styles.searchContent}>
              <Image
                style={styles.searchIcon}
                contentFit="cover"
                source={require("../../assets/search_icon.png")}
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
          {conversations?.map((message, index) => (
            // <View key={index}>
            <TouchableOpacity key={index} onPress={() => navigation.navigate("ChatInterface", { name: message?.name, image: message?.profileUrl, conversationId: message?.conversationId, userId: userId, userType: userType, receiverId: message?.receiverId })}>
              <View style={styles.messageContainer}>
              {message?.profileUrl == null ? (
                  <ImageWithFallback
                    imageStyle={styles.messageImage}
                    image={message?.profileUrl}
                    key={index}
                  />
                ) : (
                  message?.profileUrl && (
                    <ImageWithFallback
                      imageStyle={styles.messageImage}
                      image={isNaN(message?.profileUrl)==false?`${message?.profileUrl}`:message?.profileUrl}
                      key={index}
                    />
                  )
                )}
                <View style={styles.messageContent}>
                  <Text style={styles.messageTitle}>{message?.name}</Text>
                  <Text style={styles.messageStatus}>{message?.lastUpdate}</Text>
                </View>
              </View>
              <View style={styles.messagePreviewContainer}>
                <Text style={styles.messagePreview}>{message?.lastMessage}</Text>
              </View>
            </TouchableOpacity>

          ))}
          <View style={styles.spacer} />
          <View style={styles.spacer} />
        </View>
      </ScrollView>
      <View style={[styles.footer, { opacity: showFloatButton ? 1 : 0.4 }]}>
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
    </View>
  );
};

const styles = StyleSheet.create(inboxStyles);

export default InboxInterface;
