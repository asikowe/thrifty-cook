import React from 'react';
import Recipe from '../pages/RecipePage';
import Searching from '../pages/SearchPage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

export default function RecipeScreenNavigator() {

    return (
        <Stack.Navigator> 
            <Stack.Screen
                name='Searching'
                component={Searching}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Recipe'
                component={Recipe}
                options={{
                    headerStyle: {
                        backgroundColor: '#fdf6da',
                    }
                }}
            />
        </Stack.Navigator>
    );
}
