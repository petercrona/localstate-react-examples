import React from 'react';
import {updateBoard} from './Model';

export default function Cell({cellId, mvsplit: {model, notify}}) {
    return (
        <li onClick={notify(updateBoard(cellId))}>
            {model.board[cellId]}
        </li>
    );
}
