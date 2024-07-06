import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";

import { chatStyles } from './ChatStyles.scss';
import Depth1Frame7 from "../../components/Depth1Frame7";
import Depth1Frame from "../../components/Depth1Frame";
import MessageInput from "./components/MessageInput";

const ChatInterface = ({route, navigation}) => {
  const name= route.params?.name
  const messages = [
    { text: "Liliam joined the chat", time: "2d ago" },
    { text: "You sent a message", time: "1d ago" },
    { text: "You sent a message", time: "1d ago" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.chatContent}>
        <TouchableOpacity onPress={() => navigation.navigate('InboxInterface')}>
            <Depth1Frame7
              depth4Frame0={require("../../assets/depth-4-frame-017.png")}
              requestDetails={`Chat ${name}`}
              depth3Frame0BackgroundColor="#fff"
              requestDetailsWidth={'auto'}
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
                    <View style={styles.messageTextWrapper}>
                      <Text style={[styles.messageText, styles.timeText]}>
                        {message.text}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.messageTimeContainer}>
                    <View style={styles.messageTimeWrapper}>
                      <Text style={[styles.timeAgo, styles.timeText]}>
                        {message.time}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <MessageInput />
          <View style={styles.spacer} />
          <Depth1Frame
            depth5Frame0={require("../../assets/depth-5-frame-022.png")}
            depth5Frame01={require("../../assets/depth-5-frame-023.png")}
            search="Collaborations"
            depth5Frame02={require("../../assets/depth-5-frame-024.png")}
            myBrands="Inbox"
            depth5Frame03={require("../../assets/depth-5-frame-025.png")}
            propBorderColor="#ededed"
            propWidth={81}
            propWidth1={35}
            propFontFamily="BeVietnamPro-Medium"
            propColor="#000"
            propWidth2={91}
            propWidth3={91}
            propFontFamily1="BeVietnamPro-Medium"
            propColor1="#6b6b6b"
            propWidth4={81}
            propWidth5={33}
            propFontFamily2="BeVietnamPro-Medium"
            propColor2="#6b6b6b"
            propWidth6={81}
            propWidth7={40}
            propFontFamily3="BeVietnamPro-Medium"
            propColor3="#6b6b6b"
          />
          <View style={styles.footerSpacer} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(chatStyles);

export default ChatInterface;
