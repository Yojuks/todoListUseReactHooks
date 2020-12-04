import React, {useContext, useState} from 'react';
import PropTypes, { func } from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

export default function Todoitem ( {todo, index, changeSpan, deleteItem, update, onUpdateEnd, onUpdateBlur} ) {
  const [value, setValue] = useState (
    todo.title
  ) 


  const classes = []
  if (todo.completed) {
    classes.push('done')
  }

  return (
    <div className='list'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => changeSpan(todo.id)}
      />
      <div>
        { (!todo.active) ? 
          <span className={classes.join(' ')} onClick={() => update(todo.id)}> { todo.title }</span> 
                        : <input 
                            type="text"
                            value={ value }
                            onChange={ (e) => setValue(  e.target.value ) }
                            onKeyPress={ (e) => onUpdateEnd(e.key, todo.id, value) }
                            onBlur={ (e) => onUpdateBlur(e.key, todo.id, value) }
                          /> }
      </div>
     
      <button onClick={() => deleteItem(todo.id)}> &times; </button>
    </div>
  )
}













// function Todoitem ({ itemTodo, indexOfMapItem, onChange }) {
//   const { removeTodo } = useContext(Context)
//   const classes = []
//   if (itemTodo.completed) {
//     classes.push('done')
//   }
  
//    return (
//     <div>
//       <li style={styles.li}>
//         <span className={classes.join(' ')}>
//           <input 
//             type="checkbox" 
//             style={styles.input} 
//             onChange={() => {onChange(itemTodo.id)}}
//             checked={itemTodo.completed}
//           />
//           <strong> {indexOfMapItem + 1 + ' '}</strong>
//           {itemTodo.title}
//         </span>
//         <button className='rm' onClick={() => removeTodo(itemTodo.id)}>&times;</button>
//       </li>
//     </div>
//    )
// }

// Todoitem.propTypes = {
//   itemTodo: PropTypes.object.isRequired,
//   indexOfMapItem: PropTypes.number,
//   onChange: PropTypes.func.isRequired
// }
   
// export default Todoitem;

