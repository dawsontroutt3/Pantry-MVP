import { useState } from "react";

function App() {
    const [pantryItems, setPantryItems] = useState(["Rice", "Eggs", "Black Beans"]);
    const [newItem, setNewItem] = useState ("");

    function handleAdd() {
        if (newItem.trim() === "") return;
        setPantryItems ([...pantryItems, newItem.trim()]);
        setNewItem("")
    }

    function handleRemove(itemToRemove) {
        setPantryItems(pantryItems.filter((item) => item !== itemToRemove));
    }

    return (
        <div>
            <h1>Pantry</h1>
            <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add an item"
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {pantryItems.map((item) => (
                    <li key={item}>
                        {item}
                        <button onClick={() => handleRemove(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;