import React from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'
import { Padding, Color, FontFamily, FontSize } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'

export default function BrandService() {
    const navigation=useNavigation()
    return (
        <View style={styles.aboutUsContainer}>
            <View style={styles.topBar}>
                <View style={{ width: 24, height: 24 }}></View>
                <Text style={styles.pageTitle}>About Influmart</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("Homepage")}}>
                    <Image style={{ width: 24, height: 24 }} source={require("../assets/depth-4-frame-08.png")} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/about us.png')} />
                </View>
                <View style={{ padding: Padding.p_base }}>
                    <Text style={styles.title}>Our mission is to make work life better every day</Text>
                    <Text style={styles.desc}>We're building the future of business. Our products power teams at 95% of the Fortune 500 and thousands of organizations worldwide.</Text>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Our Vision</Text>
                        <Text style={styles.sectionDesc}>A world where work is simpler, more pleasant, and more productive.</Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Our Team</Text>
                        <Text style={styles.sectionDesc}>We're a team of 12,000+ creative and driven individuals working together to make work life better.</Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Our History</Text>
                        <Text style={styles.sectionDesc}>Founded in 2012, we've grown from a small company to a global business with over 5,000 customers.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutUsContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: Color.colorWhite
    },
    topBar: {
        width: "100%",
        position: "relative",
        top: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 36,
        paddingTop: 32,
        paddingBottom: 16
    },
    pageTitle: {
        fontSize: FontSize.size_lg,
        letterSpacing: 0,
        lineHeight: 23,
        fontWeight: "700",
        fontFamily: FontFamily.lexendBold,
        color: Color.colorGray_500,
    },
    ScrollView: {
        width: "100%",
        height: "100%"
    },
    imageContainer: {
        width: "100%",
        height: "auto",
        paddingVertical: Padding.p_base,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    image: {
        width: 320,
        height: 260
    },
    title: {
        fontSize: FontSize.size_3xl,
        letterSpacing: 0,
        lineHeight: 23,
        fontWeight: "700",
        fontFamily: FontFamily.workSansBold,
        color: Color.colorGray_500,
        width: "100%",
        paddingVertical: Padding.p_base
    },
    desc: {
        fontSize: FontSize.size_lg,
        letterSpacing: 0,
        lineHeight: 23,
        fontFamily: FontFamily.workSansRegular,
        color: Color.colorGray_300,
        width: "100%",
        paddingVertical: 8
    },
    sectionContainer: {
        width: "100%",
        paddingVertical: Padding.p_base,
        display: "flex",
        flexDirection: "column",
        gap: 8
    },
    sectionTitle: {
        fontSize: FontSize.size_lg,
        letterSpacing: 0,
        lineHeight: 23,
        fontFamily: FontFamily.workSansMedium,
        color: Color.colorGray_300,
        width: "100%",
    },
    sectionDesc:{
        fontSize: FontSize.size_base,
        letterSpacing: 0,
        lineHeight: 23,
        fontFamily: FontFamily.workSansRegular,
        color: "#4F7396",
        width: "100%",
    }
})