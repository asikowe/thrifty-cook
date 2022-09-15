import React from 'react';
import Style from '../../assets/Style';
import { View, Text } from 'react-native';

export default function Home() {
    return (
        <View style={Style.container}>
            <Text style={Style.heading}>Settings</Text>
        </View>
    );
}