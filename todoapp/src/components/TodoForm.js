import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const[input,setInput]=useState(props.edit?props.edit.value:'');
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    })
    const handlechange=(e)=>{
        setInput(e.target.value)
    }
    

    const handelsubmite =(e)=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        });
        setInput('')
    }

    return (
          <form onSubmit={handelsubmite} className='todo-form'>
          {props.edit ?(
           <>
           <input
            type="text"
            placeholder=" Update Item"
            value={input}
            name="text"
            onChange={handlechange}
            className='todo-input edit'
            ref={inputRef}
          />
          <button className='todo-button edit'>Update Todo</button>
           </>
          ):(
            <>
            <input
            type="text"
            placeholder=" Add a Todo"
            value={input}
            name="text"
            onChange={handlechange}
            className='todo-input'
            ref={inputRef}
          />
          <button className='todo-button'>Add Todo</button>
            </>
          )}


         </form>
    )
}

export default TodoForm