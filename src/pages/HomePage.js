import React from 'react';
import Style from '../../assets/Style';
import { View, Text, Image } from 'react-native';

export default function Home() {
    
    return (
        <View style={Style.container}>
            <Text style={Style.headingLogo}>
                <Image style={Style.logo} source={require('../../assets/carrot-border.png')}/>
                Thrifty Cook
            </Text>
        </View>
    );
}
