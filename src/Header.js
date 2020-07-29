import React from 'react'


const Header = () => {

    return(
        <nav>
        <div className="nav-wrapper indigo lighten-1">
          <a href="/" className="brand-logo">Aula alura</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/livros">Livros</a></li>
            <li><a href="/autores">Autores</a></li>
            <li><a href="/sobre">Sobre</a></li>
          </ul>
        </div>
      </nav>
            
    );
}
export default Header;