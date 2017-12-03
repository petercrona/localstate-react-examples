import React, { Component } from 'react';
import './App.css';
import Counter from './examples/Counter';
import TicTacToe from './examples/TicTacToe';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter />
                <hr />
                <TicTacToe />
            </div>
        );
    }
}

export default App;
