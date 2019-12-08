import React from 'react'

//data
import MenuSoeradj from './menudata.js';

//css
import './menu.css'


const Menu = (props) => {
    return (
        <ul className="hovermenu">
            <li>{props.value}</li>
        </ul>
    )
}

export default Menu