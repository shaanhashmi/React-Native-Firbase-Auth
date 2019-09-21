import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Splash extends Component {

    render() {
        const { container, title } = styles;
        return (
            <View style={container}>
                <Text style={title}>SPLASH</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000'
    }
}

export default Splash
