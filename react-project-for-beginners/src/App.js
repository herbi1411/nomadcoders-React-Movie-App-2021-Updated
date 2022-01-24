import Button from './Button'
import styles from "./App.module.css"
import {useState, useEffect} from "react";



function App() {

  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);

  const getMovies = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    const json = await response.json() //then 사용

    console.log(json.data.movies)
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(()=>{
    // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`) //then 사용
    // .then((response) => response.json()) 
    // .then((json) => {
    //   console.log(json)
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // });
    getMovies();
  },[]);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : (
        <div>
            {movies.map((movie,index) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}/>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genre,index) => <li key={index}>{genre}</li>)}
              </ul>
            </div>))}
        </div>
      )}
    </div>
  );
}

export default App;
