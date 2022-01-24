import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
    const {id} = useParams();
    const [loading,setLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(()=>{
       getMovie();
    },[]);

    console.log(movie);
    return (
    <div>   
        {loading ? <h1>Loading...</h1> : (<>
        <h1>Detail of {movie.title}</h1>
        <ul>
            {/* {movie.map((val,index) => {})} */}
        </ul>    
        </>
        )
        }
    </div>
    );
}

export default Detail;