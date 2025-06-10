import React from "react";
import { Link } from "react-router-dom";

import zeldaImg from "../assets/images/zelda.jpg";
import cyberpunkImg from "../assets/images/cyberpunk.jpg";
import nmsImg from "../assets/images/nms.jpg";
import starcImg from "../assets/images/starc.jpg";
import rdr2img from "../assets/images/rdr2.jpg";
import witcherImg from "../assets/images/witcher.jpg";

const juegos = [
  { id: "zelda", nombre: "The Legend of Zelda: BOTW", imagen: zeldaImg },
  { id: "cyberpunk", nombre: "Cyberpunk 777", imagen: cyberpunkImg },
  { id: "nms", nombre: "No Man's Sky", imagen: nmsImg },
  { id: "starc", nombre: "Star Citizen", imagen: starcImg },
  { id: "rdr2", nombre: "Red Dead Redemption 2", imagen: rdr2img },
  { id: "witcher", nombre: "The Witcher 3: The Wild Hunt", imagen: witcherImg},
];

const Lista: React.FC = () => {
  return (
    <div className="container mt-4">
      <p style={{
         fontSize: "1.8rem",
         fontWeight: "700", 
         color: "#2c3e50",
         marginBottom: "1.5rem",
         textAlign: "center",
         textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
         
      }} >
        Mejores videojuegos de mundo abierto</p>
      <div style={{ 
        display: "flex", 
        gap: "20px", 
        flexWrap: "wrap",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1000px", 
        }}>
        {juegos.map((juego) => (
          <Link
            key={juego.id}
            to={`/Detalle/${juego.id}`}
            style={{ textAlign: "center",
              width: 300,
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease", 
              overflow: "hidden",
            }}
             onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.transform = "scale(1.03)";
              target.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.transform = "scale(1)";
              target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
            }}
          >
            <img src={juego.imagen} alt={juego.nombre} width={300} height={200} 
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              display: "block",
            }} />
            <p style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "none",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
            >{juego.nombre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lista;
