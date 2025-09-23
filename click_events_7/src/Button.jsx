
function Button(){
    
    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    const handleClick3 = (event) => event.target.textContent = "Fuuuh😫";
    // onClick gives event, we can use that to get event info, we can use that to manipulate the thing we click {target}

    return(
        <>
            <button onClick={() => handleClick2("Bro")}> Click me 😁</button><br />
            <button onClick={(e) => handleClick3(e)}> Click me 😮</button>
        </>// if you add a set of parenteses after a callback, it will invoke it right away, not good for onClick, wrap it in a function to prevent that
        // there is a onDoubleClick if you need double clicking.
    );
}
export default Button