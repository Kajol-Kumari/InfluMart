import { TextInput, FlatList, TouchableOpacity, Text, View, Modal, Button, StyleSheet, SafeAreaView } from "react-native";
import { GOOGLE_API_KEY, CLIENT_URL } from "@env";
import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { Image } from "expo-image";
import { Border, Color, Padding } from '../GlobalStyles'

const GooglePlacesInput = ({ setData, setModalVisible }) => {
  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState([]);

  const fetchPredictions = async (input) => {
    const apiKey = GOOGLE_API_KEY;
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`
    );
    const data = await response.json();
    setPredictions(data.predictions);
  };

  // Debounce the fetchPredictions function
  const debouncedFetchPredictions = useCallback(debounce(fetchPredictions, 300), []);

  const handleInputChange = (text) => {
    setQuery(text);
    if (text.length > 1) {
      debouncedFetchPredictions(text);
    } else {
      setPredictions([]);
    }
  };

  const handleClick = (item) => {
    setData(item);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          value={query}
          onChangeText={handleInputChange}
          placeholder="Search"
        />
        <TouchableOpacity style={styles.closeBtn} onPress={()=>{setModalVisible(false)}}>
          <Image source={require('../assets/depth-4-frame-016.png')} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={predictions}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleClick(item.description)}
          >
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const PlaceSearchBar = ({
  modalVisible,
  setModalVisible,
  handlePlaceSelected,
}) => {
  return (
    <SafeAreaView style={[styles.container,{display:modalVisible?"flex":"none"}]}>
      <View style={styles.popup}>
        <View style={styles.modalContainer}>
          <GooglePlacesInput
            setData={handlePlaceSelected}
            setModalVisible={setModalVisible}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  item: {
    padding: 10,
  },
  popup: {
    width: "100%",
    height: 350,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderColor: "#ccc"
  },
  modalContainer: {
    width: "100%",
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: "auto"
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    paddingHorizontal: Padding.p_base
  },
  textInput: {
    height: 50,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#ddd",
    fontSize: 18,
    width: "80%",
  },
  listView: {
    backgroundColor: "#fff",
    zIndex: 1,
  },
  row: {
    backgroundColor: "#fff",
    padding: 13,
    height: 44,
    flexDirection: "row",
  },
  closeBtn: {
    backgroundColor: Color.colorRoyalblue,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_5xs
  },
  closeIcon: {
    width: 24, height: 24,
    transform: [{ rotate: "45deg" }]
  }
});

export default PlaceSearchBar;
