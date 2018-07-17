import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const fetchCategoriesRequest = () => {
    return dispatch => {
        return callApi("categories", "GET", null).then(res => {
            dispatch(
                fetchCategories(
                    res.data.map(category => {
                        return {
                            id: category._id,
                            name: category.name,
                            image: category.image,
                            description: category.description
                        };
                    })
                )
            );
        });
    };
};

export const addCategoryRequest = category => {
    return dispatch => {
        return callApi("categories", "POST", category).then(res => {
            dispatch(addCategory(res.data));
        });
    };
};

export const updateCategoryRequest = category => {
    return dispatch => {
        return callApi(`categories/${category.id}`, "PUT", category).then(
            res => {
                dispatch(updateCategory(category));
            }
        );
    };
};

export const deleteCategoryRequest = id => {
    return dispatch => {
        return callApi(`categories/${id}`, "DELETE", null).then(res => {
            dispatch(deleteCategory(id));
        });
    };
};

export const fetchCategories = categories => {
    return {
        type: Types.FETCH_CATEGORY,
        categories
    };
};

export const addCategory = category => {
    return {
        type: Types.ADD_CATEGORY,
        category
    };
};

export const updateCategory = category => {
    return {
        type: Types.UPDATE_CATEGORY,
        category
    };
};

export const deleteCategory = id => {
    return {
        type: Types.DELETE_CATEGORY,
        id
    };
};

export const selectEditCategory = category => {
    return {
        type: Types.SELECT_EDIT_CATEGORY,
        category
    };
};
