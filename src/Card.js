import React, { Component } from 'react';
import "./Card.css";

class Card extends Component {
    render(){
        const cardWidth = (this.props.type === "wide") ? "card-wide" : "card-narrow";
        const cardTop = (this.props.isStacked) ? "card-top" : "";
        const cardStyle = `card ${cardWidth} ${cardTop}`;

        return <div onClick={this.props.onClick} className={cardStyle}>
            <div className="number">{this.props.number}</div>
        </div>
    }
}

export default Card;