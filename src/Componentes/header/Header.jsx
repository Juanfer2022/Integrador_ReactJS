import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="navbar is-primary">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src="./images.png" />
        </a>
        <h1 className="pos">Buscador de Noticias</h1>
      </div>
    </div>
  );
};
export default Header;
