import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

const Navbar = () => {
    return (
    <nav>
                <ScrollLink
                    to="example-destination"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='some-class'
                    activeClass='some-active-class'
                > Welcome </ScrollLink>
    </nav>
    );
};

export default Navbar;

/*
<Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    
                    <NavLink to='/team' activeStyle>
                        Team
                    </NavLink>
                    <NavLink to='/sponsors' activeStyle>
                        Sponsors
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact
                    </NavLink>

                </NavMenu >
    <NavBtn>
        <NavBtnLink to='/join'>Join Us</NavBtnLink>
    </NavBtn>
            </Nav >
*/