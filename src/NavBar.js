import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
    constructor(props)
    {
        super(props)
    }
    render () {
        return (
            <div className="NavBar">
                <h1> Louis Demeslay </h1>
                <div className="Menu">
                    <h1 onClick={()=>window.scrollTo(0, this.props.refs[0].current.offsetTop)}> About me </h1>
                    <h1 onClick={()=>window.scrollTo(0, this.props.refs[1].current.offsetTop)}> Projects </h1>
                    <h1 onClick={()=>window.scrollTo(0, this.props.refs[2].current.offsetTop)}> Skills </h1>
                    <h1 onClick={()=>window.scrollTo(0, this.props.refs[3].current.offsetTop)}> Contact </h1>
                </div>
            </div>
        );
    }
}

export default NavBar;