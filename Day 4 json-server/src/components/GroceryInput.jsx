import { useState } from "react"

export function GroceryInput({addGrocery}) {
    const [item, setItem] = useState("")    
    return <>
        <h1>Grocery List</h1>
        <input type="text"
            placeholder="Enter grocery name"
            onChange={(e) => { 
                setItem(e.target.value)
            }}            
        />
        
        
        <button
            onClick={() => {
                addGrocery(item);
            }}
        >Add Grocery</button>
    </>
}