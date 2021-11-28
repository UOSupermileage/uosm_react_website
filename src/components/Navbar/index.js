import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
//import Link from '@mui/material/Link';
import Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

const Navbar = () => {
    return (
    <Nav >
        <NavMenu>
            <Link href='/' > 
                Home
            </Link >
            <Link href='/welcome' >
                Welcome
            </Link >
            <Link href='/team' >
                Team
            </Link >
            <Link href='/sponsors' >
                Sponsors
            </Link >
            <Link href='/contact' >
                Contact
            </Link >
        </NavMenu>
    </Nav>
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


            <ScrollLink
                to="example-destination"
                spy={true}
                smooth={true}
                duration={500}
                className='some-class'
                activeClass='some-active-class'
            > Welcome </ScrollLink>
*/