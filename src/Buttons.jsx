import React from 'react';
import store from './store';

const Buttons = () => {

const setnumber = button =>{
    return {type: 'number', payload: button}
}

const clear = ()=>{
    return {type: 'clear'}
}

const result = ()=>{
    return {type: 'result'}
}

    return (
        <div className='buttons-container'>
            <button onClick={()=>store.dispatch(setnumber('1'))}> 1 </button>
            <button onClick={()=>store.dispatch(setnumber('2'))}> 2 </button>
            <button onClick={()=>store.dispatch(setnumber('3'))}> 3 </button>
            <button onClick={()=>store.dispatch(setnumber('+'))}> + </button>
            <button onClick={()=>store.dispatch(setnumber('4'))}> 4 </button>
            <button onClick={()=>store.dispatch(setnumber('5'))}> 5 </button>
            <button onClick={()=>store.dispatch(setnumber('6'))}> 6 </button>
            <button onClick={()=>store.dispatch(setnumber('-'))}> - </button>
            <button onClick={()=>store.dispatch(setnumber('7'))}> 7 </button>
            <button onClick={()=>store.dispatch(setnumber('8'))}> 8 </button>
            <button onClick={()=>store.dispatch(setnumber('9'))}> 9 </button>
            <button onClick={()=>store.dispatch(setnumber('/'))}> / </button>
            <button onClick={()=>store.dispatch(setnumber('*'))}> * </button>
            <button onClick={()=>store.dispatch(setnumber('0'))}> 0 </button>
            <button onClick={()=>store.dispatch(clear())} className='btn btn-danger'> C </button>
            <button onClick={()=>store.dispatch(result())} className='btn btn-primary'> = </button>
        </div>
    );
}

export default Buttons;
