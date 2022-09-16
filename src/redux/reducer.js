import { ADD_RECIPE } from "./action";

const initialState = {
    recipes: []
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE: {
            const { id, recipe } = action.payload
            return {
                ...state,
                recipes: [...state.recipes, { id, recipe }]
            };
        };
        default:
            return state;
    }
}

export default recipeReducer;