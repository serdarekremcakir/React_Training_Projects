import React, { Component, useState, useEffect } from 'react'
import SearchBar from './SeachBar'
import MovieList from './MovieList'
import axios from 'axios'
import AddMovie from './AddMovie'
import { Routes, Route } from "react-router-dom";
import EditMovie from './EditMovie'
import moviesData from '../api/movies.json';


const Deploy = () => {

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const getMovies = () => {
        setMovies(moviesData.movies)
    }

    useEffect(() => {
        getMovies();
        console.log("denemeuid",movies.length);
    }, [])


    const deleteMovie = (movie) => {
        // const newMovieList = movies.filter(m => m.id !== movie.id);
        // setMovies(newMovieList);
        setMovies(state => state.filter(m => m.id !== movie.id))
    }

    


    const addMovie = (movie) => {
        console.log("add",movie);
        console.log("id",movies.length+1);
        console.log("test",{...movie,id:movies.length+1});
        
        setMovies([...movies, {...movie,id:movies.length+1}])
    }

    const editMovie = (id, movie) => {
        const newMovieList = movies.filter(x => x.id !== Number(id));
        setMovies([...newMovieList,movie])
    }

    const searchMovie = (e) => {
        setSearchQuery((e.target.value).toLowerCase())
    } 

    let filteredMovies = movies.filter((movie) => movie.name.toLowerCase().substring(0,searchQuery.length).includes(searchQuery))

    


    return (
        <>
            <Routes>
                <Route path="/" element={

                    <div className="container py-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <SearchBar
                                searchMovieProp={searchMovie}
                                />
                            </div>
                        </div>
                        <MovieList
                            movies={filteredMovies}
                            deleteMovieProp={deleteMovie}
                        />

                    </div>}></Route>
                <Route path="add" element={
                    <AddMovie
                        onAddMovie={addMovie}


                    />} />

                <Route path="edit/:id" element={
                    <EditMovie
                        movies={movies}
                        onEditMovie={editMovie}
                    />
                }>

                </Route>


            </Routes>
        </>
    )
}

export default Deploy
