import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "../../components/Category/CategoryItem";
import CategoryList from "../../components/Category/CategoryList";
import CategoryForm from "../../components/Category/CategoryForm";
import {
    fetchCategoriesRequest,
    addCategoryRequest,
    updateCategoryRequest,
    deleteCategoryRequest
} from "../../actions/categoryAction";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false,
            selectedCategory: undefined
        };
    }

    onToggleForm = () => {
        this.setState({
            isFormOpen: !this.state.isFormOpen
            // selectedCategory: undefined
        });
    };

    onCloseForm = () => {
        this.setState({
            isFormOpen: false
            // selectedCategory: {}
        });
    };

    onSubmitCategory = category => {
        if (category.id) {
            this.props.onUpdateCategory(category);
        } else {
            this.props.onAddCategory(category);
        }
        this.onToggleForm();
    };

    onEditCategory = category => {
        this.setState({
            isFormOpen: true,
            selectedCategory: category
        });
    };

    onDeleteCategory = category => {
        if (window.confirm(`Are you sure to delete '${category.name}'?`))
            this.props.onDeleteCategory(category.id);
        this.onCloseForm();
    };

    onClearSelectedCategory = () => {
        this.setState({
            selectedCategory: undefined
        });
    };

    componentDidMount() {
        this.props.onFetchCategories();
    }

    render() {
        const CategoryItems = () =>
            this.props.categories.map((category, index) => {
                return (
                    <CategoryItem
                        key={index}
                        category={category}
                        onEditCategory={this.onEditCategory}
                        onDeleteCategory={this.onDeleteCategory}
                    />
                );
            });

        const listSize = this.state.isFormOpen ? 8 : 12;

        return (
            <div className="container-fluid">
                <div className="row">
                    <CategoryList
                        size={listSize}
                        onToggleForm={this.onToggleForm}
                        isFormOpen={this.state.isFormOpen}
                    >
                        <CategoryItems />
                    </CategoryList>

                    <CategoryForm
                        size="4"
                        onSubmitCategory={this.onSubmitCategory}
                        onCloseForm={this.onCloseForm}
                        selectedCategory={this.state.selectedCategory}
                        isOpen={this.state.isFormOpen}
                        onClearSelectedCategory={this.onClearSelectedCategory}
                    />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchCategories: () => dispatch(fetchCategoriesRequest()),
        onAddCategory: category => dispatch(addCategoryRequest(category)),
        onUpdateCategory: category => dispatch(updateCategoryRequest(category)),
        onDeleteCategory: id => dispatch(deleteCategoryRequest(id))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
