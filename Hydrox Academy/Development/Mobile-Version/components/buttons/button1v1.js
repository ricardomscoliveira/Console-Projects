import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import person1v1 from '../../assets/icons/1p.png' 

const Button1v1 = ({navigation, text}) => {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Image source={person1v1} style={{width:22, height:22}} />
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Button1v1
 
const styles = StyleSheet.create({
    button: {
        borderRadius: 3,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        backgroundColor: '#FFFFFF',
        width: 320,
        height: 55,
        margin: 15,
    },
    buttonText: {
        color: '#707070',
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        textAlign: 'center',
    }
});