import React, {useState} from 'react'
import './Content.css'
import Carousel from './Carousel.js'
import SkillImage from "./SkillImage.js"
import python from "./assets/python_logo.png"
import docker from "./assets/docker_logo.png"
import js from "./assets/js_logo.png"
import ruby from "./assets/ruby_logo.png"
import kubernetes from "./assets/kubernetes_logo.png"
import c from "./assets/c_logo.png"
import cpp from "./assets/c++_logo.png"
import react from "./assets/react_logo.png"
import node from "./assets/node_logo.png"
import linux from "./assets/Linux-icon.png"
import ldemesla from "./assets/louis_demeslay.png"


class Content extends React.Component {
    constructor(props)
    {
        super(props)
    }
    render () {
        return (
            <div className="Content">
                <div className="Projects" ref={this.props.refs[1]}>
                    <h1> Projects </h1>
                    <Carousel/>
                </div>
                <div className="Skills" ref={this.props.refs[2]}>
                    <h1> Skills </h1>
                    <div className="MainDashBoard">
                        <div className="SkillDashboard">
                            <SkillImage logo={python} name="Python" grade="70%"/>
                            <SkillImage logo={docker} name="Docker" grade="50%"/>
                            <SkillImage logo={kubernetes} name="Kubernetes" grade="30%"/>
                            <SkillImage logo={ruby} name="Ruby / Rails" grade="30%"/>
                            <SkillImage logo={js} name="Js" grade="30%"/>
                            <SkillImage logo={node} name="NodeJs" grade="30%"/>
                            <SkillImage logo={c} name="C" grade="90%"/>
                            <SkillImage logo={cpp} name="C++" grade="90%"/>
                            <SkillImage logo={react} name="ReactJs" grade="30%"/>
                            <SkillImage logo={linux} name="Linux" grade="60%"/>
                        </div>
                    </div>
                </div>
                <div className="Section" ref={this.props.refs[0]}>
                    <div className="Page">
                        <div className="Text">
                            <h1> About me </h1>
                            <div className="TextWrapper">
                                <div className="ImageWrapper">
                                    <img className="ProfileImage" src={ldemesla}></img>
                                </div>
                                <h3>Hello, I'm Louis, I'm a software engineer student. After three years at the University of Toulouse in Economics and couple more years travelling arround: Australia (where I have learned English), Senegal, Mexico... I have decided to join the 42 school in Paris, and this website aims to show you some of my meaningful projects and my skills in general.
                                I am currently looking for an internship / part-time / full-time so if are interested by my profil you are welcome to contact me on Linkedin or by mail.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;