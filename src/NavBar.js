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
                    <h1 onClick={()=>this.scrollTo(this.props.refs[1])}> Projects </h1>
                    <h1 onClick={()=>this.scrollTo(this.props.refs[2])}> Skills </h1>
                    <h1 onClick={()=>this.scrollTo(this.props.refs[0])}> About me </h1>  
                </div>
            </div>
        );
    }
    scrollTo(ref)
    {
        window.scrollTo(0, ref.current.offsetTop - (window.innerHeight * 0.1))
    }
}

export default NavBar;