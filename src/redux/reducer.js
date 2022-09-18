import { GET_RECIPES, ADD_RECIPE, REMOVE_RECIPE, GET_INGREDIENTS, ADD_INGREDIENTS, REMOVE_INGREDIENTS, CLEAR_INGREDIENTS } from "./action";

const initialState = {
    favourites: [],
    ingredients: [],
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES: 
            return {...state, favourites: action.payload}
        case ADD_RECIPE: {
            return {...state, favourites: [...state.favourites, action.payload]}}
        case REMOVE_RECIPE:
            return {...state, favourites: state.favourites.filter(recipe => recipe.id !== action.payload.id)};
        case GET_INGREDIENTS:
            return {...state, ingredients: action.payload}
        case ADD_INGREDIENTS: {
            return {...state, ingredients: [...state.ingredients, action.payload]}}
        case REMOVE_INGREDIENTS:
            return { ...state, ingredients: state.ingredients.filter(ingredient => ingredient.id !== action.payload.id) };
        case CLEAR_INGREDIENTS:
            return {...state, ingredients: []};
        default:
            return state;
    }
}

export default recipeReducer;