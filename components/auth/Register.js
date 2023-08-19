import React, { Component } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'

import firebase from 'firebase'
import "firebase/firestore";

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title_text} >Create Your Account</Text>
                <TextInput style={styles.input} placeholderTextColor="#cccccc" placeholder="Full Name" onChangeText={(name) => this.setState({ name })} />
                <TextInput style={styles.input} placeholderTextColor="#cccccc" placeholder="Email Address" onChangeText={(email) => this.setState({ email })} />
                <TextInput style={styles.input} placeholderTextColor="#cccccc" placeholder="Password" secureTextEntry onChangeText={(password) => this.setState({ password })} />
                <TouchableOpacity style={styles.registration_button} onPress={() => this.onSignUp()}><Text style={styles.registration_text}>Register</Text></TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity><Text style={styles.forgot_text} onPress={() => { this.props.navigation.navigate('Login') }} >Have an Account? Login</Text></TouchableOpacity>
            </View>
        )
    }
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    title_text: {
        fontSize: 25,
        marginTop: 30,
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

    registration_button: {
        width: '80%',
        height: 45,
        backgroundColor: '#0d6efd',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    registration_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },

    line: {
        borderWidth: 1,
        width: '80%',
        borderColor: '#6c788d',
        opacity: .1,
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
        marginTop: 15,
        color: '#6c788d',
        marginBottom: 20,
    },

});