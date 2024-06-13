import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const InboxInterface = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (text) => {
    setSearchQuery(text);
    // Add logic to handle the search query, e.g., filter the inbox messages
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.inboxinterface, styles.depth0Frame0Layout]}>
        <View style={[styles.depth0Frame0, styles.depth0Frame0Layout]}>
          <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame0}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <View style={styles.depth3Frame0}>
                  <View style={styles.depth4Frame0}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.inbox, styles.inboxFlexBox]}>Inbox</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={[styles.depth3Frame1, styles.frameLayout1]}>
                <TouchableOpacity onPress={() => navigation.navigate('NewMessage')}>
                  <View style={[styles.depth4Frame01, styles.frameFlexBox]}>
                    <Image
                      style={styles.depth5Frame01}
                      contentFit="cover"
                      source={require("../assets/depth-5-frame-021.png")}
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
          <TouchableOpacity onPress={() => navigation.navigate('ChatInterface')}>
            <View style={[styles.depth1Frame2, styles.depth1FrameLayout]}>
              <View style={styles.depth2Frame02}>
                <Image
                  style={[styles.depth3Frame02, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-05.png")}
                />
                <View style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}>
                  <View style={styles.depth4Frame03}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.projectWithAnna, styles.searchForALayout]}>
                        Project with Anna
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.depth4Frame1, styles.depth4FrameLayout]}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.inProgress, styles.searchForATypo]}>In progress</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('ChatInterface')}>
            <View style={[styles.depth1Frame2, styles.depth1FrameLayout]}>
              <View style={styles.depth2Frame02}>
                <Image
                  style={[styles.depth3Frame02, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-06.png")}
                />
                <View style={[styles.depth3Frame21, styles.depth3FrameSpaceBlock]}>
                  <View style={styles.depth4Frame04}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.projectWithAnna, styles.searchForALayout]}>
                        Project with Will
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.depth4Frame11, styles.depth4FrameLayout]}>
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
            <TouchableOpacity onPress={() => navigation.navigate('NewMessage')}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  depth0Frame0Layout: {
    height: 844,
    backgroundColor: Color.colorWhite,
  },
  depth1FrameSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  inboxFlexBox: {
    textAlign: "left",
    color: Color.colorGray_500,
  },
  frameLayout1: {
    width: 48,
    height: 48,
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  searchForATypo: {
    color: Color.colorSlategray_200,
    fontFamily: FontFamily.beVietnamProRegular,
    textAlign: "left",
  },
  depth1FrameLayout: {
    height: 72,
    backgroundColor: Color.colorWhite,
  },
  frameLayout: {
    width: 56,
    height: 56,
    overflow: "hidden",
  },
  depth3FrameSpaceBlock: {
    marginLeft: 16,
    height: 45,
    justifyContent: "center",
  },
  searchForALayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth4FrameLayout: {
    height: 21,
    overflow: "hidden",
  },
  inbox: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.beVietnamProBold,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 'auto',
    height: 23,
    overflow: "hidden",
  },
  depth3Frame0: {
    width: 310,
    height: 23,
    alignItems: "center",
    flexDirection: "row",
  },
  depth5Frame01: {
    width: 24,
    height: 24,
  },
  depth4Frame01: {
    width: 48,
    height: 48,
    alignItems: "center",
  },
  depth3Frame1: {
    flexDirection: "row",
  },
  depth2Frame0: {
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    width: 358,
  },
  depth1Frame0: {
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    height: 72,
    backgroundColor: Color.colorWhite,
  },
  searchForA: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth3Frame11: {
    width: 'auto',
    marginLeft: 12,
    height: 48,
    flex: 1, // Add flex: 1 to make it responsive
  },
  depth2Frame01: {
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    width: 358,
    paddingHorizontal: Padding.p_base,
    height: 72,
  },
  depth1Frame1: {
    height: 96,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth3Frame02: {
    borderRadius: Border.br_9xl,
  },
  projectWithAnna: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    textAlign: "left",
    color: Color.colorGray_500,
  },
  depth4Frame03: {
    width: 160,              //check later
    height: 24,
    overflow: "hidden",
  },
  inProgress: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
  },
  depth4Frame1: {
    width: 140,
  },
  depth3Frame2: {
    width: 140,
  },
  depth2Frame02: {
    position: "absolute",
    top: 8,
    left: 16,
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  depth1Frame2: {
    width: 390,
  },
  hiAnnaHere: {
    fontFamily: FontFamily.beVietnamProRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_500,
  },
  depth1Frame3: {
    height: 'auto',
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_xs,
  },
  depth4Frame04: {
    width: 149,       //check later
    height: 24,
    overflow: "hidden",
  },
  depth4Frame11: {
    width: 129,
  },
  depth3Frame21: {
    width: 129,
  },
  depth1Frame6: {
    height: 308,
    width: 390,
  },
  depth3Frame04: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorRoyalblue,
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  depth2Frame06: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  depth1Frame7: {
    height: 76,
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    overflow: "hidden",
    width: 390,
  },
  depth1Frame8: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  depth0Frame0: {
    overflow: "hidden",
    width: 390,
  },
  inboxinterface: {
    flex: 1,
    width: "100%",
  },
  searchBar: {
    flex: 1,
    fontFamily: FontFamily.beVietnamProRegular,
    fontSize: FontSize.size_base,
    color: Color.colorGray_500,
    marginLeft: 12,
  },
});

export default InboxInterface;
