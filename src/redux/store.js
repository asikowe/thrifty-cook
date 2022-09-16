import { createStore } from "redux";
import recipeReducer from "./reducer";

export default createStore(recipeReducer);