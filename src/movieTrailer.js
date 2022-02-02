import axios from "axios";
const { API_KEY } = require("./config.json")

const movieTrailer = async (movie, isMovie, movieId) => {

	const baseURL = "https://api.themoviedb.org/3";

	const fetchMovieId = (movie) => {

		const endpoint = `${baseURL}/search/${isMovie ? "movie" : "tv"}?api_key=${API_KEY}&query=${movie}`;

		try {

			const res = axios.get(encodeURI(endpoint)).then(res => {

				if (res.data.results.length === 0) return null
				return res.data.results[0].id

			});
			return res;

		}
		catch (error) {

			console.log(error.message);
			return null;
		}


	}

	if (movieId === undefined) {

		movieId = await fetchMovieId(movie)
		console.log(movieId)
	}



	const getTrailer = () => {

		try {
			const endpoint = `${baseURL}/${isMovie ? "movie" : "tv"}/${movieId}/videos?api_key=${API_KEY}`
			const res = axios.get(encodeURI(endpoint)).then((res) => {
				let results = res.data.results;
				results = results.map((result) => {
					return result.key;
				})
				return results[0]
			})
				.catch(error => {
					console.log(error.message);
					return null
				})
			return res;
		}
		catch (error) {
			console.log(error.message)
		}


	}

	return getTrailer
};

export default movieTrailer;
