import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.appContainer}>
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
        marginTop: 30,
    },
    heading1: {
        fontFamily: 'PermamentMarkerRegular',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 5,
    },
})