import React from 'react';
import {create, isFinished, restart} from './Model';
import observe from 'mvsplit-react';
import {map, range} from 'lodash/fp';
import './TicTacToe.css';
import GameStatus from './GameStatus';
import Cell from './Cell';

function TicTacToe({mvsplit}) {
    const {notify, model} = mvsplit;

    return (
        <div>
            <GameStatus model={model} />

            <ul className="TicTacToe_board">
                {map(
                     x => <Cell key={x} cellId={x} mvsplit={mvsplit} />,
                     range(0, 9)
                 )}
            </ul>

            {isFinished(model) &&
             <p>
                 <button onClick={notify(restart)}>Restart</button>
             </p>
            }
        </div>
    );
}

export default observe(create(), TicTacToe);
