import * as React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Depth1Frame7 from "../../components/Depth1Frame7";
import Depth1Frame12 from "../../components/Depth1Frame12";
import Depth1Frame from "../../components/Depth1Frame";
import { chatStyle } from './ChatStyles.scss';

const ChatInterface = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatinterface}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.depth0Frame0}>
          <TouchableOpacity onPress={() => navigation.navigate('InboxInterface')}>
            <Depth1Frame7
              depth4Frame0={require("../../assets/depth-4-frame-017.png")}
              requestDetails="Chat with Liliam"
              depth3Frame0BackgroundColor="#fff"
              requestDetailsWidth={'auto'}
              depth4Frame0FontFamily="BeVietnamPro-Bold"
              depth4Frame0Color="#000"
            />
          </TouchableOpacity>
          <View style={styles.depth1Frame1}>
            <View style={styles.depth2Frame0}>
              <View style={styles.depth3Frame0}>
                <View style={[styles.depth4Frame0, styles.depth4FrameLayout]} />
                <View style={styles.depth4Frame1} />
                <View style={[styles.depth4Frame2, styles.depth4FrameLayout]} />
              </View>
              <View style={styles.depth3Frame1}>
                <View style={styles.depth4Frame01}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.liliamJoinedThe, styles.dAgoTypo]}>
                      Liliam joined the chat
                    </Text>
                  </View>
                </View>
                <View style={styles.depth4Frame11}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.dAgo, styles.dAgoTypo]}>2d ago</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.depth2Frame0}>
              <View style={styles.depth3Frame0}>
                <View style={[styles.depth4Frame0, styles.depth4FrameLayout]} />
                <View style={styles.depth4Frame1} />
                <View style={[styles.depth4Frame2, styles.depth4FrameLayout]} />
              </View>
              <View style={styles.depth3Frame1}>
                <View style={styles.depth4Frame03}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.liliamJoinedThe, styles.dAgoTypo]}>
                      You sent a message
                    </Text>
                  </View>
                </View>
                <View style={styles.depth4Frame13}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.dAgo, styles.dAgoTypo]}>1d ago</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.depth2Frame0}>
              <View style={styles.depth3Frame0}>
                <View style={[styles.depth4Frame0, styles.depth4FrameLayout]} />
                <View style={styles.depth4Frame1} />
                <View style={[styles.depth4Frame2, styles.depth4FrameLayout]} />
              </View>
              <View style={styles.depth3Frame1}>
                <View style={styles.depth4Frame03}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.liliamJoinedThe, styles.dAgoTypo]}>
                      You sent a message
                    </Text>
                  </View>
                </View>
                <View style={styles.depth4Frame13}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.dAgo, styles.dAgoTypo]}>1d ago</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Depth1Frame12 />
          <View style={styles.depth1Frame3} />
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
          <View style={styles.depth1Frame5} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(chatStyle);

export default ChatInterface;
