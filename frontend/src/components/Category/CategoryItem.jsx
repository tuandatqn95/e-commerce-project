import React, { Component } from "react";

const descriptionLength = 70;

class CategoryItem extends Component {
    onEditCategory = () => {
        this.props.onEditCategory(this.props.category);
    };

    onDeleteCategory = () => {
        this.props.onDeleteCategory(this.props.category);
    };

    onShowProduct = () => {
        // this.props.onShowProduct(id);
    };
    render() {
        const { id, name, description, image } = this.props.category;

        const Description =
            description.substring(
                0,
                description.indexOf(" ", descriptionLength)
            ) + (description.length > descriptionLength ? "..." : "");

        const Image = <img alt={name} style={{ maxHeight: 150 }} src={image} />;

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{Description}</td>
                <td>{Image}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-success"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        onClick={this.onShowProduct}
                    >
                        <i className="material-icons">library_books</i>
                    </button>{" "}
                    <button
                        type="button"
                        className="btn btn-warning"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        onClick={this.onEditCategory}
                    >
                        <i className="material-icons">edit</i>
                    </button>{" "}
                    <button
                        type="button"
                        className="btn btn-danger"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        onClick={this.onDeleteCategory}
                    >
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CategoryItem;
