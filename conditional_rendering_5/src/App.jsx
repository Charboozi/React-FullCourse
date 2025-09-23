/*
  conditional rendering = allows you to control what gets rendered
                          in your application based on certain conditions
                          (show, hide, or change component)
*/

import UserGreeting from "./UserGreeting.jsx";

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Charboozi"></UserGreeting>
    </>
  );
}

export default App
