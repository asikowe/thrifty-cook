import React from 'react';
import Style from '../../assets/Style';
import { Text, View, ScrollView, StatusBar } from 'react-native';

export default function Recipe({ route }) {
    return (
        <View style={Style.container}>
        <StatusBar style='dark' />
        <ScrollView contentContainerStyle={Style.container} showsHorizontalScrollIndicator={false}>
            <Text style={Style.heading}>{route.params?.paramKey.title}</Text>
            <Text style={Style.subtitle}>Ready in: {route.params?.paramKey.readyInMinutes} minutes. Servings: {route.params?.paramKey.servings}</Text>
            <Text style={Style.subtitle}>INGREDIENTS:</Text>
                <View style={Style.container2}>
                    {route.params?.paramKey.extendedIngredients.map((item) => ( 
                        <Text style={Style.text} key={item.id}>{item.original}</Text>
                    ))}
                </View>
            <Text style={Style.subtitle}>COOKING INSTRUCTIONS:</Text>
                <View style={Style.container2}>
                    {route.params?.paramKey.analyzedInstructions[0].steps.map((item) => (
                        <Text style={Style.text} key={item.step}>{item.number}. {item.step}</Text>
                    ))}
                </View>
        </ScrollView>
        </View>
    );
}
