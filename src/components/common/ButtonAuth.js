import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const ButtonAuth = ({ onPress, children }) => {
    const { buttonContainer, btnText } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonContainer}>
            <Text style={btnText}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 10
    },
    btnText: {
        textAlign: 'center',
        color: ' rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    },
}

export { ButtonAuth }