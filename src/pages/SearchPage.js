import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, StatusBar, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from "@rneui/themed";
import CreateCard from "../components/ItemCard";
import Style from '../../assets/Style';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../redux/action';


export default function Searching() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [searchTimer, setSearchTimer] = useState(null);
    const [loading, setLoading] = useState(false)
    const info = 'fillIngredients=true&addRecipeInformation=true&instructionsRequired=true'
    const API_KEY = 'your-api-key'
    
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

    const dispatch = useDispatch();
    
    const todoList = useSelector(state => state.recipes);

    const handleAddRecipe = (newRecipe) => {
        const newRecipeIndex = todoList.findIndex((recipe) => recipe.recipe.id === newRecipe.id)
        if (newRecipeIndex === -1) {
            dispatch(addRecipe(newRecipe))
        }
    }

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
            {!! response &&
                <View style={Style.container}>
                        <ScrollView contentContainerStyle={Style.container2} showsHorizontalScrollIndicator={false}>
                        {response?.results.map((result) => (
                            <CreateCard title={result.title} 
                                cookingTime={result.readyInMinutes} 
                                servings={result.servings} 
                                key={result.id}
                                onPress1={() => navigation.navigate("Recipe", { paramKey: result })} 
                                onPress2={() => handleAddRecipe(result)}/>
                        ))}
                    </ScrollView>
                </View>}
        </SafeAreaView>
    );
}

