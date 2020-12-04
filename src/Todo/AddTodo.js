import React, {useState} from 'react'

export default function AddTodo ({ onCreate }) {
    const [addTodo, setAddTodo] = useState('')

   

    function submitHandler (event) {
        event.preventDefault()
        if (addTodo.trim()) {
            onCreate(addTodo)
            setAddTodo('')
        }
    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <input 
                    type="text"
                    value={addTodo}
                    onChange={(e) => setAddTodo(e.target.value)}
                />
                <input type="submit"/>
            </form>
        </div>
    )
}























// export default function AddTodo ( {onCreate} ) {
//     const [addTodo, setaddTodo] = useState('')
//     function submitHandler(e) {
//         e.preventDefault()

//         if (addTodo.trim()) {
//             onCreate(addTodo)
//             setaddTodo('')
//         }
//     }
//     return (
//         <div>
//             <form action="" style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
//                 <input type="text" value={addTodo} onChange={(e) =>  setaddTodo(e.target.value)}/>
//                 <button type='submit'>Add Todo</button>
//             </form>
//         </div>
//     )
// }