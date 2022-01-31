import React, { useState, useEffect } from 'react';
import fetcher from '../requests/fetcher';
import "./Row.css";

const Row = ({ title, fetchUrl,isLarge }) => {

	const [movies, setMovies] = useState([]);
	const baseUrl="https://image.tmdb.org/t/p/original/";

	useEffect(() => {

		const fetchData = async () => {
			const request = await fetcher.get(fetchUrl)
			// console.log(request);
			setMovies(request.data.results);
		}

		fetchData();
	}, [fetchUrl]);

	console.log(movies)
	return (
		<div className='row'>
			<h1>{title}</h1>
			<div className="row__posters">
				{movies.map(movie => (
					<img key= {movie.id} className={`row__poster ${isLarge && "row__posterLarge"}` } src={`${baseUrl}${isLarge?movie.poster_path:movie.backdrop_path}`} alt={movies.name}></img>
				))
				}
			</div>
		</div >
	)
};

export default Row;

