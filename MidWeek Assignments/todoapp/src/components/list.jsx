import React, { useState } from 'react'





function List({ todos, setCheckbox,setToDo }) {
    const[checked,setChecked] = useState([]);

    function handleOnchange(item){
        setChecked([{
            ischecked: true,
            title:item.title,
            id: item.id
        }])
        handleIsChecked();
        setToDo(prevState =>{
            return(
                // [...prevState,(todos.id === item.id? todos.ischecked =true: '')]
                [...prevState,...[(todos.map(one => (one.id ===item.id? {"id":one.id,"title":one.title,"ischecked":one.ischecked =true}: one.id)))]]
        )})
        console.log(todos);
    }

    function handleIsChecked() {
        setCheckbox(prevState => {
            return (
                [...prevState,...checked]
            )
        });
    }


    return (
        <div>
            <ul>
                {todos ? todos.map(todo => (
                    (todo.ischecked ? "" && todo === "" :
                    <li key={todo.id}><input key={todo.id} type="checkbox" onChange= {()=>{handleOnchange(todo)}} />{todo.title}</li>)
                )
                ) : ''}
            </ul>
        </div>
    )
}

export default List