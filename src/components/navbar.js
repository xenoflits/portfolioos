import React from 'react'

import './navbar.css';

//this component is about a windows style navbar with start button, for this project I
//am not using any tutorials, and trying to figure out on my own how to make stuff that
//I imagine work.

export default class Navbar extends React.Component{
    render () {
        return <div className="navbar">
            <StartButton name="start"/>
        </div>
    }
}


class StartButton extends React.Component {
    render(){
        return <div>
            <button>{this.props.name}</button>
        </div>
    }
} 
