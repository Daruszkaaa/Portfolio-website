import React from "react"

export default function NavBar(){

    return(
        <>
         <nav className="navbar">
                <div className="navbar-logo">
                    <span> {'<'} Daria Blaszczak-Brzegowy {'/>'} </span>
                    </div>
                    <ul className="navbar-menu">
                        <li>
                            <a href="/" className="navbar-element">Home</a>
                            <a href="projects"className="navbar-element" > Projects</a>
                            <a href="contact"className="navbar-element">Contact</a>
                        </li>
                    </ul>
            </nav>
        </>
    )

}