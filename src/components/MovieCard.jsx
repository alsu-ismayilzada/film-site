import React from 'react'
import "../MovieCard.css"
const MovieCard = (props) => {
  return (
    <div className='movieCard'>
        <div className='left'>
            <img src={props.img} alt="movie" />
        </div>
        <div className='right'>
            <p>{props.name}</p>
            <button>Add to List</button>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default MovieCard