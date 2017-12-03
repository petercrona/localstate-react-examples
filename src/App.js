import React, { Component } from 'react';
import './App.css';
import Counter from './examples/Counter';
import TicTacToe from './examples/TicTacToe';
import Checkout from './examples/Checkout';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Counter />
                </div>
                <hr />
                <div className="App">
                    <TicTacToe />
                </div>
                <hr />
                <div className="App">
                    <Checkout />
                </div>
            </div>
        );
    }
}

export default App;
