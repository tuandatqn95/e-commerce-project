import React, { Component } from "react";
import Card from "../Card/Card";

class CategoryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "",
            image: "",
            description: ""
        };
    }

    onHandleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    };

    onHandleFocus = event => {
        let target = event.target;
        let name = target.name;
        this.setState({
            isFocusing: name
        });
    };

    onBlurFocus = () => {
        this.setState({
            isFocusing: undefined
        });
    };

    validateInput() {
        return true;
    }

    resetForm = () => {
        this.setState({
            id: "",
            name: "",
            image: "",
            description: ""
        });
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.validateInput()) {
            this.props.onSubmitCategory({
                id: this.state.id,
                name: this.state.name,
                image: this.state.image,
                description: this.state.description
            });
            this.resetForm();
        }
    };

    onReset = () => {
        this.resetForm();
        this.props.onCloseForm();
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.selectedCategory) {
            this.setState({
                id: nextProps.selectedCategory.id,
                name: nextProps.selectedCategory.name,
                image: nextProps.selectedCategory.image,
                description: nextProps.selectedCategory.description
            });
            nextProps.onClearSelectedCategory();
        }
        if (nextProps.isOpen === false) {
            this.resetForm();
        }
    };

    render() {
        const { isOpen, size = 4 } = this.props;
        return (
            isOpen && (
                <Card
                    cardHeader={
                        this.state.id ? "Edit Category" : "Add Category"
                    }
                    size={size}
                >
                    <form onSubmit={this.onSubmit} onReset={this.onReset}>
                        <div className="row">
                            {this.state.id && (
                                <div className="col-md-12">
                                    <div
                                        className={`form-group bmd-form-group ${this
                                            .state.id && "is-filled"} ${this
                                            .state.isFocusing === "id" &&
                                            "is-focused"}`}
                                    >
                                        <label className="bmd-label-floating">
                                            Category ID
                                        </label>
                                        <input
                                            name="id"
                                            className="form-control"
                                            disabled="disabled"
                                            type="text"
                                            value={this.state.id}
                                            onFocus={this.onHandleFocus}
                                            onBlur={this.onBlurHandle}
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="col-md-12">
                                <div
                                    className={`form-group bmd-form-group ${this
                                        .state.name && "is-filled"} ${this.state
                                        .isFocusing === "name" &&
                                        "is-focused"}`}
                                >
                                    <label className="bmd-label-floating">
                                        Category Name
                                    </label>
                                    <input
                                        name="name"
                                        className="form-control"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onHandleChange}
                                        onFocus={this.onHandleFocus}
                                        onBlur={this.onBlurHandle}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div
                                    className={`form-group bmd-form-group ${this
                                        .state.image && "is-filled"} ${this
                                        .state.isFocusing === "image" &&
                                        "is-focused"}`}
                                >
                                    <label className="bmd-label-floating">
                                        Image URL
                                    </label>
                                    <input
                                        name="image"
                                        className="form-control"
                                        type="text"
                                        value={this.state.image}
                                        onChange={this.onHandleChange}
                                        onFocus={this.onHandleFocus}
                                        onBlur={this.onBlurHandle}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div
                                    className={`form-group bmd-form-group ${this
                                        .state.description &&
                                        "is-filled"} ${this.state.isFocusing ===
                                        "description" && "is-focused"}`}
                                >
                                    <label className="bmd-label-floating">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        className="form-control"
                                        rows="5"
                                        value={this.state.description}
                                        onChange={this.onHandleChange}
                                        onFocus={this.onHandleFocus}
                                        onBlur={this.onBlurHandle}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary pull-right"
                        >
                            Save
                        </button>
                        <button
                            type="reset"
                            className="btn btn-default pull-right"
                        >
                            Cancel
                        </button>
                        <div className="clearfix" />
                    </form>
                </Card>
            )
        );
    }
}

export default CategoryForm;
