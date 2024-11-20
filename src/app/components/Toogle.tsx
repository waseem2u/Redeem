"use client"

import React, { useState } from 'react';

const Toogle = () => {
    const [position, setPosition] = useState(300); // Initial position
    const [counter300, setCounter300] = useState(200); // Counter for 300
    const [counter500, setCounter500] = useState(500); // Counter for 500

    const moveRight = () => {
        if (position < 500) {
            setPosition((prevPosition) => prevPosition + 50); // Move right by 50 pixels
            setCounter300((prevCounter) => prevCounter + 1); // Increment counter for 300
            setCounter500((prevCounter) => prevCounter - 1); // Decrement counter for 500
        }
    };

    const moveLeft = () => {
        if (position > 300) {
            setPosition((prevPosition) => prevPosition - 50); // Move left by 50 pixels
            setCounter300((prevCounter) => prevCounter - 1); // Decrement counter for 300
            setCounter500((prevCounter) => prevCounter + 1); // Increment counter for 500
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%',  backgroundColor:"white"}}>
            <h1 className="mb-4">Move the box!</h1>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'blue',
                    position: 'absolute', // Use absolute positioning
                    left: `${position}px`, // Apply left position
                    transition: 'left 0.3s ease', // Smooth transition
                }}
            />
            <div style={{ marginTop: '20px' }}>
                <button onClick={moveRight} style={{ marginRight: '10px' }}>
                    {counter300}
                </button>
                <button onClick={moveLeft}>
                    {counter500}
                </button>
            </div>
            {/* <div style={{ marginTop: '20px' }}>
                <p>Counter for 300: {counter300}</p>
                <p>Counter for 500: {counter500}</p>
            </div> */}
        </div>
    );
};

export default Toogle;
