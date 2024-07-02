import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
import { Color, Padding, FontSize, FontFamily, Border } from '../GlobalStyles';

function DropDown({ icon, name, items, selectedValue, dropDownItemsStyle, dropDownOptionStyle, titleStyle, dropDownContainerStyle }) {

    const [showElements, setShowElement] = useState(false)
    const [currentValue, setCurrentValue] = useState(undefined)
    const [selectedKey, setSelectedKey] = useState("")

    useEffect(() => {
        selectedValue(currentValue)
    }, [currentValue])

    function handleOpen() {
        setShowElement(!showElements)
    }

    function handleSelect(key, value) {
        if (key == selectedKey) {
            setCurrentValue(undefined)
            setSelectedKey("")
        }
        else {
            setCurrentValue(value)
            setSelectedKey(key)
        }
    }

    return (
        <View style={{ position: "relative", zIndex: 10 }}>
            <View style={[styles.dropDownContainer, dropDownContainerStyle]}>
                <Pressable onPress={handleOpen} style={[styles.dropDownSelect, dropDownOptionStyle]}>
                    {
                        icon == "none" ?
                            "" :
                            <Image source={icon} style={styles.icon} />
                    }
                    <Text style={[styles.dropDownTitle, titleStyle]}>{name}</Text>
                    <Image style={styles.arrowAndCloseIcon} source={showElements ? require("../assets/multiselect/close.png") : require("../assets/depth-3-frame-2.png")} />
                </Pressable>
            </View>
            <View style={[styles.dropDownItemsContainer, dropDownItemsStyle, { display: `${showElements ? "flex" : "none"}` }]}>
                {
                    items.length > 0 && items ?
                        <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {
                                items.map(({ key, value }) => {
                                    return (
                                        <Pressable onPress={() => { handleSelect(key, value) }} style={[styles.dropDownItem, { backgroundColor: `${key == selectedKey ? Color.colorWhite : Color.colorWhitesmoke_300}` }]} key={key}>
                                            <Text style={styles.dropDownItemText}>{value}</Text>
                                        </Pressable>
                                    )
                                })
                            }
                        </View>
                        :
                        <Text style={styles.dropDownItemText}>No Data</Text>
                }
            </View>
        </View>
    )
}

export default DropDown;

const styles = StyleSheet.create({
    dropDownContainer: {
        width: 160,
        height: "auto",
        zIndex: 4,
        position: "relative"
    },
    icon: {
        width: 20,
        height: 20
    },
    dropDownSelect: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Color.colorWhitesmoke_300,
        width: "auto",
        paddingHorizontal: Padding.p_xs,
        paddingVertical: Padding.p_5xs,
        borderRadius: Border.br_base,
        gap: 8,
        height: "auto"
    },
    dropDownTitle: {
        width: "auto",
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.beVietnamProMedium,
        height: "auto"
    },
    arrowAndCloseIcon: {
        width: 16,
        height: 16
    },
    dropDownItemsContainer: {
        width: 160,
        backgroundColor: Color.colorWhitesmoke_300,
        paddingHorizontal: Padding.p_xs,
        paddingVertical: Padding.p_base,
        height: "auto",
        overflow: "scroll",
        marginTop: 8,
        position: "relative",
        top: "0%",
        left: 0,
        borderRadius: Border.br_base,
    },
    dropDownItem: {
        height: "auto",
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8
    },
    dropDownItemText: {
        fontSize: FontSize.size_sm,
        fontFamily: FontFamily.beVietnamProRegular,
        backgroundColor: "transplant"
    }
})