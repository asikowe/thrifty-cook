import React from 'react';
import RecipeCardButton from './RecipeCardButton';
import StarredButton from './StarredButton';
import IngredientsButton from "./IngredientsButton";
import Style from '../../assets/Style';
import { View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';

export default function RecipeCard(props) {
    
    return(
        <Card style={Style.containerRecipeCard}>
            <Card.Content>
                <Title style={Style.recipeCardTitle}>{props.title}</Title>
                <Text style={Style.recipeCardText}>Cooking Time: {props.cookingTime} min</Text>
                <Text style={Style.recipeCardText}>Serves: {props.servings}</Text>
            </Card.Content>
            <View style={Style.containerRecipeCardButton}>
                <RecipeCardButton style={Style.recipeCardButton} buttonText='SEE RECIPE' onPress={props.onPress1}/>
            </View>
            <View style={Style.containerRecipeCardStarredButton}>
                <StarredButton onPress2={props.onPress2} isClicked={props.isClicked} /> 
            </View>
            <View style={Style.containerRecipeCardListButton}>
                <IngredientsButton onPress3={props.onPress3} isClicked2={props.isClicked2} />
            </View>
        </Card>
    )
}