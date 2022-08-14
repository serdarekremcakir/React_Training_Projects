import React, { Component } from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

export class SeachBar extends Component {
    

    handleFormSubmit = (e) => {
        e.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="row mb-5">
                    <div className="col-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Search a movie'
                            onChange={this.props.searchMovieProp}
                        />
                        
                    </div>
                    <div className="col-2" style={{float:"right"}}>
                        <Link to="add">
                        <button type="button" className='btn btn-md btn-danger' style={{float:'right'}}>Add Movie</button>
                        </Link>

                    </div>
                </div>
                
            </form>
        )
    }
}

export default SeachBar