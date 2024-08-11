import { useState } from "react";
import Form from "./Form";
import List from "./List";


export default function App () {

    const [items, setItems] = useState([])

    //add item into list
    function addItem(item) {
        return (setItems([...items, item]))
    }
    //delete item from list
    function deleteItem(item){
        return(
            setItems(items.filter(e=> e.id !== item.id))
        )
    }

    //clear all items in list
    function clearItem(){
        return (
            setItems([])
        )
    }
    //edit item text
    function editItem(item){
        const inputText = window.prompt("Update current item: ",item.text)
        if(inputText){
            setItems(items.map((current) => (current.id === item.id)? {...current, text:inputText}:current
            ))
        }
    }

    return (
        <div className="wrapper bg-dark text-white">
            {/* a title of application */}
            <div className="container pt-3">
                <h1 className="text-center">React Todo List</h1>
            </div>

            <div className="container pt-1">
                
                {/* Form */}
                <Form addItem={addItem}/>
                {/* List */}
                <List items={items} deleteItem={deleteItem} clearItem={clearItem} editItem={editItem}/>
            </div>
            
        </div>
    ) 
}