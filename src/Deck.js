import React, { Component } from 'react';
import Card from "./Card";
import cards from  "./cards";
import "./Deck.css";

class Deck extends Component{

    constructor(props){
        super(props);
        this.state = {
            cards: cards
        };

    }

    handleClick(event){
        let clonedState = this.state.cards.slice();

        if (event.shiftKey && event.altKey){
            clonedState.push({
                type: "wide"
            });
        }
        else if (event.shiftKey){
            clonedState.push({
               type: "narrow"
            });
        }
        else {
            clonedState.pop();
        }

        this.setState({
            cards: clonedState
        });
    }

    render(){
        let toRender = [];
        const stateCards = this.state.cards;
        const length = stateCards.length;
        if (length > 1){
            toRender.push(<Card key={length-1}/>);
            toRender.push(<Card
                key={length}
                type={stateCards[length-1].type}
                number={length}
                onClick={this.handleClick.bind(this)}
                isStacked={true}
            />);
        }
        else if (length === 1){
            toRender.push(<Card
                key={length}
                type={stateCards[length-1].type}
                number={length}
                onClick={this.handleClick.bind(this)}
                isStacked={false}
            />);
        }
        return <div className="deck">
            {toRender}
        </div>
    }
}

export default Deck;