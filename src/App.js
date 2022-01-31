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
    </div>
  );
}

export default App;
