import React, { Component } from 'react';
import Card from "./Card";
import cards from  "./cards";

class Deck extends Component{

    render(){
        const input = cards;
        const toRender = input.map((card)=>{

        })
        return <Card type="wide" number="1"/>
    }
}

export default Deck;