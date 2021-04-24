import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos,setTodos]= useState([])
    const addTodo = (todo)=>{
        if(!todo.text || /^\s*$/.test(todo.text))
        {
            return
        }
        const newTodo=[todo,...todos]
        setTodos(newTodo)
    };
    const updateTodo=(todoId,newvalue)=>{
        if(!newvalue.text || /^\s*$/.test(newvalue.text))
        {
            return
        }
        setTodos(prev=>prev.map(item=>(item.id===todoId?newvalue:item)))
    }
    const removeTodo=id=>{
        const removeArr=[...todos].filter(todo=>todo.id!==id)
        setTodos(removeArr)
    }
    const completeTodo=id=>{
        let updateTodos=todos.map(todo => {
            if(todo.id===id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        })
        setTodos(updateTodos);
    }
    
    return (
        <div>
        <h1>What's The Plan For Today ?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            
        </div>
    )
}

export default TodoList