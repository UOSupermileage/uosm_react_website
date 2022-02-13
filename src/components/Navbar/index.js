import React from 'react';
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Use this to make navbar bold
const navTheme = createTheme({
  palette: {
    primary: {
      main: '#ec7001',
    },
    secondary: {
      main: '#231f20',
    },
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={navTheme}>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button sx={{ fontWeight: '750' }}>
          <Link activeClass='active' to='home' spy={true} smooth={true}>
            Home
          </Link>
        </Button>

        <Button sx={{ fontWeight: '750' }}>
          <Link to='welcome' spy={true} smooth={true}>
            Welcome
          </Link>
        </Button>

        <Button sx={{ fontWeight: '750' }}>
          <Link to='team' spy={true} smooth={true}>
            Team
          </Link>
        </Button>

        <Button sx={{ fontWeight: '750' }}>
          <Link to='sponsors' spy={true} smooth={true}>
            Sponsors
          </Link>
        </Button>
        <Button sx={{ fontWeight: '750' }}>
          <Link to='contact' spy={true} smooth={true}>
            Contact
          </Link>
        </Button>
      </ul>
    </ThemeProvider>
  );
};

export default Navbar;
