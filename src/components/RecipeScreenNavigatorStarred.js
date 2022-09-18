import React from 'react';
import Recipe from '../pages/RecipePage';
import StarredRecipes from '../pages/StarredRecipesPage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function RecipeScreenNavigator2() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Favourite'
                component={StarredRecipes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Recipe'
                component={Recipe}
            />
        </Stack.Navigator>
    );
}