import './App.css';
import Row from './conponents/Row';
import requests from './requests/requests';


function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Banner/>

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
