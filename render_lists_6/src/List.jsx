
function List({items, category}){

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    //fruits.sort((a, b) => a.calories - b.calories); // NUMERIC ORDER
    
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // we need key when rendering lists to track each item in the list when things change (like iitems being added, removed or reordered)
    const listItems = items.map(item => <li key={item.id}>
                                {item.name}: &nbsp;
                                <b>{item.calories}</b></li>);

    // why use {&nbsp;}? becasue normaly HTML collapses many spaces into one space. {&nbsp;} forces browser to keep the spaces

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}
export default List