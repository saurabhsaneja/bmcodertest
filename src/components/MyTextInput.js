import React from "react"
import { StyleSheet, TextInput, Text, View, Image } from "react-native"
import { getInterFont, getPoppinsFont } from "../helpers"

const MyTextInput = ({ heading, value, setValue, placeholder, myRef, onSubmitEditing, iconType, maxLength, keyboardType, secureTextEntry }) => {
    const icon = iconType === 'email' ? require('../assets/images/mail.png') : iconType === 'password' ? require('../assets/images/lock.png') : require('../assets/images/user.png')
    return (
        <>
            <Text style={styles.heading}>{heading}</Text>
            <View style={styles.inputContainer}>
                <Image source={icon} style={{ marginLeft: 10, marginRight: 5 }} />
                <TextInput
                    ref={myRef}
                    style={styles.input}
                    onChangeText={t => setValue(t)}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor='#808080'
                    onSubmitEditing={onSubmitEditing}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </>
    )
}

export default MyTextInput

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#808080',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    input: {
        height: 60,
        // borderWidth: 1,
        width: '90%',
        // padding: 10,
        color: 'black',
        fontSize: 14,
        fontFamily: getInterFont('Regular'),
    },
    heading: {
        fontSize: 14,
        color: 'black',
        fontFamily: getPoppinsFont('Medium'),
        marginBottom: 7,
    },
})