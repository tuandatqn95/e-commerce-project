import React, { Component } from "react";

class CardHeader extends Component {
    render() {
        const { name, subTitle, color } = this.props;

        return (
            <div className={`card-header card-header-${color}`}>
                <h4 className="card-title ">{name}</h4>

                <p className="card-category"> {subTitle}</p>
            </div>
        );
    }
}

export default CardHeader;
