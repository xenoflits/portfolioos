//react
import React from 'react'

//data
import navdata from './NavBarData';

//css
import './navbar.css';

//components 
import Menu from './menu'

const Navbar = () => {
    


    return (
        <nav>
            <ul>
                <li><a href="#" className="navitems" ><Menu value="Soeradj"/></a></li>
                <li><a href="#" className="navitems">Tools</a></li>
                <li><a href="#" className="navitems">ReactJs projects</a></li>
                <li><a href="#" className="navitems">Photoshop projects</a></li>
                <li><a href="#" className="navitems">Contact</a></li>
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