import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Animated,
  Easing,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import countries from '../constants/countries';

const CountryCurrencyPicker = ({
  show,
  pickerButtonOnPress,
  inputPlaceholder = 'Search your country',
  inputPlaceholderTextColor = '#8c8c8c',
  searchMessage = 'Sorry, we can’t find your country :(',
  lang = 'en',
  style = {},
  onBackdropPress,
  disableBackdrop = false,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const animationDriver = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (show) {
      setShowModal(true);
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  const filteredCountries = useMemo(() => {
    const lowerSearchValue = searchValue.toLowerCase();
    return countries.filter(
      (country) =>
        country.dial_code.includes(lowerSearchValue) ||
        country.name[lang]?.toLowerCase().includes(lowerSearchValue)
    );
  }, [searchValue, lang]);

  const openModal = () => {
    Animated.timing(animationDriver, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(animationDriver, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => setShowModal(false));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        Keyboard.dismiss();
        pickerButtonOnPress?.(item);
        setShowModal(false);
      }}
    >
      <Text style={styles.itemText}>{item.name[lang] || item.name['en']} {`- (${item.currency})`}</Text>
    </TouchableOpacity>
  );

  const modalPosition = animationDriver.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
    extrapolate: 'clamp',
  });

  const modalBackdropFade = animationDriver.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
    extrapolate: 'clamp',
  });

  return (
    <Modal
      isVisible={showModal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackdropPress}
      onSwipeComplete={closeModal}
      swipeDirection="down"
      backdropOpacity={0}
      style={styles.modal}
    >
      <Animated.View style={[styles.content, { transform: [{ translateY: modalPosition }] }]}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            value={searchValue}
            onChangeText={setSearchValue}
            placeholder={inputPlaceholder}
            placeholderTextColor={inputPlaceholderTextColor}
          />
        </View>
        <View style={styles.line} />
        {filteredCountries.length === 0 ? (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{searchMessage}</Text>
          </View>
        ) : (
          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item.code}
            renderItem={renderItem}
          />
        )}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 20,
    height: 400,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    height: 40,
    padding: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#eceff1',
    marginVertical: 10,
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  messageText: {
    color: '#8c8c8c',
    fontSize: 16,
  },
  itemContainer: {
    padding: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default CountryCurrencyPicker;
