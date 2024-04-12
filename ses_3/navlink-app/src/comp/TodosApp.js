import React from 'react'
import {useReducer} from 'react'
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import todosReducer from './todosReducer'

export default function TodosApp(){
    const [todos,dispatch] = useReducer(todosReducer, initialTodos);

    function handleAddTodo(todoText){
        dispatch({
            type:"added",
            id:nextId++,
            todoText:todoText,
        })
    }

    function handleChangeTodo(todo){
        dispatch({
            type:"changed",
            todo:todo,
        })
    }

    function handleDeleteTodo(todoId){
        dispatch({
            type:"deleted",
            id:todoId,
        })
    }

    return(
        <>
            <h1>Todo List</h1>

            <AddTodo onAddTodo={handleAddTodo}/>
            <TodoList
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}/>
        </>
    )
}

let nextId = 3;

const initialTodos = [
    {id:1, todoText:"Get some grocery from the market", done:true},
    {id:2, todoText:"Fill all bottles and put them in fridge", done:false},
    {id:3, todoText:"Clean the house properly", done:true}
]
