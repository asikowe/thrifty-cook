export const GET_RECIPES = "GET_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const ADD_INGREDIENTS = "ADD_INGREDIENTS";
export const REMOVE_INGREDIENTS = "REMOVE_INGREDIENTS";
export const CLEAR_INGREDIENTS = "CLEAR_INGREDIENTS";

export const getRecipes = recipe => ({
    type: GET_RECIPES,
    payload: recipe
});

export const addRecipe = recipe => ({
    type: ADD_RECIPE,
    payload: recipe
});

export const removeRecipe = recipe => ({
    type: REMOVE_RECIPE,
    payload: recipe
});

export const getIngredients = ingredient => ({
    type: GET_INGREDIENTS,
    payload: ingredient

});

export const addIngredients = ingredient => ({
    type: ADD_INGREDIENTS,
    payload: ingredient

});

export const removeIngredients = ingredient => ({
    type: REMOVE_INGREDIENTS,
    payload: ingredient
});

export const clearIngredients = ingredient => ({
    type: CLEAR_INGREDIENTS,
    payload: ingredient
})