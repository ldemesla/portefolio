import React from "react";
import "./Footer.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import AttachmentIcon from '@material-ui/icons/Attachment';
import cv from "./assets/resume.pdf"

class Footer extends React.Component {
    render()
    {
        return(
            <div className="Footer">
                <div className="Icons">
                    <GitHubIcon onClick={()=>{ window.open("https://github.com/ldemesla")}}/>
                    <LinkedInIcon onClick={()=>{ window.open("https://www.linkedin.com/in/louis-demeslay-b7b19118b/")}}/>
                    <a target="_blank" href="mailto:louishugodemeslay@gmail.com">
                        <MailIcon />
                    </a>
                    <a href={cv} download>
                        <AttachmentIcon/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;