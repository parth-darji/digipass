import React, { Component } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'

import firebase from 'firebase'

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo_text} >Login</Text>
                <TextInput style={styles.input} placeholderTextColor="#cccccc" placeholder="Email Address" onChangeText={(email) => this.setState({ email })} />
                <TextInput style={styles.input} placeholderTextColor="#cccccc" placeholder="Password" secureTextEntry onChangeText={(password) => this.setState({ password })} />
                <TouchableOpacity style={styles.login_button} onPress={() => this.onSignUp()}><Text style={styles.login_text}>Login</Text></TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity><Text style={styles.forgot_text} >Forgot Password? Click Here to Reset</Text></TouchableOpacity>
            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    logo_text: {
        fontSize: 40,
        marginBottom: 30,
        color: '#6c788d',
    },

    input: {
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        height: 45,
        marginBottom: 20,
        borderColor: '#6c788d',
        paddingLeft: 10,
    },

    login_button: {
        width: '80%',
        height: 45,
        backgroundColor: '#0d6efd',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    login_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },

    forgot_text: {
        color: '#6c788d',
    },

    line: {
        marginTop: 20,
        borderWidth: 1,
        width: '80%',
        borderColor: '#6c788d',
        marginBottom: 20,
        opacity: .1,
    },
});