import React, { useState, useContext } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../../../GlobalStyles";

const MessageInput = ({setNewMessage}) => {
  const [message, setMessage] = useState("");
  const handleSend = () => {
    setNewMessage(message);
    setMessage("");
  };

  return (
    <View style={[styles.messageInputContainer, styles.flexRow]}>
      <Image
        style={styles.profileImage}
        contentFit="cover"
        source={require("../../../assets/depth-2-frame-0.png")}
      />
      <View style={[styles.inputWrapper, styles.flexRow]}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={message}
            onChangeText={setMessage}
          />
        </View>
        <View style={[styles.sendButtonWrapper, styles.flexCenter]}>
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Image
              style={styles.sendIcon}
              contentFit="cover"
              source={require("../../../assets/depth-6-frame-0.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  flexCenter: {
    justifyContent: "center",
  },
  profileImage: {
    borderRadius: Border.br_xl,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  input: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorDimgray,
    textAlign: "left",
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    height: 24,
    overflow: "hidden",
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
  sendButton: {
    padding: Padding.p_7xs,
  },
  sendButtonWrapper: {
    justifyContent: "flex-end",
    marginLeft: 16,
    height: 32,
    width: 32,
    alignItems: "center",
  },
  inputWrapper: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 48,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xs,
    marginLeft: 12,
  },
  messageInputContainer: {
    width: 390,
    height: 72,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
});

export default MessageInput;
