import React, {useState} from "react"

function MyComponent(){

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model:"Mustang"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value})); // create new object with spread operator, add all properties, and add year
        // with spread operator it will look like this: setCar({year: 2024, make: "Ford", model: "Mustang", year: 2025});
        // notice we use year 2 times, JavaScript will use the later one, it doesn't allow for duplicate keys
    }
    function handleMakeChange(event){

        setCar(c => ({...car, make: event.target.value})); // why name it c? to indicate that its the previous state of car so not actually car
    }
    function handleModelChange(event){
        
        setCar(c => ({...car, model: event.target.value})); 
    }

    return(
        <>
            <div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handleYearChange}/><br />
                <input type="text" value={car.Ford} onChange={handleMakeChange}/><br />
                <input type="text" value={car.model} onChange={handleModelChange}/><br />
            </div>
        </>
    );
}

export default MyComponent