import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    const [firstCounter, setfirstCounter] = useState(0);
    const IncrementOne = () => {
        setfirstCounter(firstCounter + 1);
    }
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 20) i++;
        return firstCounter % 2 === 0
    }, [firstCounter])

    return (
        <div>
            <h1>5.Implementation of Use Memo </h1>
            <button className='q3' onClick={IncrementOne}>Counter <span className='q3output'>{firstCounter}</span></button> &nbsp; &nbsp;
            <span>{isEven ? "Even" : "Odd"}</span> &nbsp; &nbsp;
        </div>
    )
}

export default UseMemo;