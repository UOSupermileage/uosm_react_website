import './App.css';
import HorizontalScroll from 'react-scroll-horizontal'
import Landing from './components/Landing/Landing.js';
import Welcome from './components/Welcome/Welcome.js';
import Team from './components/Team/Team.js';
import Sponsors from './components/Sponsors/Sponsors.js';
import Contact from './components/Contact/Contact.js';
import Join from './components/Join/Join.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
            <HorizontalScroll>
            <Landing/>
            <Welcome/>
            <Team/>
            <Sponsors/>
            <Contact/>
            <Join/>

            <Router> 
              <Routes>
                <Route path='/welcome' element={<Welcome />} />
                <Route path='/team' element={<Team />} />
              
              </Routes>
            </Router>

        </HorizontalScroll>
      
    </div>
  );
}

export default App;
// Add Horizontal Scrollinng later </HorizontalScroll>
/*

<Routes>
              <Route exact path='/'  element={<Landing/> }/>
              <Route path='/welcome' element={<Welcome/>} />
              <Route path='/team' element={<Team/> } />
              <Route path='/sponsors' element={<Sponsors/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/join' element={<Join/>} />
            </Routes>
*/