import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import React from 'react';


export default function Recipe({ route }) {
    return (
        <View style={styles.container}>
        <StatusBar style='dark' />
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{ fontFamily: 'PermamentMarkerRegular', fontSize: 35 }}>{route.params?.paramKey.title}</Text>
            <Text style={{ fontFamily: 'IndieFlowerRegular', fontSize: 20 }}>Ready in: {route.params?.paramKey.readyInMinutes} minutes. Servings: {route.params?.paramKey.servings}</Text>
            <Text style={{ fontFamily: 'IndieFlowerRegular', fontSize: 20 }}>INGREDIENTS:</Text>
                <View style={styles.container2}>
            {route.params?.paramKey.extendedIngredients.map((item) => ( 
                        <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14 }} key={item.id}>{item.original}</Text>
                    ))}
                </View>
            <Text style={{ fontFamily: 'IndieFlowerRegular', fontSize: 20 }}>COOKING INSTRUCTIONS:</Text>
                <View style={styles.container2}>
            {route.params?.paramKey.analyzedInstructions[0].steps.map((item) => (
                <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14 }} key={item.step}>{item.number}. {item.step}</Text>
           ))}
                </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D3EBDD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollcontainer: {
        flex: 1,
        backgroundColor: '#D3EBDD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,

    },
});
