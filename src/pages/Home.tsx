import React from "react";
import { Link } from "react-router-dom";
import portadaQuizz from "../assets/images/portadaQuizz.jpg";
import portadaVideo from "../assets/images/videojuegos.jpg";
import portadaComedor from "../assets/images/comedor.jpg";




const Home: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1>Bienvenidxs a mi primera práctica con React </h1>
      <p>Selecciona uno de los problemas/prácticas para comenzar:</p>

      <div className="d-flex gap-3 flex-wrap">
        <div className="card" style={{ width: "18rem" }}>
            <img src={portadaQuizz} className="card-img-top" alt="Portada Quizz" />
            <div className="card-body">
            <h5 className="card-title">Quizz de Animales</h5>
            <p className="card-text"><br />Este problema deberás resolver 
                cada animal según su descripción</p>
            <Link to="/Quizz" className="btn btn-primary">Quizz</Link>
            </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
            <img src={portadaVideo} className="card-img-top" alt="Portada Videojuegos" />
            <div className="card-body">
            <h5 className="card-title">Videojuegos de mundo abierto</h5>
            <p className="card-text">Aquí te mostraré algunos de mis videojuegos
              favoritos
            </p>
            <Link to="/Lista" className="btn btn-primary">Videojuegos</Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
            <img src={portadaComedor} className="card-img-top" alt="Portada Quizz" />
            <div className="card-body">
            <h5 className="card-title">Soda Universitaria</h5>
            <p className="card-text">Aquí veremos un ejemplo de menu
            de soda universitaria</p>
            <Link to="/Combos" className="btn btn-primary">Soda Universitaria</Link>
            </div>
        </div>
      
      </div>
    </div>
  );
};

export default Home;
