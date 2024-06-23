import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Padding, FontFamily, FontSize, Border, Color } from "../../../GlobalStyles";

const Dropdown = ({ label, options, selectedValue, onSelect }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.dropdownToggle}
        onPress={() => setDropdownVisible(!dropdownVisible)}
      >
        <Text style={styles.selectedValue}>
          {selectedValue || label || 'Select'}
        </Text>
        <Icon name="chevron-down" size={20} color="#555" style={{ marginLeft: 10 }} />
      </TouchableOpacity>

      {dropdownVisible && (
        <View style={styles.dropdownList}>
          <ScrollView style={styles.dropdownScroll}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handleSelect(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: Color.colorAliceblue,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dropdownToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  selectedValue: {
    flex: 1,
    color: Color.colorSteelblue_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  dropdownList: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    maxHeight: 150,
  },
  dropdownScroll: {
    maxHeight: 150,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
});

export default Dropdown;
