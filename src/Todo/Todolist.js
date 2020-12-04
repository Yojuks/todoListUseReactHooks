import React from 'react';
import PropTypes from 'prop-types'
import Todoitem from './Todoitem'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }
}

export default function Todolist (props) {
  return (
    <div>
      { props.todo.map((element, index) => {
        return <Todoitem 
                  todo={element} 
                  index={index} 
                  changeSpan={props.onToggle} 
                  key={element.id}
                  deleteItem={props.deleteItem}
                  update={props.update}
                  onUpdateEnd={props.onUpdateEnd}
                  onUpdateBlur={props.onUpdateBlur}
                />
      }) }
    </div>
  )
}


















// function Todolist(props) {

//     return (
//       <ul style={styles.ul}>
//         {props.nameOptionTodolist.map((item, index) => {
//           return <Todoitem 
//                     itemTodo={item} 
//                     key={item.id} 
//                     indexOfMapItem={index}
//                     onChange={props.onToggle}
//                   />
//          })
//         }
//       </ul>
//     )
// }

// Todolist.propTypes = {
//   nameOptionTodolist: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onToggle: PropTypes.func.isRequired
// }

// export default Todolist;