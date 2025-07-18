import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Práctica 1 - Sistemas y Tecnologías Web II</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Quizz">Quiz de Animales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Lista">Videojuegos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Combos">Soda Universitaria</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
