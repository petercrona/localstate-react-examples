import React from 'react';
import {create, dec, inc} from './Model';
import observe from 'mvstate-react';

function Counter({mvstate: {model, notify}}) {
    return (
        <div>
            <p>
                <strong>Counter is {model.counter}</strong>
            </p>
            <p>
                <button onClick={notify(dec)}>Decrement</button>
                <button onClick={notify(inc)}>Increment</button>
            </p>
        </div>
    );
}

export default observe(create(), Counter);
