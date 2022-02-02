import './App.css';
import Banner from './conponents/Banner';
import Nav from './conponents/Nav';
import Row from './conponents/Row';
import requests from './requests/requests';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isMovie={true}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isMovie={true}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isMovie={true}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isMovie={true}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isMovie={true}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isMovie={true}/>
    </div>
  );
}

export default App;
