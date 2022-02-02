import React, { useState, useEffect } from 'react';
import fetcher from '../requests/fetcher';
import YouTube from "react-youtube";
import "./Row.css";
// import movieTrailer from 'movie-trailer';
// const movieTrailer = require("movie-trailer")
import movieTrailer from "../movieTrailer.js"

const Row = ({ title, fetchUrl, isLarge,isMovie }) => {

	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	const baseUrl = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {

		const fetchData = async () => {
			const request = await fetcher.get(fetchUrl)
			// console.log(request);
			setMovies(request.data.results);
		}

		fetchData();
	}, [fetchUrl]);


	const handleClick = async (movie) => {
		console.log(movie)
		if (trailerUrl) {
			setTrailerUrl("");
		}
		else {

			isMovie=(movie.media_type==="movie"|| isMovie)?true:false
			const movieName=isMovie?movie.title:movie.name

			const trailerUrl = await movieTrailer(movieName, isMovie)
			trailerUrl().then((res) => {
				setTrailerUrl(res)
				console.log(res)
			})

		}
	}

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1
		}

	};
	console.log(movies)

	return (
		<div className='row'>
			<h1>{title}</h1>
			<div className="row__posters">
				{movies.map(movie => (
					<img
						key={movie.id}
						className={`row__poster ${isLarge && "row__posterLarge"}`}
						src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
						alt={movies.name}
						onClick={() => handleClick(movie)}
					/>
				))
				}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div >
	)
};

export default Row;

