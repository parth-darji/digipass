import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, clearData } from '../redux/actions/index'

import CardScreen from './main/Card'
import ValidityScreen from './main/Validity'
import ProfileScreen from './main/Profile'

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.clearData();
    }
    render() {
        return (
            <Tab.Navigator initialRouteName="Validity">
                <Tab.Screen name="Card" component={CardScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={26} color={color} />
                    ),
                }} />
                <Tab.Screen name="Validity" component={ValidityScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="time-slot" size={25} color={color} />
                    ),
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={26} color={color} />
                    ),
                }} />
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, clearData }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);