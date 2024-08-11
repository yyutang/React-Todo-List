import { useState } from "react"

export default function Form({addItem}){

    const [text, setText] = useState("")

    //every time click add, call add function, and clear the input box
    function onClick(){
        //avoid empty item
        if(text !== ""){
            addItem({id:Date.now(), text: text})
            setText("")
        }
    }

    return (
        // stop hard fresh
        <form onSubmit={(e)=>e.preventDefault()} className="input-group mb-2">
            <input 
            className="form-control"
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button 
            className="btn btn-success"
            onClick={onClick}>Add</button>
        </form>

    )
}