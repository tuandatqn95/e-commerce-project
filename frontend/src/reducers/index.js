import { combineReducers } from "redux";
import categories from "./categories";
import selectedCategory from "./selectedCategory";

const appReducer = combineReducers({
    categories,
    selectedCategory
});

export default appReducer;
