import React, { Component } from 'react';
import Map from "./Map";
import Deck from "./Deck";

class App extends Component {
    render(){
        return <div>
            <Deck/>
            <Map/>
        </div>
    }
}

export default App;
