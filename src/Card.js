import React, { Component } from 'react';
import "./Card.css";

class Card extends Component {
    render(){
        const cardStyle = (this.props.type === "narrow") ? "CardNarrow" : "CardWide";
        return <div className={cardStyle}>
            <div className="Number">{this.props.number}</div>
        </div>
    }
}

export default Card;