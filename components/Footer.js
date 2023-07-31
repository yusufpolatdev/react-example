import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Icon name="copyright" size={22} />
                <Text style={styles.italicText}> 2023 Turkey, AGTEKS All Right Reserved.</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
    italicText: {
        fontStyle: 'italic',
    },
});

export default Footer;
