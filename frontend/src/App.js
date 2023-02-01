//import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import HeaderImage from './components/HeaderImage';
import ListEpisodes from './components/ListEpisodes'
function App() {
  return (
    <div className="App">
        <header id="main-header">LOREM IPSUM</header>

        <div id='content'>
          <HeaderImage/>
          <ListEpisodes/>
        </div>
        <div 
          id='footer'>
          <p>LOREM IPSUM &#169;2021</p>
        </div>
    </div>
  );
}

export default App;
