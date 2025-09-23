/*
  props = read-only properties that are shared between components.
          A parent component can send data to a child component.
          <Component key=value />

  propTypes = a mechanism that ensures that the passed value
              is of correct dataType.
              age: PropTypes.number
              * not is node_modules by default. You'll have to install it to use it
*/


import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name="Spoongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student>
    </>
  );
}

export default App
