import React, { Component } from 'react'
import serialize from 'form-serialize'
import { useNavigate } from 'react-router-dom';




export function AddMovie (props){
    let navigate = useNavigate();

    return (
        <div className="container">
        <form className="mt-5" onSubmit={(e)=> {
            e.preventDefault();
            var newMovie = serialize(e.target, { hash: true });
            props.onAddMovie(newMovie);
            navigate('/');
            }}>
        <input className="form-control mb-3" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled/>
            <div className="row mb-3">
                <div className="form-group col-md-10 ">
                    <label htmlFor="inputName">Name</label>
                    <input required type="text" 
                            className="form-control" 
                            name="name"/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputRating">Rating</label>
                    <input required
                            type="text" 
                            className="form-control" 
                            name="rating"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="form-group col-md-12">
                    <label htmlFor="inputImage">Image URL</label>
                    <input required 
                            type="text" 
                            className="form-control" 
                            name="imageURL"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="form-group col-md-12">
                    <label htmlFor="overviewTextarea">Overview</label>
                    <textarea 
                            className="form-control" 
                            name="overview" rows="5"></textarea>
                </div>
            </div>
            
            <button type="submit" className="btn btn-danger btn-block w-100">Add Movie</button>
            
        </form>
       
    </div>
    )
  }


export default AddMovie