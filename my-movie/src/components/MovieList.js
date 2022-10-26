import React from 'react'
import {Link} from 'react-router-dom'

const MovieList = (props)  => {
    return (

        
      <div className="row">

         {props.movies.map((movie,i)=> 
         (
            <div className="col-sm-4" key={i}>
            <div className="card mb-4 shadow-lg">
                <img src={movie.imageURL} className='card-img-top' style={{height:400, objectFit:'fill'}} alt='Sample movie' />
                <div className="card-body">
                    <h5 className="card-title">
                        {movie.name}
                    </h5>
                    <p className="card-text"  style={{height:48 , overflow: "auto"}}>{movie.overview}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <button type='button' className='btn btn-md btn-outline-danger' onClick={(e) => {
                          props.deleteMovieProp(movie)
                        }}>Delete</button>
                        <Link to={`edit/${movie.id}`}>
                        <button type='button' className='btn btn-md btn-outline-primary' >Edit</button>
                        </Link>
                        <h2><span className='badge text-bg-secondary'>{movie.rating}</span></h2>
                    </div>
                </div>
            </div>
        </div>
         ))}



        
      </div>
    )
  
}

export default MovieList