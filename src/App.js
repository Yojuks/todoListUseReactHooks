import React from 'react'
import Context from './context'
import AddTodo from './Todo/AddTodo'
import Todolist from './Todo/Todolist'
import Todoitem from './Todo/Todoitem'

export default function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Купити хліб', active: false},
    {id: 2, completed: false, title: 'Купити масло', active: false},
    {id: 3, completed: false, title: 'Купити молоко', active: false}
  ])

  function toggleSpan(id) {
    setTodos(
     todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed 
      } 
      console.log(item);
      return item
     })
    )
  }

  function deleteItem (id) {
    setTodos(
      todos.filter(item => item.id !== id)
    )
  }

  function onCreate (title) {
    setTodos(
      todos.concat(
        {
          id: Date.now(),
          completed: false,
          title
        }
      )
    )
  }

  function update (id) {
    setTodos(
     todos.map((item) => {
       if (item.id === id) {
         item.active = !item.active 
       }
       return item
     })
    )
  }

 function onUpdateEnd (e, id, value) {
   console.log(value);
     if (e === "Enter") {
       setTodos(
         todos.map((item) => {
           if (item.id === id) {
             item.active = !item.active
             item.title = value
           }
          return item
         })
       )
    }
 }

 function onUpdateBlur (e, id, value) {
      setTodos(
        todos.map((item) => {
          if (item.id === id) {
            item.active = !item.active
            item.title = value
          }
          console.log(item);
         return item
        })
      )
}

  return (
    <div className='wrapper'>
      <h1 style={{textAlign: 'center'}}>Todo List</h1>
      <AddTodo onCreate={onCreate} addTodo={onCreate} />
      { todos.length ? <Todolist 
                          todo={todos}
                          onToggle={toggleSpan} 
                          deleteItem={deleteItem} 
                          update={update}
                          onUpdateEnd={onUpdateEnd}
                          onUpdateBlur={onUpdateBlur}
                        /> 
                      : 
                        <p>'No todos'</p> }
    </div>
  )
  
}




// function App() {

//   const [todos, setTodos] = React.useState([
//     {id: 1, completed: false, title: 'Кутипи хліб'},
//     {id: 2, completed: false, title: 'Кутипи масло'},
//     {id: 3, completed: false, title: 'Кутипи гречку'}
//   ])

//   function toggleTodo (id) {
//     setTodos(
//       todos.map((todoItem) => {
//         if (todoItem.id === id) {
//           todoItem.completed = !todoItem.completed
//         }
//         return todoItem
//       })
//     )
//   }

//   function removeTodo(id) {
//     setTodos(todos.filter((item) => item.id !== id))
//     // console.log(todos.length === 0);
//     // if (todos.length === 0) return <span>'немає елементів'</span> 
//   }

//   function addTitle (title) {
//     setTodos (
//       todos.concat(
//         {
//           id: Date.now(), completed: false, title
//         }
//       )
      
//     )
//   }

//   return (
//     <Context.Provider value={{removeTodo}}>
//       <div className='wrapper'>

//         <h1>React Tutorial</h1>
//         <AddTodo onCreate={addTitle}/>
//         {todos.length ? <Todolist nameOptionTodolist={todos} onToggle={toggleTodo}/> : <p>'No todos'</p>}
        
//       </div>
//     </Context.Provider>
//   ) 
// }

// export default App;
