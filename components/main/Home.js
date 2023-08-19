import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Card({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.scan_button} onPress={() => navigation.navigate("ScanQRCode")}><Text style={styles.scan_text}>Scan QR Code</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    scan_button: {
        width: '80%',
        height: 45,
        backgroundColor: '#0d6efd',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scan_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
});