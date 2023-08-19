import React, { Component } from 'react'
import { View, Text } from 'react-native'

import firebase from "firebase/app"
import "firebase/auth"

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

const firebaseConfig = {
  apiKey: "AIzaSyD5jLIL-pnfVDROnbCSf7bAyIu0xwlvDvw",
  authDomain: "digital-bus-pass-system.firebaseapp.com",
  projectId: "digital-bus-pass-system",
  storageBucket: "digital-bus-pass-system.appspot.com",
  messagingSenderId: "45786928055",
  appId: "1:45786928055:web:921f807b05643b0854ce32",
  measurementId: "G-FCEKJ5T3WH"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main'
import ScanQRCodeScreen from './components/main/ScanQRCode'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">

            <Stack.Screen name="Login" component={LoginScreen} options={() => ({
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
              },
            })} />

          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ScanQRCode" component={ScanQRCodeScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App