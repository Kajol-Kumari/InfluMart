import React, { useEffect, useRef, useCallback, useState } from "react";
import { Text, View, StyleSheet, Animated, PanResponder } from 'react-native'
import { Border, Padding } from "../GlobalStyles";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

export default function CustomSlider({minValue,maxValue,selectedValues}) {
    const [value, setValue] = useState({ values: [minValue, maxValue], })
    const [width, setWidth] = useState(0)
    const multiSliderValuesChange = (values) => {
        setValue({
            values,
        });
        selectedValues({selectedMinValue:value.values[0],selectedMaxValue:value.values[1]})
    }
    return (
        <View style={styles.sliderContainer} onLayout={(evt) => {
            setWidth(evt.nativeEvent.layout.width)
        }}>
            <MultiSlider
                values={[value.values[0], value.values[1]]}
                sliderLength={width}
                selectedStyle={{ backgroundColor: '#000', }}
                containerStyle={styles.containerStyle}
                onValuesChange={multiSliderValuesChange}
                unselectedStyle={{ backgroundColor: "#DBE0E5" }}
                markerStyle={{ backgroundColor: "", shadowOpacity: 0, borderWidth: 0 }}
                min={minValue}
                max={maxValue}
                step={1}
                trackStyle={{ height: 5, borderRadius: 50 }}
            />
            <View style={styles.valuesContainer}>
                <Text style={styles.valueText}>{value.values[0]}</Text>
                <Text style={styles.valueText}>{value.values[1]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        width: "100%",
        height: 200,
        paddingVertical: 8
    },
    containerStyle: {
        alignSelf: "center",
        marginTop: 10,
        height: "auto"
    },
    valuesContainer: {
        paddingVertical: 5, display: "flex", flexDirection: "row", justifyContent: "space-between",
        marginTop:4
    },
    valueText:{
        color:"#000",
        fontWeight:"bold"
    }
})