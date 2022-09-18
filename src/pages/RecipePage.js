import React from 'react';
import Style from '../../assets/Style';
import { Text, View, ScrollView, StatusBar } from 'react-native';

export default function Recipe({ route }) {
    return (
        <View style={Style.container}>
        <StatusBar style='dark' />
        <ScrollView showsHorizontalScrollIndicator={false}>
            <Text style={Style.heading}>{route.params?.paramKey.title}</Text>
            <Text style={Style.subtitle}>Ready in: {route.params?.paramKey.readyInMinutes} minutes. Servings: {route.params?.paramKey.servings}</Text>
            <Text style={Style.subtitle}>INGREDIENTS:</Text>
                <View style={Style.containerInstructions} key={route.params?.paramKey.id}>
                    {route.params?.paramKey.extendedIngredients.map((item, i) => ( 
                        <Text style={Style.textInstructions} key={i}>{item.original}</Text>
                    ))}
                </View>
            <Text style={Style.subtitle}>COOKING INSTRUCTIONS:</Text>
                <View style={Style.containerInstructions} key={route.params?.paramKey.title}>
                    {route.params?.paramKey.analyzedInstructions[0].steps.map((item, i) => (
                        <Text style={Style.textInstructions} key={i}>{item.number}. {item.step}</Text>
                    ))}
                </View>
        </ScrollView>
        </View>
    );
}
