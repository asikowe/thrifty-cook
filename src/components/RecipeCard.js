import React from 'react';
import RecipeCardButton from './RecipeCardButton';
import StarredButton from './StarredButton';
import Style from '../../assets/Style';
import { Text } from 'react-native';
import { Card, Title } from 'react-native-paper';

const RecipeCard = (props) => {
    
    return(
        <Card style={Style.containerRecipeCard}>
            <Card.Content>
                <Title style={Style.recipeCardTitle}>{props.title} <StarredButton onPress2={props.onPress2} /></Title>
                <Text style={Style.recipeCardText}>Cooking Time: {props.cookingTime} min</Text>
                <Text style={Style.recipeCardText}>Serves: {props.servings}</Text>
            </Card.Content>
            <View style={{flex:1, flexDirection:'row', alignItems:'flex-end',}}>
            <RecipeCardButton buttonText='SEE RECIPE' onPress={props.onPress1}/>
            <RecipeCardButton buttonText='ADD TO LIST' onPress={props.onPress2}/>
            </View>
        </Card>
    )
}

export default RecipeCard;