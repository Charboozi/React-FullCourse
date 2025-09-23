/* 
  updater function = A function passed as an argument to setState() usually
                     ex. setYear(year + 1(usually arrow function))
                     Allow for safe updates based on the previous state
                     Used with multiple state updates and asynchronous functions
                     Good practice to use updater functions.
*/

function App() {

  const [count, setCount] = useState(0);

  function increment(){

    /*
      Uses the CURRENT sate to calculate the NEXT state.
      set functions do not trigger an update.
      React batches together state updates for performance reasons.
      NEXT state becomes the CURRENT state after an update
    */
  
    setCount(count + 1);// NO UPDATE FOR COUNT
    setCount(count + 1);
    setCount(count + 1);
    // so this doesn't add 3 to count, only 1
  }

  function decrement(){// UPDATER FUNCITON

    /*
      Takes the PENDING state to calculate NEXT state.
      React puts your updater function in a queue (waiting in line)
      During the next render, it will call them in the same order.
    */

    setCount(c => c - 1); // this uses the previous count to calculate next count, this works
    setCount(c => c - 1);
    setCount(c => c - 1);

    // even if you only use setter once, its still good practice to use updater function
  }
}

export default App
