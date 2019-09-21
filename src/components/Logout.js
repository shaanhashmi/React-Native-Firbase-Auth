import React from 'react'
import { View, Image, Text } from 'react-native';
import firebase from 'firebase'

import { ButtonAuth } from './common'

const Logout = () => {
    const { logoutContainer, logoContainer, logo, logoText } = styles;
    return (
        <View style={logoutContainer}>
            <View style={logoContainer}>
                <Image style={logo} source={require('../images/firebase_logo.png')} />
                <Text style={logoText} >Welcome</Text>
            </View>
            <ButtonAuth onPress={() => firebase.auth().signOut()}>LOGOUT</ButtonAuth>
        </View>
    )
}

const styles = {
    logoutContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgb(32, 53, 70)',

    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 220,
        height: 100
    },
    logoText: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: '600',
        marginBottom: 170
    },
}

export default Logout;
