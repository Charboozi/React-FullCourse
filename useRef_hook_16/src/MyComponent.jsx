/*
    useState() = Re-renders the component when the state value changes.

    useRef()   = "use Reference" Does not cause re-render when its value changes.
                 When you want a component to "remember" some information,
                 but you don't want that information to trigger new renders.

                 1. Accessing/Interacting with DOM elements
                 2. Handling Focus, Animation, and Transitions
                 3. Managing Timers and Intervals
*/

import React, {useState, useEffect, useRef} from 'react';

function MyComponent(){

    const ref = useRef(0); 
    // returns an object with one property, current

    const inputRef = useRef(null);

    useEffect(() => {
        ref.current++;
        console.log(ref.current);
    });

    function handleClick(){
        setNumber(n => n + 1);
        inputRef.current.focus();
        // focus is a Input property, we can do this because now inputRef.current = Input Object
    
        inputRef.current.style.backgroundColor = "yellow";
    }

    return(
        <>
            <button onClick={handleClick}>  
                Click me!
            </button>

            <input ref={inputRef}/>
        </>
        // ref = special to reference elements with useRef() so now inputRef.current = Input object
    );
}

export default MyComponent;