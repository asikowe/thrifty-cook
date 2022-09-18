import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Style from '../../assets/Style';
import RecipeCard from '../components/RecipeCard';
import { useSelector, useDispatch } from 'react-redux';
import { addIngredients, removeIngredients, removeRecipe } from '../redux/action';
import { useNavigation } from '@react-navigation/native';

export default function StarredRecipes() {

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const favourites = useSelector(state => state.favourites);

    const ingredients = useSelector(state => state.ingredients);

    const handleAddIngredients = (ingredients) => {
        dispatch(addIngredients(ingredients))

    };

    const handleRemoveIngredients = (ingredients) => {
        dispatch(removeIngredients(ingredients))
    };

    const handleRemoveRecipe = (recipe) => {
        dispatch(removeRecipe(recipe))
    };

    const ingredientsExists = recipe => {
        if (ingredients?.filter(item => item.id === recipe.id).length > 0) {
            return true;
        }
        return false
    };

    return (
        <View style={Style.container}>
            <ScrollView contentContainerStyle={Style.containerRecipeCards} showsHorizontalScrollIndicator={false}>
                <Text style={Style.heading}> Your favourite recipes:</Text>
                {favourites?.map((result) => (
                <RecipeCard title={result.title}
                    cookingTime={result.readyInMinutes}
                    servings={result.servings}
                    key={result.id} 
                    onPress1={() => navigation.navigate("Recipe", { paramKey: result })} 
                    onPress2={() => handleRemoveRecipe(result)}
                    onPress3={() => {ingredientsExists(result) ? handleRemoveIngredients(result) : handleAddIngredients(result)}}
                    isClicked={"star"}
                    isClicked2={ingredientsExists(result)}
                    />))}
            </ScrollView>
        </View>
    );
}