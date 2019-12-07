//react
import React from 'react'

//data
import navdata from './NavBarData';

//css
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Soeradj Mahabiersing</li>
                <li>Tools</li>
                <li>ReactJs projects</li>
                <li>Photoshop projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};


const NavStart = () => {
    return (
        <div>
        {navdata.map(item => <div>{item.value}</div>)}
        </div>
    )
};







export default Navbar