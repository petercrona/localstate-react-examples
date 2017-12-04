import React from 'react';
import {create, isFinished, restart} from './Model';
import observe from 'localstate-react';
import {map, range} from 'lodash/fp';
import './TicTacToe.css';
import GameStatus from './GameStatus';
import Cell from './Cell';

function TicTacToe({_localstate}) {
    const {notify, model} = _localstate;

    return (
        <div>
            <GameStatus model={model} />

            <ul className="TicTacToe_board">
                {map(
                     x => <Cell key={x} cellId={x} _localstate={_localstate} />,
                     range(0, 9)
                 )}
            </ul>

            {isFinished(model) &&
             <p className="TicTacToe_Restart">
                 <button onClick={notify(restart)}>Restart</button>
             </p>
            }
        </div>
    );
}

export default observe(create(), TicTacToe);
