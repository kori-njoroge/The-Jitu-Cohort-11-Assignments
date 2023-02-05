import React from "react";

export default function Completed({checkbox}) {
    console.log("checkcheckcheck",checkbox)
    return (
        <div className="completed">
            <h3>Completed Tasks</h3>
            <div>
            <ul>
                {checkbox ? checkbox.map(todo => <li key={todo.id}>{todo.title}</li>) : ''}
            </ul>
        </div>
        </div>
    )
}