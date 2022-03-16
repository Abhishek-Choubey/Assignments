import { useEffect, useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
export function Grocery(){
    
    const [groceries, setGroceries] = useState([])

    useEffect(()=>{
        getGrocery()
    },[])
    
    const deleteGrocery = (id)=>{
        axios.delete(`http://localhost:8080/grocery/${id}`).then(()=>{
            getGrocery()
        })
    }
    const addGrocery =(item) =>{
        const itemObj = {id : uuidv4(), itemName : item}
        axios.post("http://localhost:8080/grocery", itemObj).then(()=>{
            getGrocery()           
        })
    }


    function getGrocery(){
        axios.get("http://localhost:8080/grocery").then((res)=>{            
        setGroceries([...res.data])
        })
    }
    return <>
    <GroceryInput addGrocery={addGrocery}/>
    {groceries.map((e)=>(  <GroceryList key = {e.id} props = {e}  onSelect = {deleteGrocery}/>))}
    </>
}