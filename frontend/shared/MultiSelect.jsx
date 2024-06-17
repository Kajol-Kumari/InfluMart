import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  TextInput,
  ViewStyle,
  Pressable,
  Keyboard,
} from "react-native";
import { Border, Color } from "../GlobalStyles";

const MultipleSelectList = ({
  setSelected,
  placeholder,
  maxHeight,
  data,
  searchicon = false,
  arrowicon = false,
  closeicon = false,
  search = true,
  searchPlaceholder = "search",
  onSelect = () => {},
  notFoundText = "No data found",
  save = "key",
  dropdownShown = false,
}) => {
  const [_firstRender, _setFirstRender] = React.useState(true);
  const [dropdown, setDropdown] = React.useState(dropdownShown);
  const [selectedval, setSelectedVal] = React.useState([]);
  const [height, setHeight] = React.useState(350);
  const animatedvalue = React.useRef(new Animated.Value(0)).current;
  const [filtereddata, setFilteredData] = React.useState(data);

  const slidedown = () => {
    setDropdown(true);

    Animated.timing(animatedvalue, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const slideup = () => {
    Animated.timing(animatedvalue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setDropdown(false));
  };

  React.useEffect(() => {
    if (maxHeight) setHeight(maxHeight);
  }, [maxHeight]);

  React.useEffect(() => {
    setFilteredData(data);
  }, [data]);

  React.useEffect(() => {
    if (_firstRender) {
      _setFirstRender(false);
      return;
    }
    onSelect();
  }, [selectedval]);

  React.useEffect(() => {
    if (!_firstRender) {
      if (dropdownShown) slidedown();
      else slideup();
    }
  }, [dropdownShown]);

  return (
    <View style={{borderRadius: Border.br_xs,borderColor:"#d4d4d4",borderWidth:1}}>
      {dropdown && search ? (
        <View style={[styles.wrapper]}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            {!searchicon ? (
              <Image
                source={require("../assets/multiselect/search.png")}
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: 7 }}
              />
            ) : (
              searchicon
            )}

            <TextInput
              placeholder={searchPlaceholder}
              onChangeText={(val) => {
                let result = data.filter((item) => {
                  val.toLowerCase();
                  let row = item.value.toLowerCase();
                  return row.search(val.toLowerCase()) > -1;
                });
                setFilteredData(result);
              }}
              style={[{ padding: 0, height: 20, flex: 1 }]}
            />
            <TouchableOpacity
              onPress={() => {
                slideup();
                // setTimeout(() => setFilteredData(data), 800)
              }}
            >
              {!closeicon ? (
                <Image
                  source={require("../assets/multiselect/close.png")}
                  resizeMode="contain"
                  style={{ width: 17, height: 17 }}
                />
              ) : (
                closeicon
              )}
            </TouchableOpacity>
          </View>
        </View>
      ) : selectedval?.length > 0 ? (
        <TouchableOpacity
          style={[styles.wrapper]}
          onPress={() => {
            if (!dropdown) {
              Keyboard.dismiss();
              slidedown();
            } else {
              slideup();
            }
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                overflow: "hidden",
              }}
            >
              {selectedval?.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      {
                        backgroundColor: "gray",
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 50,
                        marginRight: 10,
                      },
                    ]}
                  >
                    <Text style={[{ color: "white", fontSize: 12 }]}>
                      {item}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.wrapper]}
          onPress={() => {
            if (!dropdown) {
              Keyboard.dismiss();
              slidedown();
            } else {
              slideup();
            }
          }}
        >
          <Text style={[{ color: Color.colorSteelblue_200 }]}>
            {selectedval == ""
              ? placeholder
                ? placeholder
                : "Select option"
              : selectedval}
          </Text>
          {!arrowicon ? (
            <Image
              source={require("../assets/multiselect/chevron.png")}
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
            />
          ) : (
            arrowicon
          )}
        </TouchableOpacity>
      )}

      {dropdown ? (
        <Animated.View style={[{ maxHeight: animatedvalue }, styles.dropdown]}>
          <View style={[{ maxHeight: height }]}>
            <ScrollView
              contentContainerStyle={{ paddingVertical: 10 }}
              nestedScrollEnabled={true}
            >
              {filtereddata.length >= 1 ? (
                filtereddata.map((item, index) => {
                  let key = item.key ?? item.value ?? item;
                  let value = item.value ?? item;
                  let disabled = item.disabled ?? false;
                  if (disabled) {
                    return (
                      <TouchableOpacity
                        style={styles.disabledoption}
                        key={index}
                      >
                        <View
                          style={[
                            {
                              width: 15,
                              height: 15,
                              marginRight: 10,
                              borderRadius: 3,
                              justifyContent: "center",
                              alignItems: "center",
                              backgroundColor: "#c4c5c6",
                            },
                          ]}
                        >
                          {selectedval?.includes(value) ? (
                            <Image
                              key={index}
                              source={require("../assets/multiselect/check.png")}
                              resizeMode="contain"
                              style={[{ width: 8, height: 8, paddingLeft: 7 }]}
                            />
                          ) : null}
                        </View>
                        <Text style={{ color: "#c4c5c6" }}>
                          {value}
                        </Text>
                      </TouchableOpacity>
                    );
                  } else {
                    return (
                      <TouchableOpacity
                        style={[styles.option]}
                        key={index}
                        onPress={() => {
                          let existing = selectedval?.indexOf(value);

                          // console.log(existing);

                          if (existing != -1 && existing != undefined) {
                            let sv = [...selectedval];
                            sv.splice(existing, 1);
                            setSelectedVal(sv);

                            setSelected((val) => {
                              let temp = [...val];
                              temp.splice(existing, 1);
                              return temp;
                            });

                            // onSelect()
                          } else {
                            if (save === "value") {
                              setSelected((val) => {
                                let temp = [...new Set([...val, value])];
                                return temp;
                              });
                            } else {
                              setSelected((val) => {
                                let temp = [...new Set([...val, key])];
                                return temp;
                              });
                            }

                            setSelectedVal((val) => {
                              let temp = [...new Set([...val, value])];
                              return temp;
                            });

                            // onSelect()
                          }
                        }}
                      >
                        <View
                          style={[
                            {
                              width: 15,
                              height: 15,
                              borderWidth: 1,
                              marginRight: 10,
                              borderColor: "gray",
                              borderRadius: 3,
                              justifyContent: "center",
                              alignItems: "center",
                            },
                          ]}
                        >
                          {selectedval?.includes(value) ? (
                            <Image
                              key={index}
                              source={require("../assets/multiselect/check.png")}
                              resizeMode="contain"
                              style={{ width: 8, height: 8, paddingLeft: 7 }}
                            />
                          ) : null}
                        </View>
                        <Text style={[{  }]}>{value}</Text>
                      </TouchableOpacity>
                    );
                  }
                })
              ) : (
                <TouchableOpacity
                  style={[styles.option]}
                  onPress={() => {
                    setSelected(undefined);
                    setSelectedVal("");
                    slideup();
                    setTimeout(() => setFilteredData(data), 800);
                  }}
                >
                  <Text>{notFoundText}</Text>
                </TouchableOpacity>
              )}
            </ScrollView>

            {selectedval?.length > 0 ? (
              <Pressable>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ marginRight: 20, fontWeight: "600" }}>
                    Selected
                  </Text>
                  <View
                    style={{ height: 1, flex: 1, backgroundColor: "gray" }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    marginBottom: 20,
                    flexWrap: "wrap",
                  }}
                >
                  {selectedval?.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={[
                          {
                            backgroundColor: "gray",
                            paddingHorizontal: 20,
                            paddingVertical: 5,
                            borderRadius: 50,
                            marginRight: 10,
                            marginTop: 10,
                          },
                        ]}
                      >
                        <Text style={[{ color: "white", fontSize: 12 }]}>
                          {item}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </Pressable>
            ) : null}
          </View>
        </Animated.View>
      ) : null}
    </View>
  );
};

export default MultipleSelectList;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    backgroundColor: "E8EDF2",
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    backgroundColor: "white",
    overflow: "hidden",
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});
