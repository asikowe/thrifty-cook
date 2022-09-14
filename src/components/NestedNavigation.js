import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Recipe from "../pages/RecipePage";
import Searching from "../pages/SearchPage";

const Stack = createStackNavigator(); 

const RecipeScreenNavigator = () => {
    return (
        <Stack.Navigator> 
            <Stack.Screen
                name="Searching"
                component={Searching}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Recipe"
                component={Recipe}
            />
        </Stack.Navigator>
    );
}

export {RecipeScreenNavigator};