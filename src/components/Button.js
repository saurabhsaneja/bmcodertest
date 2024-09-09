import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { getInterFont } from '../helpers';

const Button = ({ title, onPress, extraStyle = {} }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, extraStyle]} >
            <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        backgroundColor: '#A3CFFF',
        borderColor: '#94C7FF',
        borderWidth: 1,
        borderRadius: 32,
        paddingVertical: 12,
        shadowColor: "#A3CFFF",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 2,
    },
    title: {
        fontSize: 24,
        fontFamily: getInterFont('Bold'),
        color: '#092A4D'
    }
})