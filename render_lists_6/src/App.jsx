import List from './List.jsx'

function App() {

  const fruits = [{id: 1, name:"apple", calories: 95}, 
                {id: 2, name:"orange", calories:45}, 
                {id: 3, name:"banana", calories:105}, 
                {id: 4, name:"pineapple", calories:37}];

  const vegetables = [{id: 6, name:"potatoe", calories: 110}, 
                {id: 7, name:"celery", calories:15}, 
                {id: 8, name:"carrot", calories:25}, 
                {id: 9, name:"corn", calories:63}];
  
  return(
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"></List>} 
    </>
  );// its a bit shorter way to write the same thing
}

export default App
