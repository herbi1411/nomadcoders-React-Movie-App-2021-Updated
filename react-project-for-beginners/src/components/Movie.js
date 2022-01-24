import React from "react"
import PropTypes from "prop-types"

const Movie = ({medium_cover_image,title,summary,genres}) => {
    return (
    <>
        <img src={medium_cover_image}/>
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
          {genres.map((genre,index) => <li key={index}>{genre}</li>)}
        </ul>
    </>
    )

}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired //Proptypes 배열의 요소 type도 정할 수 있음
}

export default Movie;