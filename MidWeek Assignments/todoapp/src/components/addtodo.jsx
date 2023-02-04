import React, { useState } from "react";

export default function AddItem({settodolist}) {
    const[itemtoAdd, setItemToAdd] = useState([]);
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
        settodolist(prevState => [...prevState,itemtoAdd])
    }


    return (
        <>
            <form action="">
                <input type="text" placeholder='Add Item' className='addItem' onChange={handleOnchange} />
                <button onClick={handleAddItem}>Add Item</button>
            </form>
        </>
    )
}