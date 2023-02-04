import React from 'react'





function List(props) {


    return (
        <div>
            <ul>
                {props.todos? props.todos.map(todo =><li key={todo.id}><input type="checkbox"/>{todo.title}</li>) : ''}
            </ul>
        </div>
    )
}

export default List