import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest"); // set innitial state ("Guest"), change that state with setName 
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spoongebob"); // we use setter function to trigger re-render
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>SetName</button>
                <br />
                <p>age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>
                <br />
                <p>age: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Toggle Status</button>
            </div>
        </>
    );

}
export default MyComponent