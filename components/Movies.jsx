import React from 'react'
import { imgPath } from '../links'
import './Movies.css'
const Movie = (props) => {
  console.log(props.movies)
  return (
    <div className='movie'>
      <div className="search-container">
        <input type="text" placeholder='Search ..' />
        <input type="text" placeholder='Get Movie By Word ..' />
      </div>
      <div className="bottom">
        {
          props.movies.map((movie, index) => <div className='movie-nsfo'>
            <img className='imgs' src={imgPath + movie.poster_path} alt="" />
            <div className="text">
              <h5>{movie.title}</h5>
              <p>{movie.overview}</p>
              <span>Rating : {movie.vote_average}</span>
              <span>{movie.release_date}</span>
            </div>
          </div>)
        }
      </div>
      <div className="contact-us">
        <h2>Contac Us</h2>
        <div className="inputs">
          <div className="container">
            <input type="text" placeholder='Enter your name' />
            <input type="text" placeholder='Enter Email' />
          </div>
          <div className="container">
            <input type="text" placeholder='Enter Phone' />
            <input type="text" placeholder='Enter Age' />
          </div>
          <div className="container">
            <input type="text" placeholder='Enter Password' />
            <input type="text" placeholder='Re Enter Password' />
          </div>
        </div>
        <a href="/">Submit</a>
      </div>
    </div>
  )
}

export default Movie