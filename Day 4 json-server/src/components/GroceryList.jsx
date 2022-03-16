export function GroceryList({props,onSelect}) {
    return <div>
        <span>{props.itemName}</span>
        <button onClick={()=> onSelect(props.id)}>X</button>
        </div>
}