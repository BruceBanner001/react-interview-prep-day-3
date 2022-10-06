import React, { useReducer } from 'react';
const initialState = 0;
const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    else if (action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>4.What is UseReducer Hook ?(Implementation)</h1>
            <h2 style={{textAlign:'center'}}>{state}</h2>
            <button  className='q2' onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
            <button className='q2' onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
        </div>
    )
}

export default UseReducer;