import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import person2v2 from '../../assets/icons/2p.png'
export default function Button2v2({ text, onPress }) {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Image source={person2v2} style={{width:22, height:22}} />
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
 
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