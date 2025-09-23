import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {
  return (
    <> 
      <Header></Header>
      <Food></Food>
      <Food></Food>
      <Footer></Footer>
    </>

  ); 
}

// <Header></Header> = <Header/> shorthand writing the same thing
//<> = segments to have only one element (remember can only return one element)

export default App
