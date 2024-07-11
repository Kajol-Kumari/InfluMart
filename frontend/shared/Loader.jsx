import React from 'react';
import { View, ActivityIndicator, StyleSheet,Text } from 'react-native'
import { Color,FontSize,FontFamily } from '../GlobalStyles';

export default function Loader({ loading }) {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator animating={loading} color={Color.colorDodgerblue} size={"large"} />
            <Text style={styles.title}>Influmart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        width: '100%',
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.colorWhitesmoke_100,
        position: "absolute",
        top: 0,
        zIndex: 1000
    },
    title: {
        fontSize: FontSize.size_lg,
        letterSpacing: 0,
        lineHeight: 23,
        fontWeight: "700",
        fontFamily: FontFamily.lexendBold,
        color: Color.colorGray_500,
        marginTop:20
    }
})