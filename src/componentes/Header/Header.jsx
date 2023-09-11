import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";




function Header (props){
    return(
        <header>
      <article className="logo">
        <a href="/"><img src="./img/Vibes.gif" alt="logo" /></a>
      </article>

      <nav>
        <ul className="links">
          <li><Link to="/" exact="true">Home</Link></li>
          <li><Link to="/generos">Generos</Link></li>
          <li><Link to="/favoritos">Favoritos</Link></li>
        </ul>
      </nav>
    

    </header>
        
    )
}

export default Header