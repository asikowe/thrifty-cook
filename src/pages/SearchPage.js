import React, { useState } from 'react';
import Style from '../../assets/Style';
import AppButton from '../components/Button';
import { SearchBar } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, ActivityIndicator, StatusBar } from 'react-native';

export default function Searching() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [searchTimer, setSearchTimer] = useState(null);
    const [loading, setLoading] = useState(false)
    const info = 'fillIngredients=true&addRecipeInformation=true&instructionsRequired=true'
    const API_KEY = '2299a9ad31ef43548dd863d4faf15262'
    
    const navigation = useNavigation();

    async function fetchData(text) {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${text}&${info}&number=2`,
        );
        res
            .json()
            .then((res) => {
                setResponse(res);
                setLoading(false)
            })
            .catch((err) => console.log(err));
    };

    return (
        <View style={Style.containerSearch}>
            <StatusBar style='dark'/>
            <SearchBar placeholder="Search for recipes"
                onChangeText={(text) => {
                    if (searchTimer) {
                        clearTimeout(searchTimer);
                    }
                    setLoading(true);
                    setInput(text);
                    setSearchTimer(
                        setTimeout(() => {
                            fetchData(text);
                        }, 3000),
                    );
                }}
                value={input}
                containerStyle={{ backgroundColor: '#fdf6da', borderBottomColor: '#fdf6da', borderTopColor: '#fdf6da' }}
                inputContainerStyle={{ backgroundColor: '#fdf6da' }}
                inputStyle={{color: 'black'}}
                onSubmitEditing={()=>setInput('')}
                clearIcon={false}
                onFocus={()=>setResponse('')}
            />
            {loading === true &&
                <View style={Style.myloader}>
                    <ActivityIndicator size='large' color='#FFB3BA' />
                </View>}
            {response &&
                <View style={Style.container}>
                    <ScrollView contentContainerStyle={Style.container2}>
                        <Text style={Style.heading}>{response?.results[0].title}</Text>
                        <Text style={Style.subtitle}>Ready in: {response?.results[0].readyInMinutes} minutes. Servings: {response?.results[0].servings}</Text>
                        <Text style={Style.subtitle}>COOKING INSTRUCTIONS:</Text>
                        <View style={Style.containerBorder}>
                            {response?.results[0].analyzedInstructions[0].steps.map((item) => (
                                <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14 }} key={item.step}>{item.number}. {item.step}</Text>
                            ))}
                        </View>
                        <AppButton buttonText='Show recipe' onPress={() => navigation.navigate('Recipe', { paramKey: response.results[0] })} />
                        <Text style={Style.heading}>{response?.results[1].title}</Text>
                        <Text style={Style.subtitle}>Ready in: {response?.results[1].readyInMinutes} minutes. Servings: {response?.results[1].servings}</Text>
                        <Text style={Style.subtitle}>COOKING INSTRUCTIONS:</Text>
                        <View style={Style.containerBorder}>
                            {response?.results[1].analyzedInstructions[0].steps.map((item) => (
                                <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14 }} key={item.step}>{item.number}. {item.step}</Text>
                            ))}
                        </View>
                        <AppButton buttonText='Show recipe' onPress={() => navigation.navigate('Recipe', { paramKey: response.results[1] })} />
                    </ScrollView>
                </View>}
        </View>
    );
}