import React from 'react';
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const navTheme = createTheme({
  palette: {
    primary: {
      main: '#ec7001'
    },
    secondary: {
      main: '#231f20'
    }
  }
});

const buttonStyle = {
  fontWeight: '750',
  textShadow: '2px 2px 2px #000000',
  fontSize: '18px'
};

const Navbar = () => {
  return (
    <ThemeProvider theme={navTheme}>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <Button sx={buttonStyle}>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Home
          </Link>
        </Button>

        <Button sx={buttonStyle}>
          <Link to="welcome" spy={true} smooth={true}>
            Welcome
          </Link>
        </Button>

        <Button sx={buttonStyle}>
          <Link to="team" spy={true} smooth={true}>
            Team
          </Link>
        </Button>

        <Button sx={buttonStyle}>
          <Link to="sponsors" spy={true} smooth={true}>
            Sponsors
          </Link>
        </Button>
        <Button sx={buttonStyle}>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </Button>
      </ul>
    </ThemeProvider>
  );
};

export default Navbar;
