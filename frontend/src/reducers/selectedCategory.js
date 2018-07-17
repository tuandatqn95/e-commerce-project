import * as Types from "../constants/ActionTypes";

const initialState = {};

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SELECT_EDIT_CATEGORY:
            return action.category;
        default:
            return initialState;
    }
};

export default reducer;
