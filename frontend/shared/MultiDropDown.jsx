import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

function MultiDropDown({
    icon,
    name,
    items,
    dropDownItemsStyle,
    dropDownOptionStyle,
    titleStyle,
    dropDownContainerStyle,
    placeholder,
    selectedValues,
    setSelectedValues,
    close,
    setClose
}) {
    const [currentValues, setCurrentValues] = useState(selectedValues || []);

    useEffect(()=>{
        setSelectedValues(currentValues)
    },[currentValues])

    function handleOpen() {
        setClose(!close)
    }

    function handleSelect(value) {
        if (currentValues?.indexOf(value)!=-1){
            let temp=[...currentValues]
            temp.splice(currentValues?.indexOf(value),1)
            setCurrentValues(temp)
        }
        else
            setCurrentValues([...currentValues, value])
    }

    return (
        <View style={{ position: "relative", zIndex: 10 }}>
            <View style={[styles.dropDownContainer, dropDownContainerStyle]}>
                <Pressable
                    onPress={handleOpen}
                    style={[styles.dropDownSelect, dropDownOptionStyle]}
                >
                    {icon == "none" ? "" : <Image source={icon} style={styles.icon} />}
                    <Text style={[styles.dropDownTitle, titleStyle]}>{name || placeholder}</Text>
                    <Image
                        style={styles.arrowAndCloseIcon}
                        source={
                            close
                                ? require("../assets/multiselect/close.png")
                                : require("../assets/depth-3-frame-2.png")
                        }
                    />
                </Pressable>
            </View>
            <ScrollView style={[styles.dropDownItemsContainer, dropDownItemsStyle, { display: `${close ? "flex" : "none"}` }]}>
                {items.length > 0 && items ? (
                    <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {items.map(({ key, value }) => {
                            return (
                                <Pressable
                                    onPress={() => {
                                        handleSelect(value)
                                    }}
                                    style={[
                                        styles.dropDownItem,
                                        {
                                            backgroundColor: `${currentValues.indexOf(value)!=-1
                                                ? Color.colorWhite
                                                : Color.colorWhitesmoke_300
                                                }`,
                                        },
                                    ]}
                                    key={key}
                                >
                                    <Text style={styles.dropDownItemText}>{value}</Text>
                                </Pressable>
                            );
                        })}
                    </View>
                ) : (
                    <Text style={styles.dropDownItemText}>No Data</Text>
                )}
            </ScrollView>
        </View>
    );
}
export default MultiDropDown;

const styles = StyleSheet.create({
    dropDownContainer: {
        width: 160,
        height: "auto",
        zIndex: 4,
        position: "relative",
    },
    icon: {
        width: 20,
        height: 20,
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
        height: "auto",
    },
    dropDownTitle: {
        width: "90%",
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.beVietnamProMedium,
        height: "auto",
        lineHeight:24
    },
    arrowAndCloseIcon: {
        width: 16,
        height: 16,
    },
    dropDownItemsContainer: {
        width: 160,
        backgroundColor: Color.colorWhitesmoke_300,
        paddingHorizontal: Padding.p_xs,
        paddingVertical: Padding.p_base,
        height: "auto",
        overflow: "scroll",
        marginTop: 8,
        position: "absolute",
        top: "100%",
        left: 0,
        borderRadius: Border.br_base,
        borderWidth:3,
        borderColor:"#fff",
    },
    dropDownItem: {
        height: "auto",
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    dropDownItemText: {
        fontSize: FontSize.size_sm,
        fontFamily: FontFamily.beVietnamProRegular,
        backgroundColor: "transplant",
    },
});
