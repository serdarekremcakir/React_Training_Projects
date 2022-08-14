import React, { Component } from 'react'
import SearchBar from './SeachBar'
import MovieList from './MovieList'
import axios from 'axios'
import AddMovie from './AddMovie'
import { Routes, Route } from "react-router-dom";
import EditMovie from './EditMovie'

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            searchQuery: "",
        }
    }

    //JSON SERVER START
    //npx json-server --watch src/api/movies.json --port 3002


    //FETCH
    // async componentDidMount(){
    //     // const baseURL = "http://localhost:3002/movies";
    //     // const response = await fetch(baseURL);
    //     // console.log(response);
    //     // const data = await response.json();
    //     // console.log(data);

    //     // const data = await(await fetch("http://localhost:3002/movies")).json();

    //     // this.setState({
    //     //     movies: data,
    //     // })

    //     await fetch("http://localhost:3002/movies").then(response => response.json()).then(data => this.setState({
    //         movies:data,
    //     }));
    // }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = async () => {
        await axios.get("http://localhost:3002/movies").then(movies => this.setState({ movies: movies.data }))
    }

    deleteMovie = async (movie) => {
        //FETCH DELETE
        const baseURL = `http://localhost:3002/movies/${movie.id}`;
        // await fetch(baseURL,{
        //     method:"DELETE"
        // })

        //AXIOS DELETE
        await axios.delete(baseURL);

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    addMovie = async (movie) => {
        console.log(movie);
        await axios.post('http://localhost:3002/movies/', movie
        )

        this.setState({
            movies: this.state.movies.concat([movie])
        })

        this.getMovies();
    }

    editMovie = async (id, movie) => {


        await axios.put(`http://localhost:3002/movies/${id}`, movie)


        this.getMovies();

    }

    searchMovie = (e) => {
        this.setState({
            searchQuery: e.target.value.toLowerCase(),
        })
    }

    render() {

        let filteredMovies = this.state.movies.filter((movie) => movie.name.toLowerCase().indexOf(this.state.searchQuery) !== -1).sort((a, b) => {
            return b.id - a.id;
        })

        return (


            <React.StrictMode>
                <Routes>
                    <Route path="/" element={

                        <div className="container py-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SearchBar
                                        searchMovieProp={this.searchMovie}
                                    />
                                </div>
                            </div>
                            <MovieList
                                movies={filteredMovies}
                                deleteMovieProp={this.deleteMovie}
                            />

                        </div>}></Route>
                    <Route path="add" element={
                        <AddMovie
                            onAddMovie={this.addMovie}


                        />} />

                    <Route path="edit/:id" element={
                        <EditMovie
                            onEditMovie={this.editMovie}
                        />
                    }>

                    </Route>


                </Routes>
            </React.StrictMode>

        )
    }
}

export default App