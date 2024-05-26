import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Depth1Frame1 from "../components/Depth1Frame1";
import Depth1Frame from "../components/Depth1Frame";
import ProfileContainer from "../components/ProfileContainer";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const GalileoDesign = () => {
  return (
    <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
        <Depth1Frame1 />
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
        <Depth1Frame />
        <View style={styles.depth1Frame3} />
        <ProfileContainer />
        <View style={styles.depth1Frame5} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth4FrameLayout: {
    width: 2,
    backgroundColor: Color.colorGainsboro,
  },
  dAgoTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth4Frame0: {
    height: 16,
  },
  depth4Frame1: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray,
    width: 8,
    height: 8,
    marginTop: 4,
  },
  depth4Frame2: {
    height: 40,
    marginTop: 4,
  },
  depth3Frame0: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 72,
  },
  liliamJoinedThe: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    color: Color.colorBlack,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: 170,
    height: 24,
  },
  dAgo: {
    fontFamily: FontFamily.beVietnamProRegular,
    color: Color.colorDimgray,
  },
  depth4Frame11: {
    width: 55,
    height: 24,
  },
  depth3Frame1: {
    width: 310,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    marginLeft: 8,
    height: 72,
  },
  depth2Frame0: {
    width: 358,
    flexDirection: "row",
    height: 72,
  },
  depth4Frame03: {
    width: 155,
    height: 24,
  },
  depth4Frame13: {
    width: 51,
    height: 24,
  },
  depth1Frame1: {
    height: 216,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    width: 390,
  },
  depth1Frame3: {
    height: 389,
    width: 390,
  },
  depth1Frame5: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  galileoDesign: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GalileoDesign;
