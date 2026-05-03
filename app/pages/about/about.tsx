import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function AboutPage() {
    return (
        <View>
            <Text>About Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    }
})