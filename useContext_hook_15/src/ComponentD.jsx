import React, {useContext} from 'react';
import {UserContext} from './ComponentA.jsx'

function ComponentD(){

    const user = useContext(UserContext);
    // this way we dont need to reference {user} every component in chain, thats called prop drilling and its bad

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
    // WE HAVE AVOIDED PROP DRILLING 🎉
}

export default ComponentD