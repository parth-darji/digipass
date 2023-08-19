import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import firebase from "firebase/app"
import "firebase/auth"

export default function Profile() {

    const onLogOut = () => {
        firebase.auth().signOut();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logout_button} onPress={() => onLogOut()}><Text style={styles.logout_text}>Log Out</Text></TouchableOpacity>
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

    logout_button: {
        width: '80%',
        height: 45,
        backgroundColor: '#0d6efd',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logout_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    }
});