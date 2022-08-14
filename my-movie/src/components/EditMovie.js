import axios from 'axios';
import React, { Component, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



export function EditMovie (props){
    let navigate = useNavigate();

    

    const [name,setName] = useState("");
    const [rating,setRating] = useState("");
    const [overview,setOverview] = useState("");
    const [imageURL,setImageURL] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            
            const id = window.location.pathname.substring(6)
            const response = await axios.get(`http://localhost:3002/movies/${id}`)
            const movie = response.data;
            
            setName(movie.name);
            setImageURL(movie.imageURL);
            setOverview(movie.overview);
            setRating(movie.rating)
            
        }
        
    fetchApi();
      
    }, [])
    
    let onInputChange = (e) => {
        
        const targetName = e.target.name;

        if (targetName === "name") {
            setName(e.target.value)
        }
        if (targetName === "rating") {
            setRating(e.target.value)
        }
        if (targetName === "overview") {
            setOverview(e.target.value)
        }
        if(targetName === "imageURL"){
            setImageURL(e.target.value)
        }

    }

    let handleSubmit  = (e) => {
        e.preventDefault();
        const id = window.location.pathname.substring(6)

        

        const updatedMovie = {
            name,
            imageURL,
            overview,
            rating
        }


        props.onEditMovie(id,updatedMovie);

         navigate('/');
    }

    

    return (
        <div className="container">
        <form className="mt-5" onSubmit={handleSubmit}>
        <input className="form-control mb-3" id="disabledInput" type="text" placeholder="Edit The Form To Update  A Movie.." disabled/>
            <div className="row mb-3">
                <div className="form-group col-md-10 ">
                    <label htmlFor="inputName">Name</label>
                    <input required type="text" 
                            className="form-control" 
                            name="name"
                            value={name}
                            onChange={onInputChange}
                            />
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputRating">Rating</label>
                    <input required
                            type="text" 
                            className="form-control" 
                            name="rating"
                            value={rating}
                            onChange={onInputChange}
                            />
                </div>
            </div>
            <div className="row mb-3">
                <div className="form-group col-md-12">
                    <label htmlFor="inputImage">Image URL</label>
                    <input required 
                            type="text" 
                            className="form-control" 
                            name="imageURL"
                            value={imageURL}
                            onChange={onInputChange}
                            />
                </div>
            </div>
            <div className="row mb-3">
                <div className="form-group col-md-12">
                    <label htmlFor="overviewTextarea">Overview</label>
                    <textarea 
                            className="form-control" 
                            name="overview" rows="5" value={overview}
                            onChange={onInputChange}
                            ></textarea>
                </div>
            </div>
            
            <button type="submit" className="btn btn-danger btn-block w-100">Edit Movie</button>
            
        </form>
       
    </div>
    )
  }


export default EditMovie