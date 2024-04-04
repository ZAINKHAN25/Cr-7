import React from 'react';
import "./app.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid px-5">
        <a className="logoOfNavbar" href="#">Cristiano-Ronaldo</a>
        <div className="BtnOfToogleNavbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="collapse navbar-collapse navbarLis" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#clubs">Clubs</a>
            <a className="nav-link" href="#achiements">Achiements</a>
            <a className="nav-link" href="#pictures">Pictures</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;