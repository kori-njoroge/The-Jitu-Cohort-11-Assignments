import React, { useState } from "react";




export default function MoviesList({movies}){
    const[searchSTring,setSearchSTring] = useState("");
    
    function handleInput(event){
        event.preventDefault();
        setSearchSTring(event.target.value);
    }



    return(
        <>
            <form action="">
                <input type="text" className="string"  onChange={handleInput} placeholder="Search Movies Here"/>
            </form>
            <div className="moviesList">
                {movies? 
                    movies.filter(item =>{
                        return searchSTring.toLowerCase() === ''? item :item.title.toLowerCase().includes(searchSTring)
                    }).map(item =>(
                        <div key={item.id} className="movies--display">
                            <h4>{item.id}.</h4>
                            <p>{item.title}</p>
                            <img src={item.posterUrl} alt={item.title}/>
                        </div>
                    )): ''
                }
            </div>
        </>
    )
}