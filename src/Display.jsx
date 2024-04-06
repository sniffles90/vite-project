import React, { useState } from 'react';
import store from './store';

const Display = () => {

const [state, setState] = useState(store.getState())

store.subscribe(()=>{
    setState(store.getState())
})

    return (
        <div className='display-container'>
            <input type="text" name="" id="" value={state}/>
        </div>
    );
}

export default Display;
