import React from 'react'
import { View, Text, Image } from 'react-native'
import logo from '/Parth/DigiPass Projects/DigiPass/assets/qr-code.png';

export default function Card() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={logo} style={{ width: 300, height: 300 }} />
        </View>
    )
}