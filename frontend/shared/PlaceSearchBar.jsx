import { TextInput, FlatList, TouchableOpacity, Text, View, Modal, Button, StyleSheet, SafeAreaView } from "react-native";
import { GOOGLE_API_KEY } from "@env";
import React, { useState, useCallback } from "react";
import { debounce } from "lodash";

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
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <GooglePlacesInput
            setData={handlePlaceSelected}
            setModalVisible={setModalVisible}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    marginTop: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flex: 1,
    width: "100%",
    minWidth: 300,
    paddingTop: 10,
    margin: 10,
  },
  textInput: {
    height: 50,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#ddd",
    fontSize: 18,
    width: "100%",
    minWidth: 300,
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
});

export default PlaceSearchBar;
