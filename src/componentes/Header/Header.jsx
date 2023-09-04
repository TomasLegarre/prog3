import React from "react";
import {Link} from "react-router-dom";



function Header (props){
    return(
        <header>
      <article className="logo">
        <a href="index.html"><img src="./img/Vibes.gif" alt="logo" /></a>
      </article>

      <nav>
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/generos">Generos</Link></li>
          <li><Link to="/favoritos">Favoritos</Link></li>
        </ul>
      </nav>

      
      <article className="all-search">
        <section className="search">
          <form action="search-results.html" method="GET" className="formIndex">
            <input type="text" className="busq" name="buscador" value="" />
            <button className="bSub" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </section>
      </article>
    </header>
        
    )
}

export default Header