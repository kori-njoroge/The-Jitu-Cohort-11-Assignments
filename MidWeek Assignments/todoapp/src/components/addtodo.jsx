import React, { useState } from "react";

export default function AddItem({settodolist}) {
    const[itemtoAdd, setItemToAdd] = useState([
        {
            id:"",
            title:"",
            date_due:"",
            completed: false
        }
    ]);
    const date = new Date;
    console.log(date.getMilliseconds())

    function handleOnchange(event){
        event.preventDefault();
        console.log(itemtoAdd)
        let titlele = event.target.value
        setItemToAdd({
            id:date.getMilliseconds(),
            title:titlele,
            date_due:date.getDate(),
            completed: false
        });
    }

    function handleAddItem(e){
        e.preventDefault();
        {itemtoAdd.title.trim() &&
        settodolist(prevState => [...prevState,itemtoAdd])};
        setItemToAdd({
            id:"",
            title:"",
            date_due:"",
            completed: false
        })
    }


    return (
        <>
            <form action="">
                <input type="text" placeholder='Add Item' className='addItem' name="title" value={itemtoAdd.title} onChange={handleOnchange} />
                <button onClick={handleAddItem}>Add Item</button>
            </form>
        </>
    )
}