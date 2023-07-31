import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Tables = () => {
    const [isSmallDevice, setIsSmallDevice] = useState(false);

    useEffect(() => {
        setIsSmallDevice(width < 834);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.tables}>
                <View style={styles.liveTables}>
                    <View style={[styles.tablesHeader, { backgroundColor: '#356E79' }]}>
                        <Text style={styles.tablesHeaderName}>LIVE MEASUREMENT</Text>
                    </View>
                    <View style={[styles.tablesCell, { backgroundColor: '#387D8B' }]}>
                        <Text
                            style={[
                                styles.tablesCellValue,
                                { marginLeft: 25, fontSize: isSmallDevice ? 13 : 18 },
                            ]}
                        >
                            Delta ∆E : 0.76
                        </Text>
                        <View style={styles.border} />
                        <Text style={[styles.tablesCellValue, { fontSize: isSmallDevice ? 13 : 18 }]}>L* : 10.34</Text>
                        <View style={styles.border} />
                        <Text style={[styles.tablesCellValue, { fontSize: isSmallDevice ? 13 : 18 }]}>a* : 0.65</Text>
                        <View style={styles.border} />
                        <Text style={[styles.tablesCellValue, { fontSize: isSmallDevice ? 13 : 18 }]}>b* : -4.67</Text>
                    </View>
                </View>

                <View style={styles.averageTables}>
                    <View style={[styles.tablesHeader, { backgroundColor: '#356E79' }]}>
                        <Text style={styles.tablesHeaderName}>AVERAGE MEASUREMENT</Text>
                    </View>
                    <View style={[styles.tablesCell, { backgroundColor: '#387D8B' }]}>
                        <Text
                            style={[
                                styles.tablesCellValue,
                                { marginLeft: 25, fontSize: isSmallDevice ? 13 : 18 },
                            ]}
                        >
                            Delta ∆E : 0.42
                        </Text>
                        <View style={styles.border} />
                        <Text style={[styles.tablesCellValue, { fontSize: isSmallDevice ? 13 : 18 }]}>L* : 9.94</Text>
                        <View style={styles.border} />
                        <Text style={[styles.tablesCellValue, { fontSize: isSmallDevice ? 13 : 18 }]}>a* : 0.63</Text>
                        <View style={styles.border} />
                        <Text style={[styles.tablesCellValue, { fontSize: isSmallDevice ? 13 : 18 }]}>b* : -4.50</Text>
                    </View>
                </View>
            </View>

            <View style={styles.colorProgress}>
                <Text style={styles.progressText}>Color in Progress</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginBottom: 30,
    },
    tables: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        paddingHorizontal: 10,
    },
    liveTables: {
        flex: 1,
        marginRight: 8,
    },
    averageTables: {
        flex: 1,
        marginLeft: 8,
    },
    tablesHeader: {
        backgroundColor: '#356E79',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    tablesHeaderName: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    tablesCell: {
        flexDirection: 'row',
        backgroundColor: '#387D8B',
        padding: 8,
        marginBottom: 8,
    },
    tablesCellValue: {
        justifyContent: 'space-between',
        color: '#FFFFFF',
        textAlign: 'center',
        marginRight: 5,
    },
    border: {
        borderRightColor: 'white',
        borderRightWidth: 1,
        marginHorizontal: 10,
    },
    colorProgress: {
        backgroundColor: '#00263B',
        height: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        color: 'white',
        fontSize: 20,
    },
});

export default Tables;
