import React from "react"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import myphoto from "../assets/photo.jpeg";

export default function Contact(){

    return(
        <>
        <main className="contact container">
    <NavBar/>
            <section className="contact-box">
                <h2 className="contact-title">
                    Contact Me
                </h2>
            <div className="contact-info">
                <div className="contact-text">

                        Email: Brzegowy.daria@gmail.com <br/>
                        My social networks:   
                        <a href="https://www.linkedin.com/in/daria-blaszczakk/"  target="_blank" rel="noreferrer">LinkedIn |</a>
                        <a href="https://github.com/Daruszkaaa"  target="_blank"  rel="noreferrer">Github |</a>
                        <a href ="https://twitter.com/daruszkaaaa" target="blank" rel="noreferrer">Twitter</a>
                        </div>
    
            <div className="contact-form">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" name="name" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Message" name="message"  required></textarea>
                    </div>

                    <button type="submit"  className="btn contact-btn" data-back="Thank you" data-front="Send"></button>
                </div>
                </div>
            </section>
            <Footer/>
        </main>
        </>
    )
}
