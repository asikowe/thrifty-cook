import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <StatusBar style='dark' />
            <Text style={styles.heading1}>HOME PAGE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#D3EBDD',
        flex: 1,
    },
    heading1: {
        fontFamily: 'PermamentMarkerRegular',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 5,
    },
})