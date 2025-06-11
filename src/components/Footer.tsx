import React from "react";

const Footer: React.FC = () => {
    return(

         <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {}
          <div className="col-md-4 mb-4">
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none footer-link">Inicio</a></li>
              <li><a href="/Quizz" className="text-light text-decoration-none footer-link">Quizz</a></li>
              <li><a href="/Lista" className="text-light text-decoration-none footer-link">Videojuegos</a></li>
              <li><a href="/Combos" className="text-light text-decoration-none footer-link">Soda</a></li>
            </ul>
          </div>

          {}
          <div className="col-md-4 mb-4">
            <h5>Suscríbete</h5>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Tu correo electrónico"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Enviar</button>
            </form>
          </div>

          {}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5>Síguenos</h5>
            <a href="#" className="btn btn-outline-light btn-sm me-2 social-icon"><i className="bi bi-facebook"></i></a>
            <a href="#" className="btn btn-outline-light btn-sm me-2 social-icon"><i className="bi bi-twitter"></i></a>
            <a href="#" className="btn btn-outline-light btn-sm me-2 social-icon"><i className="bi bi-instagram"></i></a>
            <a href="#" className="btn btn-outline-light btn-sm social-icon"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        {}
        <div className="text-center pt-3 border-top border-secondary mt-4">
          <p className="mb-0">&copy; 2025 Braylin Peraza. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>

        

    );
};

export default Footer;