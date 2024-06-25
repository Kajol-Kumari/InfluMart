import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Modal, TextInput, Button } from "react-native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";
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
          <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame0}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={[styles.depth3Frame0, styles.depth3FrameLayout]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/adminPanelBack.png")}
                />
              </TouchableOpacity>
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

          <View style={[styles.depth1Frame1, styles.frameLayout1,{marginBottom:Padding.p_base}]}>
            <View style={styles.depth2Frame01}>
              <View style={styles.depth3Frame01}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    Logout
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.logoutBtn} onPress={() => handleOptionPress('Logout')}>
                <Text style={{ fontSize: FontSize.size_sm, fontWeight: "500" }}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    Manage profile
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('Manage profile')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </TouchableOpacity>
            </View>
          </View>


          <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame03}>
              <TouchableOpacity onPress={() => handleOptionPress('Password & security')} style={styles.depth5Frame0}>
                <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                  Password & security
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    Change password
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('Change password')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-11.png")}
                />
              </TouchableOpacity>
            </View>
          </View>



          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    2-Step Verification
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('2-Step Verification')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-11.png")}
                />
              </TouchableOpacity>
            </View>
          </View>


          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    Security question
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('Security question')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-11.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame07}>
              <TouchableOpacity style={styles.depth5Frame0} onPress={() => handleOptionPress('Subscription')}>
                <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                  Subscription
                </Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    Manage subscription
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('Manage subscription')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame09}>
              <TouchableOpacity style={styles.depth5Frame0} onPress={() => handleOptionPress('Privacy')}>
                <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                  Privacy
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    View featured content
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('View featured content')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-11.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame011}>
              <TouchableOpacity style={styles.depth5Frame0} onPress={() => handleOptionPress('Social media')}>
                <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                  Social media
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    Edit social media handles
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('Edit social media handles')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame013}>
              <TouchableOpacity style={styles.depth5Frame0} onPress={() => handleOptionPress('Billing')}>
                <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                  Billing
                </Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    Change pricing plan
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('Change pricing plan')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-11.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame015}>
              <TouchableOpacity style={styles.depth5Frame0} onPress={() => handleOptionPress('Support')}>
                <Text style={[styles.accountSettings, styles.logoutFlexBox]}>
                  Support
                </Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    Help center
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('Help center')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    Contact us
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('Contact us')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.depth1Frame1, styles.frameLayout1]}>
            <View style={styles.depth2Frame02}>
              <View style={styles.depth3Frame02}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.logout, styles.logoutFlexBox]}>
                    Delete account
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress('Enter Password')}>
                <Image
                  style={styles.depth3Frame12}
                  contentFit="cover"
                  source={require("../assets/depth-3-frame-1.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

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
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: Color.colorWhite
  },
  frameLayout1: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  depth1FrameSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    width: "100%",
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
    width: "auto",
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
    width: "100%",
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
    width: "auto",
    height: "auto",
    overflow: "hidden"
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: Padding.p_base
  },
  depth1Frame1: {
    height: 44,
  },
  depth3Frame02: {
    width: "auto",
    height: 24,
    overflow: "hidden",
  },
  logoutBtn: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_base
  },
  depth3Frame12: {
    width: 28,
    height: 28,
    marginLeft: 16,
  },
  depth2Frame02: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: Padding.p_base
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
    height: "auto",
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

