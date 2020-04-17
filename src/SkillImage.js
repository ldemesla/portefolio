import React, { Children } from "react";
import "./SkillImage.css"

class SkillImage extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            text: false
        }
    }
    render()
    {
        if (!this.state.text)
            var children = <img className="CardImage" src={this.props.logo}></img>;
        else
            var children = (<div className="CardImage">
                                <h1> {this.props.name} </h1> 
                                <div className="ProgressBar"> 
                                    <div className="Score" style={{width: this.props.grade}}></div>
                                </div>
                            </div>);
        return (
            <div className="SkillImage" onClick={()=> this.state.text ? this.setState({text: false}) : this.setState({text: true})} onMouseLeave={()=> this.setState({text: false})}>
                { children}
            </div>
        );
    }
}

export default SkillImage;