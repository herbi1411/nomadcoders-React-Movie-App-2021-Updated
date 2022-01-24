import { useEffect, useState } from "react"
import Movie from "../components/Movie";

const Home = () => {
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
              {movies.map((movie,index) => <div key={movie.id}>
                <Movie 
                coverImg = {movie.medium_cover_image}
                title = {movie.title}
                summary = {movie.summary}
                genres = {movie.genres}
                />
              </div>
              )}
          </div>
        )}
      </div>
    );

}

export default Home;