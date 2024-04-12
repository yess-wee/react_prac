import React from 'react'
import {useState} from 'react'

export default function AddTodo({onAddTodo}){
    const [todoText,setTodotext] = useState("")

    return(
        <>
            <input
                placeholder='Add text here'
                value={todoText}
                onChange={(e)=>setTodotext(e.target.value)}/>

            {" "}

            <button 
                disabled={todoText.length === 0}
                onClick={()=>{
                    if(todoText.length > 0){
                        setTodotext("")
                        onAddTodo(todoText)
                    }
                }}
                >
                    Add
                </button>
        </>
    )
}