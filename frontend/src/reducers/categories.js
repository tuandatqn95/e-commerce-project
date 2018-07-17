import * as Types from "../constants/ActionTypes";

const initialState = [];

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CATEGORY:
            return [...action.categories];
        case Types.ADD_CATEGORY:
            state.push(action.category);
            return [...state];
        case Types.UPDATE_CATEGORY:
            let index = state.findIndex(i => i.id === action.category.id);
            state[index] = action.category;
            return [...state];
        case Types.DELETE_CATEGORY:
            state = state.filter(i => i.id !== action.id);
            return [...state];
        default:
            return [...state];
    }
};

export default reducer;
