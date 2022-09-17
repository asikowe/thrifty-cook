import React from 'react';
import RecipeCardButton from './RecipeCardButton';
import StarredButton from './StarredButton';
import Style from '../../assets/Style';
import { View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';

const RecipeCard = (props) => {
    
    return(
        <Card style={Style.containerRecipeCard}>
            <Card.Content>
                <Title style={Style.recipeCardTitle}>{props.title} <StarredButton onPress2={props.onPress2} /></Title>
                <Text style={Style.recipeCardText}>Cooking Time: {props.cookingTime} min</Text>
                <Text style={Style.recipeCardText}>Serves: {props.servings}</Text>
            </Card.Content>
            <View style={Style.containerRecipeCardButtons}>
                <RecipeCardButton style={Style.recipeCardButton} buttonText='SEE RECIPE' onPress={props.onPress1}/>
                <RecipeCardButton style={Style.recipeCardButton} buttonText='ADD TO LIST' onPress={props.onPress2}/>
            </View>
        </Card>
    )
}

export default RecipeCard;