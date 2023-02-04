import React from "react";

export default function MoviesCard({item}) {
    return (
        <div key={item.id} className="movies--display">
            <h4>{item.id}.</h4>
            <p>{item.title}</p>
            <img src={item.posterUrl} alt={item.title} />
        </div>
    )
}