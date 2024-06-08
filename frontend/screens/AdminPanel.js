import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Modal, TextInput, Button } from "react-native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const AdminPanel = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setModalVisible(true);
  };

  const handleSave = () => {
    // Handle the save action here (e.g., update state or call an API)
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.adminpanel}>
        <View style={[styles.depth0Frame0, styles.frameLayout1]}>
          <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
            <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock]}>
              <View style={styles.depth2Frame0}>
                <View style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
                  <Image
                    style={styles.depth4Frame0}
                    contentFit="cover"
                    source={require("../assets/adminPanelBack.png")}
                  />
                </View>
                <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
                  <View style={styles.depth4Frame01}>
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                        Account settings
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.depth3Frame2, styles.depth3FrameLayout]}>
                  <View style={[styles.depth4Frame02, styles.depth3FrameLayout]} />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Logout')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame01}>
                <View style={styles.depth3Frame01}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      Logout
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Manage profile')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      Manage profile
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Password & security')}>
            <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
              <View style={styles.depth2Frame03}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                    Password & security
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Change password')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      Change password
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-11.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('2-Step Verification')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      2-Step Verification
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-11.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Security question')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      Security question
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-11.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Subscription')}>
            <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
              <View style={styles.depth2Frame07}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                    Subscription
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Manage subscription')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      Manage subscription
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Privacy')}>
            <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
              <View style={styles.depth2Frame09}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                    Privacy
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('View featured content')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      View featured content
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-11.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Social media')}>
            <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
              <View style={styles.depth2Frame011}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                    Social media
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Edit social media handles')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      Edit social media handles
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Billing')}>
            <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
              <View style={styles.depth2Frame013}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                    Billing
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Change pricing plan')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      Change pricing plan
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-11.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Support')}>
            <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
              <View style={styles.depth2Frame015}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                    Support
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Help center')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      Help center
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Contact us')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      Contact us
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionPress('Enter Password')}>
            <View style={[styles.depth1Frame1, styles.frameLayout1]}>
              <View style={styles.depth2Frame02}>
                <View style={styles.depth3Frame02}>
                  <View style={styles.depth5Frame0}>
                    <Text style={[styles.logout, styles.logoutFlexBox]}>
                      Delete account
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <View style={[styles.depth1Frame19, styles.frameLayout1]} />
        </View>
      </View>

      <Modal
  animationType="fade"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalBackground}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}> {selectedOption}</Text>
      <TextInput
        style={styles.input}
        placeholder={`Enter new ${selectedOption}`}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Save" onPress={handleSave} />
      <Button title="Cancel" onPress={() => setModalVisible(false)} />
    </View>
  </View>
</Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  frameLayout1: {
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth3FrameLayout: {
    width: 48,
    height: 48,
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  logoutFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  frameLayout: {
    width: 84,
    height: 32,
  },
  frameBg: {
    backgroundColor: Color.colorWhitesmoke,
    overflow: "hidden",
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    alignItems: "center",
    flexDirection: "row",
  },
  accountSettings: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: 'auto',
    height: 25,
    overflow: "hidden",
  },
  depth3Frame1: {
    width: 262,
    height: 23,
  },
  depth4Frame02: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  depth3Frame2: {
    flexDirection: "row",
  },
  depth2Frame0: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    width: 358,
  },
  depth1Frame0: {
    height: 72,
    backgroundColor: Color.colorWhite,
  },
  logout: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
  },
  depth3Frame01: {
    width: 258,
    height: 24,
    overflow: "hidden",
  },
  logout1: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  depth6Frame0: {
    width: 47,
    height: 21,
  },
  depth5Frame01: {
    borderRadius: 12,
    paddingVertical: 0,
    width: 84,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke,
  },
  depth3Frame11: {
    marginLeft: 16,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  depth2Frame01: {
    top: 12,
    height: 32,
    left: 16,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  depth1Frame1: {
    height: 44,
  },
  depth3Frame02: {
    width: 314,
    height: 24,
    overflow: "hidden",
  },
  depth3Frame12: {
    width: 28,
    height: 28,
    marginLeft: 16,
  },
  depth2Frame02: {
    top: 14,
    height: 28,
    left: 16,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  depth2Frame03: {
    width: 'auto',
    height: 25,
  },
  depth1Frame3: {
    height: 47,
    flexDirection: "row",
  },
  depth2Frame07: {
    width: 'auto',
    height: 25,
  },
  depth2Frame09: {
    width: 'auto',
    height: 25,
  },
  depth2Frame011: {
    width: 'auto',
    height: 25,
  },
  depth2Frame013: {
    width: 'auto',
    height: 25,
  },
  depth2Frame015: {
    width: 'auto',
    height: 23,
  },
  depth1Frame19: {
    height: 20,
  },
  depth0Frame0: {
    height: 1043,
    overflow: "hidden",
  },
  adminpanel: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

});

export default AdminPanel;

