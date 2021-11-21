import './App.css';
import HorizontalScroll from 'react-scroll-horizontal'
import Landing from './components/Landing/Landing.js';
import Welcome from './components/Welcome/Welcome.js';

function App() {
  return (
    <div className="App">
      <HorizontalScroll>
        <Landing/>

        <Welcome/>

        <div className="main bg2">
          <h1> Team </h1>
        </div>

        <div className="main bg3">
          <h1> Sponsors </h1>
        </div>
        
      </HorizontalScroll>
      
    </div>
  );
}

export default App;

// Landing />
// <Welcome />
