import React, { useState } from 'react';

const UseState = () => {
    const [myName, setMyName] = useState('Click the Change Button to see the Changes.');
    const changeName = () => {
        setMyName('Changes Done using UseState.')
    }
    return (
        <div>
            <h1>2.What is UseState Hook ?(Implementation)</h1>
            <h2>{myName}</h2>
            <button className='q2' onClick={changeName}>Change</button>
        </div>
    )
}

export default UseState;