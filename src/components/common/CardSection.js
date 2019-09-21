import React from 'react'
import { View, Text } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
}

export { CardSection };