import React,{useState, useContext} from 'react'
import { DataContext } from './DataProvider'



export default function Forminput() {
    const [todos,setTodos] = useContext(DataContext);
    const [todoName,setTodoName] = useState('');

    const addTodo = e =>{
      e.preventDefault();
      setTodos([...todos,{name:todoName,complete:false}])
      setTodoName('');
    }


  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <div className='todo'>
              <input type="text" name="todos" id="todos" 
              required placeholder="ajouter todos ?"
              value={todoName}
              onChange={e => setTodoName(e.target.value.toLowerCase())}
              />
              <button type="submit" className='btn'>Ajouter</button>
              </div>
          </form>

  )
}
