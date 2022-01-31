import axios from "axios";
// axios is fetch with aditional powers and its is inbuild in js
const fetcher=axios.create({
	baseURL:"https://api.themoviedb.org/3"
});
 
export default fetcher;