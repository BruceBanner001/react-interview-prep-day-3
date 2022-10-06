import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    useEffect(() => {

    }, [num])
    const changeNumber = () => {
        setNum(num + 1);
    }
    const changeNumbers = () => {
        setNums(nums - 1);
    }


    return (
        <>
            <h1>3.What is useEffect Hook ?(Implementation)</h1>
            <button className='q3' onClick={changeNumber}>Increment <span className='q3output'>{num}</span></button>
            <br />
            <br />
            <button className='q3' onClick={changeNumbers}>Decrement <span className='q3output'>{nums}</span></button>
        </>
    )
}

export default UseEffect;