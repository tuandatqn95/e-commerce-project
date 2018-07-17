import React, { Component } from "react";
import CardHeader from "./CardHeader";

class Card extends Component {
    render() {
        const {
            cardHeader,
            subTitle,
            children,
            size = 12,
            color = "primary"
        } = this.props;
        return (
            <div className={`col-md-${size}`}>
                <div className="card">
                    <CardHeader
                        name={cardHeader}
                        subTitle={subTitle}
                        color={color}
                    />
                    <div className="card-body">{children}</div>
                </div>
            </div>
        );
    }
}

export default Card;
