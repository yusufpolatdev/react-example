import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const isSmallDevice = width < 834;

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.headerLogo}>
                        <View style={styles.headerLogoTitle}>
                            <Text style={[styles.logoText, isSmallDevice && styles.smallLogoText]}>SHADE DENIM </Text>
                            <Text style={[styles.logoSubtitle, isSmallDevice && styles.smallLogoSubtitle]}>12D</Text>
                        </View>
                        <View style={styles.headerLogoButtons}>
                            <TouchableOpacity style={[styles.buttonRed, isSmallDevice && styles.smallButton]}>
                                <Icon name="stop" size={isSmallDevice ? 12 : 15} color="white" />
                                <Text style={[styles.buttonText, isSmallDevice && styles.smallButtonText]}>STOP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonGreen, isSmallDevice && styles.smallButton]}>
                                <Icon name="play" size={isSmallDevice ? 12 : 15} color="white" />
                                <Text style={[styles.buttonText, isSmallDevice && styles.smallButtonText]}>START</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.border} />
                    <View style={styles.headerCalibration}>
                        <TouchableOpacity style={[styles.buttonWhite, isSmallDevice && styles.smallButton]}>
                            <Icon name="wrench" size={isSmallDevice ? 15 : 20} color="black" />
                            <Text style={[styles.buttonTextCalibration, isSmallDevice && styles.smallButtonText]}>
                                CALIBRATION
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.border} />
                    <View style={styles.headerLength}>
                        <View style={styles.headerLengthIcon}>
                            <IconMaterial name="ruler" size={isSmallDevice ? 20 : 25} color="white" />
                        </View>
                        <View style={styles.headerLengthText}>
                            <Text style={[styles.lengthText, isSmallDevice && styles.smallLengthText]}>Length</Text>
                            <Text style={[styles.lengthText, isSmallDevice && styles.smallLengthText]}>24.801.3m</Text>
                        </View>
                    </View>
                    <View style={styles.border} />
                    <View style={styles.headerSettings}>
                        <TouchableOpacity style={styles.buttonCircle}>
                            <Icon name="floppy-o" size={isSmallDevice ? 20 : 28} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCircle}>
                            <Icon name="print" size={isSmallDevice ? 20 : 28} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCircle}>
                            <Icon name="sliders" size={isSmallDevice ? 20 : 28} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.headerBottom}>
                    <Text style={styles.headerBottomText}>Measurement in Progress</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    header: {
        height: isSmallDevice ? 120 : 160,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: isSmallDevice ? 70 : 50,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2F41AA',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: '100%',
        paddingHorizontal:isSmallDevice ? 20 : 12,
        paddingVertical: isSmallDevice ? 20 : 20,
    },
    headerLogo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: isSmallDevice ? 280 : '100%',

    },
    headerLogoTitle: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoText: {
        color: 'white',
        marginRight: 25,
        fontSize: 16,
        fontWeight: 'bold',
    },
    smallLogoText: {
        fontSize: 12,
    },
    logoSubtitle: {
        color: 'white',
        fontSize: 16,
        marginLeft: 55,
    },
    smallLogoSubtitle: {
        fontSize: 12,
        marginLeft: 35,
    },
    headerLogoButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonRed: {
        paddingVertical: 16,
        paddingHorizontal: isSmallDevice ? 15 : 36,
        borderRadius: 50,
        backgroundColor: 'red',
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonGreen: {
        paddingVertical: 16,
        paddingHorizontal: isSmallDevice ? 15 : 36,
        borderRadius: 50,
        backgroundColor: 'green',
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        marginLeft: 10,
        fontWeight: 'bold',
    },

    buttonWhite: {
        paddingVertical: 10,
        paddingHorizontal: isSmallDevice ? 12 : 20,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonTextCalibration: {
        color: 'black',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    smallButtonText: {
        fontSize: 12,
        marginLeft: 5,
    },
    headerCalibration: {
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: isSmallDevice ? 10 : 20,
    },
    headerLength: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    headerLengthIcon: {
        marginRight: 5,
    },
    headerLengthText: {
        flexDirection: 'column',
        marginLeft: 5,
    },
    lengthText: {
        color: 'white',
    },
    smallLengthText: {
        fontSize: 12,
    },
    headerSettings: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 10,
    },
    buttonCircle: {
        borderRadius: 50,
        width: isSmallDevice ? 32 : 48,
        height: isSmallDevice ? 32 : 48,
        backgroundColor: 'white',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerBottom: {
        backgroundColor: '#FACB14',
        height: 50,
        width: '50%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerBottomText: {
        color: 'black',
        fontSize: 20,
        marginBottom: 5,
    },
    border: {
        borderRightColor: 'black',
        borderRightWidth: 1,
        height: '150%',
    },
});

export default App;
