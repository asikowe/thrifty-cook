import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Style from '../../assets/Style';
import RecipeCard from '../components/RecipeCard';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function StarredRecipes() {

    const navigation = useNavigation();

    const todoList = useSelector(state => state.recipes);

    return (
        <View style={Style.container}>
            <ScrollView contentContainerStyle={Style.container2}
                        showsHorizontalScrollIndicator={false}>
                <Text style={Style.heading}> Your favourite recipes:</Text>
                {todoList?.map((result) => (
                <RecipeCard title={result.recipe.title}
                    cookingTime={result.recipe.readyInMinutes}
                    servings={result.recipe.servings}
                    key={result.recipe.id} 
                    />))}
            </ScrollView>
            </View>
    );
}