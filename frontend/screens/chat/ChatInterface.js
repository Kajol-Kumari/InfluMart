import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Depth1Frame7 from "../../components/Depth1Frame7";
import Depth1Frame from "../../components/Depth1Frame";
import MessageInput from "./components/MessageInput";
import { getMessages,sendMessage } from "../../controller/connectionsController";
import { chatStyles } from "./ChatStyles.scss";
import { useSocketContext } from "../../util/SocketContext";

const ChatInterface = ({ route, navigation }) => {
  const { name, image, conversationId,userId,userType,receiverId } = route.params;
  const [messages, setMessages] = useState([]);
  const { socket } = useSocketContext();

  useEffect(() => {
    const getdata = async () => {
      await getMessages(conversationId,userId,userType,setMessages);
    };
    getdata();
  }, [conversationId]);

  const handleSend = async (message) => {
    await sendMessage(userId,receiverId,message)
    await getMessages(conversationId,userId,userType,setMessages);
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.chatContent}>
          <TouchableOpacity
            onPress={() => navigation.navigate("InboxInterface")}
          >
            <Depth1Frame7
              depth4Frame0={require("../../assets/depth-4-frame-017.png")}
              requestDetails={`Chat with ${name}`}
              depth3Frame0BackgroundColor="#fff"
              requestDetailsWidth={"auto"}
              depth4Frame0FontFamily="BeVietnamPro-Bold"
              depth4Frame0Color="#000"
            />
          </TouchableOpacity>
          <View style={styles.messagesContainer}>
            {messages.map((message, index) => (
              <View key={index} style={styles.messageRow}>
                <View style={styles.messageLine}>
                  <View style={[styles.messageDot, styles.lineHeight]} />
                  <View style={styles.messageSmallDot} />
                  <View style={[styles.messageDot, styles.lineHeight]} />
                </View>
                <View style={styles.messageContent}>
                  <View style={styles.messageTextContainer}>
                  {message.sender.name}
                    <View style={styles.messageTextWrapper}>
                      <Text style={[styles.messageText, styles.timeText]}>
                        {message.content}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.messageTimeContainer}>
                    <View style={styles.messageTextContainer}>
                      <Text style={[styles.timeAgo, styles.timeText]}>
                        {message.timeAgo}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <MessageInput
            setNewMessage={handleSend}
          />
          <View style={styles.spacer} />
        </View>
      </ScrollView>
      <Depth1Frame />
    </View>
  );
};

const styles = StyleSheet.create(chatStyles);

export default ChatInterface;
