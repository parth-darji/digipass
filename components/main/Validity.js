import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Validity() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.total_days_text}>Total Days</Text>
                <Text style={styles.total_days_number_text}>30</Text>
                <Text style={styles.days_left_text}>20 Days Left</Text>
            </View>
            <View style={styles.renew_box}>
                <View style={styles.tips_container}>
                    <Text style={styles.tips_text}>Your can renew your pass here if its validity is finished</Text>
                </View>
                <TouchableOpacity style={styles.renew_button}><Text style={styles.renew_text}>Renew</Text></TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    box: {
        height: 160,
        width: '80%',
        borderWidth: 1,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        borderColor: '#6c788d',
        position: 'absolute',
        top: 100,
        justifyContent: 'center',
    },

    total_days_text: {
        fontSize: 25
    },

    total_days_number_text: {
        fontSize: 50
    },

    days_left_text: {
        fontSize: 25,
        color: '#6c788d'
    },

    renew_box: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        bottom: 50
    },

    tips_container: {
        width: '60%',
    },

    tips_text: {
        marginTop: 20,
        color: '#6c788d',
        marginBottom: 20,
        textAlign: 'center'
    },

    renew_button: {
        width: '80%',
        height: 45,
        backgroundColor: '#0d6efd',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    renew_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
});