import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Footer.css";
function Footer() {
    return (
        <div className="footer-container">
            <h3>Made with <span className="heart">❤️</span> by Karan</h3>
            <div>
                <a href="https://www.linkedin.com/in/karan-raj-230028143" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://www.facebook.com/karan.raj.33633344/" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                <a href="https://github.com/Karan108" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>

            </div>
        </div>
    )
}

export default Footer
