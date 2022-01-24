import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Movie = ({id,coverImg,title,summary,genres}) => {
    return (
    <div>
        <img src={coverImg} />
        {/* <h2>{title}</h2> */}
        <h2>
            <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link> {/* 페이지 새로고침X */}
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((genre,index) => <li key={index}>{genre}</li>)}
        </ul>
    </div>
    )

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired //Proptypes 배열의 요소 type도 정할 수 있음
}

export default Movie;