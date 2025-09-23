import React, {useState, useEffect} from "react";

function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED"); // while we dont techincaly need useEffect, its a great way to only add one event listener when re-rendering
        
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
            // CLEAN UP
        }
    }, []);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    );
}

export default MyComponent;