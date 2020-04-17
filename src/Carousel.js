import React from 'react';
import cube from "./assets/cube_screen.png"
import nn from "./assets/nn.png"
import minishell from "./assets/minishell.png"
import wbr from "./assets/webserver.png"
import "./Carousel.css"

class Carousel extends React.Component
{
    render()
    {
        var cube3d = "Cube 3d is a 90's style game using the ray casting technique, the project was build using the minilibX, a graphical minimalistic library from 42 school. Ray-casting is a technique that transform a limited form of data (a very simplified map or floor plan) into a 3D projection by tracing rays from the view point into the viewing volume. From a text file filled with number (0 for empty, 1 for wall, 2 for enemies), the program is going to generate the 3D map corresponding. For every step you take in the game, the ray-casting algorithm will recompute all the calculations to re render the correct graphics."
        var ml = "Multilayer-perceptron is a neural network, implemented without using machine learning libraries like Tensorflow, Keras or PyTorch. This convolutional neural network (or CNN) aim to predict if a breast cancer is benign or malignant. The dataset used was was elaborated by the University of Wisconsin in 1995, it give us for a large number of patients their breast cancer diagnosis and a list of 30 features describing the characteristics of a cell nucleus of breast mass extracted with fine-needle aspiration "
        var mn = "Minishell is a shell (command terminal) implementation with build-in methods like echo, cd, pwd, export, unset, env, exit. The shell support the pipes, the redirections, the environments variables but also handles quotes and Ctrl-C, Ctr-D, Ctrl-\\"
        var wb= "Webserver is a from-scratch HTTP-1.1 conditionnaly compliant server. You can run any type of websites on the server. It handles simultaneous server, most of the http headers, gzip resposne / request, chunked response / request and HTTPS. The server and the routing is fully configurable through a nginx inspired configuration file."
        return (
        <div className="Carousel">
            <div className="Card">
                <div className="ImageDiv">
                    <img src={cube}></img>
                </div>
                <div className="Text">
                    <h1> CUBE 3D <span style={{color: "gray"}}> C </span></h1>
                    <h3>{cube3d}</h3>
                </div>
            </div>
            <div className="Card">
                <div className="ImageDiv">
                    <img src={wbr}></img>
                </div>
                <div className="Text">
                    <h1> Webserver <span style={{color: "gray"}}> C++ </span></h1>
                    <h3>{wb}</h3>
                </div>
            </div>
            <div className="Card">
                <div className="ImageDiv">
                    <img className="NN" src={nn}></img>
                </div>
                <div className="Text">
                    <h1> MULTILAYER-PERCEPTRON <span style={{color: "gray"}}> PYTHON </span></h1>
                    <h3>{ml}</h3>
                </div>
            </div>
            <div className="Card">
                <div className="ImageDiv">
                    <img src={minishell}></img>
                </div>
                <div className="Text">
                    <h1> MINISHELL <span style={{color: "gray"}}> C </span></h1>
                    <h3>{mn}</h3>
                </div>
            </div>
        </div>
        )
    }
}

export default Carousel;