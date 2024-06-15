import * as React from "react";
import { useState } from "react";
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
  const { width, height } = Dimensions.get("window");

  const handleSearchChange = (text) => {
    setSearchQuery(text);
    // Add logic to handle the search query, e.g., filter the inbox messages
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.inboxinterface, { height }]}>
        <View style={[styles.depth0Frame0, { height }]}>
          <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame0}>
              <TouchableOpacity
                onPress={() => navigation.navigate("UserProfile")}
              >
                <View style={styles.depth3Frame0}>
                  <View style={styles.depth4Frame0}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.inbox, styles.inboxFlexBox]}>
                        Inbox
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={[styles.depth3Frame1, styles.frameLayout1]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("NewMessage")}
                >
                  <View style={[styles.depth4Frame01, styles.frameFlexBox]}>
                    <Image
                      style={styles.depth5Frame01}
                      contentFit="cover"
                      /*source={require("../assets/depth-5-frame-021.png")}*/
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame1}>
            <View style={styles.depth2Frame01}>
              <Image
                style={styles.depth5Frame01}
                contentFit="cover"
                source={require("../assets/depth-3-frame-04.png")}
              />
              <View style={styles.depth3Frame11}>
                <TextInput
                  style={styles.searchBar}
                  placeholder="Search for a project, brand or Influencer"
                  placeholderTextColor={Color.colorSlategray_200}
                  value={searchQuery}
                  onChangeText={handleSearchChange}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChatInterface")}
          >
            <View style={[styles.depth1Frame2, styles.depth1FrameLayout]}>
              <View style={styles.depth2Frame02}>
                <Image
                  style={[styles.depth3Frame02, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-05.png")}
                />
                <View
                  style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}
                >
                  <View style={styles.depth4Frame03}>
                    <View style={styles.depth5Frame0}>
                      <Text
                        style={[
                          styles.projectWithAnna,
                          styles.searchForALayout,
                        ]}
                      >
                        Project with Anna
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.depth4Frame1, styles.depth4FrameLayout]}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.inProgress, styles.searchForATypo]}>
                        In progress
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.hiAnnaHere}>
                Hi Anna, here are the assets and schedule for our collaboration.
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChatInterface")}
          >
            <View style={[styles.depth1Frame2, styles.depth1FrameLayout]}>
              <View style={styles.depth2Frame02}>
                <Image
                  style={[styles.depth3Frame02, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-06.png")}
                />
                <View
                  style={[styles.depth3Frame21, styles.depth3FrameSpaceBlock]}
                >
                  <View style={styles.depth4Frame04}>
                    <View style={styles.depth5Frame0}>
                      <Text
                        style={[
                          styles.projectWithAnna,
                          styles.searchForALayout,
                        ]}
                      >
                        Project with Will
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[styles.depth4Frame11, styles.depth4FrameLayout]}
                  >
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.inProgress, styles.searchForATypo]}>
                        Not started
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth5Frame0}>
              <Text style={styles.hiAnnaHere}>
                Hi Will, how was your experience using the product?
              </Text>
            </View>
          </View>
          <View style={styles.depth1Frame6} />
          <View style={[styles.depth1Frame7, styles.frameFlexBox]}>
            <TouchableOpacity onPress={() => navigation.navigate("NewMessage")}>
              <View style={[styles.depth2Frame06, styles.frameLayout]}>
                <View style={styles.depth3Frame04}>
                  <Image
                    style={styles.depth5Frame01}
                    contentFit="cover"
                    source={require("../assets/depth-4-frame-016.png")}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.depth1Frame8} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("NewMessage")}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create(inboxStyles);

export default InboxInterface;
/*InboxInterface*/
