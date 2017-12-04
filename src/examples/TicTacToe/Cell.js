import React from 'react';
import {updateBoard} from './Model';

export default function Cell({cellId, _localstate: {model, notify}}) {
    return (
        <li onClick={notify(updateBoard(cellId))}>
            {model.board[cellId]}
        </li>
    );
}
