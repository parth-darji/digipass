import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>Start</TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
});