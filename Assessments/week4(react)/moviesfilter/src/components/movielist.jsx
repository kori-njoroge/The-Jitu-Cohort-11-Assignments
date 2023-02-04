import React, { useState } from "react";
import MoviesCard from "./displayMovies";




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
                        return searchSTring.trim().toLowerCase() === ''? item :item.title.toLowerCase().includes(searchSTring)
                    }).map(item =>(
                        <MoviesCard key={item.id} item={item}/>
                    )): ''
                }
            </div>
        </>
    )
}