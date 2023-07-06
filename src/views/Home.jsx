import React from "react";
import NavBar from "../components/NavBar";
import { PrimeIcons } from 'primereact/api';

import csslogo from "../assets/css3-logo.png";
import htmllogo from "../assets/HTML-logo.png";
import javascriptlogo from "../assets/javascript-logo.png";
import reactlogo from "../assets/react-logo.png";
import sasslogo from "../assets/Sass-logo.png";
import githublogo from "../assets/github-logo.png"; 
import homeimage from "../assets/skills-image2.jpg";
import skills from "../assets/skills-image.jpg";


export default function Home(){

    return(
        <>
        <main className="home container">
            <NavBar/>
            <section className="home-box">
                <h2>Hi, I'm <span>Daria</span><br/>
                    A Front-End Developer</h2> 
                <div className="box-text">
                   <p> I am constantly trying to learn and improve my skills to keep up with the latest industry trends and best practices. <br/><br/></p>
                   <div className="home-social-networks">
            <a href="https://github.com/Daruszkaaa" className="pi n pi-github" target="_blank" rel="noreferrer"></a>
            <a href="https://www.linkedin.com/in/daria-blaszczak-brzegowy/" className="pi  pi-linkedin" target="_blank" rel="noreferrer"></a>
            <a href="https://twitter.com/daruszkaaaa"  className="pi  pi-twitter"target="_blank" rel="noreferrer"></a>
      </div>  
                </div>
                {/* <img src={homeimage} alt="image"></img> */}
            </section>

            <section className="home-skills"> 
            <h2 className="skills-tittle"> skills</h2>
                 
                  <div className="skills-box"> 
                  <img src={skills} alt="skills-image"></img>
             
                <div className="skills-logo"> 
                
                <h2> What I can do </h2>


                <div className="skills-image">
                
                        <img src={htmllogo} className="skills-photo"alt="html-logo" />
                        <img src={csslogo}className="skills-photo" alt="css-logo" />
                        <img src={sasslogo}className="skills-photo" alt="sass-logo" />
                        <img src={javascriptlogo}className="skills-photo" alt="javascript-logo" />
                        <img src={reactlogo} className="skills-photo"alt="react-logo" />
                        <img src={githublogo} className="skills-photo" alt="github-logo" />
                        </div>
                    </div>
                    </div>
            </section>
        </main>
    
        </>
    )
}