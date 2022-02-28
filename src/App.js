import React from 'react';
//  import HorizontalScroll from 'react-scroll-horizontal' use later
import Landing from './components/Landing/Landing.js';
import Welcome from './components/Welcome/Welcome.js';
import Team from './components/Team/Team.js';
import Sponsors from './components/Sponsors/Sponsors.js';
import Contact from './components/Contact/Contact.js';
import Join from './components/Join/Join.js';
import Navbar from './components/Navbar';
import theme from './components/Theme/index.js';
import { ThemeProvider } from '@mui/material/styles';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />

        <ScrollToTop />
        <Landing />
        <Welcome />
        <Team />
        <Sponsors />
        <Contact />
        <Join />
      </div>
    </ThemeProvider>
  );
}

export default App;
