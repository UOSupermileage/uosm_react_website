import React from 'react';
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <ul
      style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Button>
        {' '}
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          Home
        </Link>
      </Button>

      <Button>
        <Link to="welcome" spy={true} smooth={true}>
          Welcome
        </Link>{' '}
      </Button>

      <Button>
        {' '}
        <Link to="team" spy={true} smooth={true}>
          Team
        </Link>
      </Button>

      <Button>
        {' '}
        <Link to="sponsors" spy={true} smooth={true}>
          Sponsors
        </Link>
      </Button>
      <Button>
        {' '}
        <Link to="contact" spy={true} smooth={true}>
          Contact
        </Link>
      </Button>
    </ul>
  )
}

export default Navbar
