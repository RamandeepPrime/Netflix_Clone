// import getTrailer from "movie-trailer";
// const movieTrailer= require("movie-trailer")
// const movieTrailer=require("./movieTrailer.mjs")
// import config from "./config.js"
import movieTrailer from "./movieTrailer.js"

// movieTrailer("All-of-the-dead").then(url=>console.log(url))
// .catch(error=>console.log(error));
// const hell=async()=>{
// 	const help=await movieTrailer("All of Us Are Dead")
// 	return help;
// }
// const hell=async()=>{
// 	const help=await movieTrailer("All of Us Are Dead")
// 	return help

// }
// // console.log(hell())
// // movieTrailer("All of Us Are Dead",{tmdbId:"99966"})
// console.log(hell(),"jhkhk");
// hell().then((result)=>{console.log(result,"jkksdnf")})

// const hello=movieTrailer("All of Us Are Dead").then(res=>{
// 	const fuck=res
// 	console.log(fuck)
// })

const hell=await movieTrailer("Spider-Man Far from Home",true)


hell().then((res)=>console.log(res))

// console.log(movieTrailer("All of Us Are Dead"),"hhj")

// media_type