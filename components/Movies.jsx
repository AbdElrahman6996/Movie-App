import React from 'react'
import { imgPath } from '../links'
import './Movies.css'

const Movie = (props) => {
  console.log(props.movies)
  return (
    <div className='movie'>
      {
        props.movies.map((movie, index) => <div className='movie-nsfo'>
          <img src={imgPath + movie.poster_path} alt="" />
          <div className="text">
            <h5>{movie.title}</h5>
            <p>{movie.overview}</p>
            <span>Rating : {movie.vote_average}</span>
            <span>{movie.release_date}</span>
          </div>
        </div>)
      }
    </div>
  )
}

export default Movie