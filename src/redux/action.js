export const ADD_RECIPE = "ADD_RECIPE";

let todoId = 0;

export const addRecipe = recipe => ({
    type: ADD_RECIPE,
    payload: {
        id: ++todoId,
        recipe
    }
});