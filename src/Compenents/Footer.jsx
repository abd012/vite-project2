import React,{useContext,useState} from 'react'
import {DataContext} from './DataProvider'

export default function Footer() {

  const [checkAll,setChekAll] = useState(false)
  const [todos,setTodos] = useContext(DataContext)

  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo =>{
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setChekAll(!checkAll)
  }


  const deleteTodo = () =>{
    const newTodos = todos.filter(todo =>{
      return todo.complete === false
      })
      setTodos(newTodos)
      setChekAll(false)
    }


  return (

    <>
    {


        todos.length === 0 ? <h2> Pas de Tache</h2>
       : <div className="row">
                  <label htmlFor="all">
                    <input type="checkbox" name="all" id="all" 
                    onClick={handleCheckAll} checked={checkAll}
                    />
                    ALL Supprimer
                  </label>
                  <p>Vous Avez {todos.filter(todo => todo.complete === false).length} tâches </p>
                  <button className='supp' id="delete" onClick={deleteTodo}>Supprimer</button>


              </div>
      }
    </>
  )
}
