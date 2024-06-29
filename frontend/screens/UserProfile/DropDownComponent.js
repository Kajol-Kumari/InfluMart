import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, Padding, FontSize, FontFamily } from "../../GlobalStyles";

const DropdownComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    if (typeof content === 'string' || typeof content === 'number') {
      return <Text style={styles.contentText}>{content}</Text>;
    } else if (Array.isArray(content.bullet)) {
      return (
        <View>
          {content.bullet.map((item, index) => (
            <Text key={index} style={styles.contentText}>• {item.content}</Text>
          ))}
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={[styles.title, isOpen && styles.openTitle]}>{title}</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={isOpen ? require("../../assets/depth-4-frame-1.png") : require("../../assets/depth-4-frame-11.png")}
          />
        </View>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{renderContent()}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_xs,
    padding: Padding.p_base,
    margin: "auto",
    paddingHorizontal:Padding.p_base,
  },
  header: {
    width:"100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
    height: 21,
  },
  title: {
    fontWeight: "500",
    fontFamily: FontFamily.beVietnamProMedium,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 21,
  },
  openTitle: {
    color: Color.colorPrimary,
  },
  icon: {
    width: 20,
    height: 20,
  },
  content: {
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_xs,
    fontFamily: FontFamily.beVietnamProRegular,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: "#CCCCCC",
    marginTop: Padding.p_base,
  },
  contentText: {
    color: "#CCCCCC",
    fontFamily: FontFamily.beVietnamProRegular,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
  },
});

export default DropdownComponent;