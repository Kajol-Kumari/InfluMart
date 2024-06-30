import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Padding, Color } from "../../GlobalStyles";

const NavTab = ({ setTab, tab }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.cell,
            tab === "instagram" && styles.selectedCell,
          ]}
          onPress={() => setTab("instagram")}
        >
          <View style={styles.textContainer}>
            <Text style={[styles.text, tab === "instagram" && styles.selectedText]}> Instagram</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cell,
            styles.cellWithMargin,
            tab === "youtube" && styles.selectedCell,
          ]}
          onPress={() => setTab("youtube")}
        >
          <View style={styles.textContainer}>
            <Text style={[styles.text, tab === "youtube" && styles.selectedText]}> YouTube</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cell,
            styles.cellWithMargin,
            tab === "facebook" && styles.selectedCell,
          ]}
          onPress={() => setTab("facebook")}
        >
          <View style={styles.textContainer}>
            <Text style={[styles.text, tab === "facebook" && styles.selectedText]}> Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Color.colorLightgray,
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProBold,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  selectedText: {
    color: Color.colorWhite,
  },
  cellWithMargin: {
    marginLeft: 32,
  },
  cell: {
    paddingBottom: Padding.p_smi,
    paddingTop: Padding.p_base,
    justifyContent: "center",
    height: 53,
    borderBottomWidth: 0,
    borderColor: Color.colorGainsboro_100,
    alignItems: "center",
    borderStyle: "solid",
  },
  selectedCell: {
    borderBottomWidth: 3,
  },
  textContainer: {
    height: 21,
    alignItems: "center",
  },
  row: {
    width:"100%",
    borderColor: Color.colorDarkslategray_100,
    borderBottomWidth: 1,
    height: 56,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    overflow: "hidden",
    borderStyle: "solid",
    justifyContent:"space-evenly"
  },
  container: {
    height: 66,
    paddingBottom: Padding.p_xs,
  },
});

export default NavTab;
