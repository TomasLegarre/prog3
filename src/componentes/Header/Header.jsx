import React from "react"


function Header (props){
    return(
        <header>
      <article class="logo">
        <a href="index.html"><img src="./img/Vibes.gif" alt="logo" /></a>
      </article>

      <nav>
        <ul class="links">
          <li><a href="Home.js">Home</a></li>
          <li><a href="genres.html">Géneros</a></li>
          <li><a href="playlist.html">Favoritos</a></li>
        </ul>
      </nav>

      
      <article class="all-search">
        <section class="search">
          <form action="search-results.html" method="GET" class="formIndex">
            <input type="text" class="busq" name="buscador" value="" />
            <button class="bSub" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </section>
      </article>
    </header>
        
    )
}

export default Header