import React from 'react'
import './WelcomePage.css'
import NavBar from "./NavBar.js"
import Content from './Content.js'
import Footer from "./Footer.js"

class WelcomePage extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render () {
        var refs = [React.createRef(), React.createRef(), React.createRef()]
        return (<div className="WelcomePage">
            <NavBar refs={refs}/>
            <Content refs={refs}/>
            <Footer />
        </div>
        );
    }
}

export default WelcomePage;