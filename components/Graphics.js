import React, { useState, useRef, useEffect } from 'react';
import { View, Dimensions, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryArea, VictoryAxis } from 'victory-native';

const customTheme = {
    ...VictoryTheme.material,
    axis: {
        ...VictoryTheme.material.axis,
        style: {
            ...VictoryTheme.material.axis.style,
            ticks: {
                ...VictoryTheme.material.axis.style.ticks,
                stroke: 'black',
            },
            tickLabels: {
                ...VictoryTheme.material.axis.style.tickLabels,
                fill: 'black',
            },
        },
    },
};

export default function App() {
    const [isSmallDevice, setIsSmallDevice] = useState(false);

    useEffect(() => {
        const screenWidth = Dimensions.get('window').width;
        setIsSmallDevice(screenWidth < 834);
    }, []);

    const deltaData = [
        { x: 300, y: 0.43 },
        { x: 400, y: 0.53 },
        { x: 600, y: 0.43 },
        { x: 700, y: 0.53 },
        { x: 800, y: 0.43 },
        { x: 900, y: 0.53 },
    ];
    const aData = [
        { x: 300, y: 0.43 },
        { x: 400, y: 0.53 },
        { x: 600, y: 0.43 },
        { x: 700, y: 0.53 },
        { x: 800, y: 0.43 },
        { x: 900, y: 0.53 },
    ];

    const lData = [
        { x: 300, y: 5.77 },
        { x: 400, y: 6.30 },
        { x: 600, y: 5.77 },
        { x: 700, y: 6.30 },
        { x: 800, y: 5.77 },
        { x: 900, y: 6.30 },
    ];
    const bData = [
        { x: 300, y: 5.77 },
        { x: 400, y: 6.30 },
        { x: 600, y: 5.77 },
        { x: 700, y: 6.30 },
        { x: 800, y: 5.77 },
        { x: 900, y: 6.30 },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.chartRow}>
                <View style={[styles.chartContainer, { marginRight: 8 }]}>
                    <View style={{ borderWidth: 8, borderColor: '#DCDCDC', marginRight: 8  }}>
                        <Text style={[styles.graphicsTitle, isSmallDevice && styles.smallGraphicsTitle]}>Delta ∆E</Text>
                        <VictoryChart
                            theme={customTheme}
                            domain={{ y: [0, 2] }}
                            width={Dimensions.get('window').width / 2 - (isSmallDevice ? 16 : 16)}
                            height={isSmallDevice ? 275 : 350}
                        >
                            <VictoryArea
                                style={{
                                    data: { fill: '#4F2BA7', fillOpacity: 0.2 },
                                }}
                                data={deltaData}
                            />
                            <VictoryLine
                                style={{
                                    data: { stroke: '#4F2BA7' },
                                }}
                                data={deltaData}
                            />
                            <VictoryAxis style={{ tickLabels: { fontSize: 15 } }} />
                            <VictoryAxis dependentAxis tickValues={[0, 0.50, 1.00, 1.50, 2.00]} style={{ tickLabels: { fontSize: 15 } }} />
                        </VictoryChart>
                    </View>
                </View>
                <View style={styles.chartContainer}>
                    <View style={{ borderWidth: 8, borderColor: '#DCDCDC' }}>
                        <Text style={[styles.graphicsTitle, isSmallDevice && styles.smallGraphicsTitle]}>a*</Text>
                        <VictoryChart
                            theme={customTheme}
                            domain={{ y: [0, 2] }}
                            width={Dimensions.get('window').width / 2 - (isSmallDevice ? 16 : 16)}
                            height={isSmallDevice ? 275 : 350}
                        >
                            <VictoryArea
                                style={{
                                    data: { fill: '#29782D', fillOpacity: 0.2 },
                                }}
                                data={aData}
                            />
                            <VictoryLine
                                style={{
                                    data: { stroke: '#29782D', fillOpacity: 0.2 },
                                }}
                                data={aData}
                            />
                            <VictoryAxis style={{ tickLabels: { fontSize: 15 } }} />
                            <VictoryAxis dependentAxis tickValues={[0, 0.50, 1.00, 1.50, 2.00]} style={{ tickLabels: { fontSize: 15 } }} />
                        </VictoryChart>
                    </View>
                </View>
            </View>
            <View style={styles.chartRow}>
                <View style={[styles.chartContainer, { marginRight: 8  }]}>
                    <View style={{ borderWidth: 8, borderColor: '#DCDCDC', marginRight: isSmallDevice ? 8 : 8 }}>
                        <Text style={[styles.graphicsTitle, isSmallDevice && styles.smallGraphicsTitle]}>L*</Text>
                        <VictoryChart
                            theme={customTheme}
                            domain={{ y: [0, 30] }}
                            width={Dimensions.get('window').width / 2 - (isSmallDevice ? 16 : 16)}
                            height={isSmallDevice ? 275 : 350}
                        >
                            <VictoryArea
                                style={{
                                    data: { fill: '#5C7987', fillOpacity: 0.2 },
                                }}
                                data={lData}
                            />
                            <VictoryLine
                                style={{
                                    data: { stroke: '#5C7987', fillOpacity: 0.2 },
                                }}
                                data={lData}
                            />
                            <VictoryAxis style={{ tickLabels: { fontSize: 15 } }} />
                            <VictoryAxis dependentAxis tickValues={[0, 7.50, 15.00, 22.50, 30.00]} style={{ tickLabels: { fontSize: 15 } }} />
                        </VictoryChart>
                    </View>
                </View>
                <View style={styles.chartContainer}>
                    <View style={{ borderWidth: 8, borderColor: '#DCDCDC' }}>
                        <Text style={[styles.graphicsTitle, isSmallDevice && styles.smallGraphicsTitle]}>b*</Text>
                        <VictoryChart
                            theme={customTheme}
                            domain={{ y: [0, 30] }}
                            width={Dimensions.get('window').width / 2 - (isSmallDevice ? 16 : 16)}
                            height={isSmallDevice ? 275 : 350}
                        >
                            <VictoryArea
                                style={{
                                    data: { fill: '#1974FF', fillOpacity: 0.2 },
                                }}
                                data={bData}
                            />
                            <VictoryLine
                                style={{
                                    data: { stroke: '#1974FF', fillOpacity: 0.2 },
                                }}
                                data={bData}
                            />
                            <VictoryAxis style={{ tickLabels: { fontSize: 15 } }} />
                            <VictoryAxis dependentAxis tickValues={[0, 7.50, 15.00, 22.50, 30.00]} style={{ tickLabels: { fontSize: 15 } }} />
                        </VictoryChart>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    chartRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    chartContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    graphicsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: '#DCDCDC',
        textAlign: 'center',
    },
    smallGraphicsTitle: {
        fontSize: 12,
    },
});
