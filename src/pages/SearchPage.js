import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, StatusBar, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from "@rneui/themed";
import CreateCard from "../components/ItemCard";
import Style from '../../assets/Style';


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

        <SafeAreaView style={Style.containerSearch}>
            <View>
                <StatusBar style='dark'/>
                <SearchBar
                    placeholder="Search for recipes"
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
                    containerStyle={Style.searchContainer}
                    inputContainerStyle={Style.searchInputContainer}
                    inputStyle={Style.searchInput}
                    onSubmitEditing={()=>setInput('')}
                    clearIcon={false}
                    onFocus={()=>setResponse('')}
                />
            </View>

            {loading === true &&
                <View style={Style.myloader}>
                    <ActivityIndicator size='large' color='#FFB3BA' />
                </View>}
            {response &&

                <View style={Style.container}>
                    <ScrollView>
                    <CreateCard title={response?.results[0].title} cookingTime={response?.results[0].readyInMinutes} servings={response?.results[0].servings} onPress={() => navigation.navigate("Recipe", { paramKey: response.results[0] })}/>
                    <CreateCard title={response?.results[1].title} cookingTime={response?.results[1].readyInMinutes} servings={response?.results[1].servings} onPress={() => navigation.navigate("Recipe", { paramKey: response.results[1] })}/>
                    </ScrollView>
                </View>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3EBDD",
    },
    myloader: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
    }
});


