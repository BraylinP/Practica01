import React from "react";
import { useParams, Link } from "react-router-dom";

import zeldaImg from "../assets/images/zelda.jpg";
import cyberpunkImg from "../assets/images/cyberpunk.jpg";
import nmsImg from "../assets/images/nms.jpg";
import starcImg from "../assets/images/starc.jpg";
import rdr2Img from "../assets/images/rdr2.jpg";
import witcherImg from "../assets/images/witcher.jpg";

interface JuegoDetalle {
  id: string;
  nombre: string;
  año: string;
  personajes: string[];
  desarrollador: string, 
  plataformas: string[];
  genero: string,
  descripcion: string;
  imagen: string;
}

const juegosDetalles: JuegoDetalle[] = [
  {
    id: "zelda",
    nombre: "The Legend of Zelda: BOTW",
    año: "2017",
    personajes: ["Link", "Zelda"],
    desarrollador: "Nintendo",
    plataformas: ["Nintendo Switch", "Wii U"],
    genero: "Aventura / Mundo Abierto",
    descripcion: "The Legend of Zelda: Breath of the Wild es un juego que cambió las reglas del juego para los fans de Zelda y de los mundos abiertos. Link aquí no solo sigue un camino predefinido, sino que puede explorar un universo enorme, lleno de sorpresas y retos a su ritmo. Es un juego que combina aventura, exploración y creatividad, donde cada jugador puede vivir su propia historia. Más que un juego, es una invitación a perderse y descubrir",
    imagen: zeldaImg,
  },
  {
    id: "cyberpunk",
    nombre: "Cyberpunk 777",
    año: "2023",
    personajes: ["V"],
    desarrollador: "CD Projekt RED",
    plataformas: ["PC", "Consolas"], 
    genero: "Acción / Mundo Abierto / RPG",
    descripcion: "Cyberpunk 777 te mete de lleno en un futuro distópico donde la tecnología y la humanidad se mezclan de formas impredecibles. Aquí no hay reglas fijas: el protagonista, V, puede elegir cómo sobrevivir en una ciudad gigante llena de peligros, traiciones y oportunidades. Es un juego que destaca por su mundo vibrante, su historia intensa y un diseño visual que te atrapa desde el primer segundo.",
    imagen: cyberpunkImg
  },
  {
   id: "nms",
   nombre: "No Man's Sky",
   año: "2016",
   personajes: ["Explorador espacial"],
   desarrollador: "Hello Games",
   plataformas: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
   genero: "Exploración / Supervivencia / Ciencia Ficción",
   descripcion: "No Man’s Sky es un viaje sin límites por un universo generado de forma procedural, donde cada planeta es único y lleno de vida extraña por descubrir. El jugador es un explorador espacial que puede aterrizar, investigar y sobrevivir en mundos que parecen infinitos. Más que un juego, es una invitación constante a la aventura y la sorpresa, que sigue creciendo con cada actualización.",
   imagen: nmsImg
  },
  {
    id: "starc",
    nombre: "Star Citizen",
    año: "En desarrollo",
    personajes: ["Piloto espacial"],
    desarrollador: "Cloud Imperium Games",
    plataformas: ["PC"],
    genero: "Simulación / Espacio / MMO",
    descripcion: "Star Citizen es un proyecto ambicioso que busca llevar la simulación espacial a otro nivel. Aquí, como piloto, puedes explorar un universo persistente, enorme y lleno de posibilidades, desde combates hasta comercio y exploración. Aunque sigue en desarrollo, ya es un referente para los amantes de los juegos espaciales que quieren algo profundo y realista.",
    imagen: starcImg
  },
  {
    id: "rdr2",
    nombre: "Red Dead Redemption 2",
    año: "2018",
    personajes: ["Arthur Morgan"],
    desarrollador: "Rockstar Games",
    plataformas: ["PC", "PlayStation 4", "Xbox One"],
    genero: "Acción / Aventura / Mundo Abierto",
    descripcion: "Red Dead Redemption 2 es un western épico donde encarnas a Arthur Morgan, un forajido con un código propio en un mundo abierto impresionante y lleno de vida. No es solo disparos y caballos, sino una historia profunda, personajes complejos y un paisaje que te atrapa con su realismo. Un juego que redefine cómo contar historias en videojuegos.",
    imagen: rdr2Img

  },
  {
    id: "witcher",
    nombre: "The Witcher 3: The Wild Hunt",
    año: "2015",
    personajes: ["Geralt de Rivia"],
    desarrollador: "CD Projekt Red",
    plataformas: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S", "Nintendo Switch"],
    genero: "RPG / Aventura / Mundo Abierto",
    descripcion: "The Witcher 3: Wild Hunt es una aventura épica donde Geralt de Rivia recorre un mundo oscuro y lleno de magia, monstruos y decisiones difíciles. No es solo un RPG más: su historia, sus personajes y su libertad para elegir caminos hacen que cada partida sea única. Un referente en juegos de fantasía que atrapó a millones de jugadores.",
    imagen: witcherImg

  },
];

const Detalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const juego = juegosDetalles.find((j) => j.id === id);

  if (!juego) {
    return (
      <div>
        <p>Juego no encontrado.</p>
        <Link to="/">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div
    style={{ 
        display: "flex", 
        gap: "20px", 
        flexWrap: "wrap",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1000px",
        }}
    >
      <p
      style={{
         fontSize: "1.8rem",
         fontWeight: "700", 
         color: "#2c3e50",
         marginBottom: "1.5rem",
         textAlign: "center",
         textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
         
      }}
      >{juego.nombre}
      </p>
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      

      <img src={juego.imagen} alt={juego.nombre} width={800} height={600} 
      style={{
          maxWidth: "100%",
          width: "400px",
          height: "auto",
          objectFit: "cover",
          aspectRatio: "4 / 3",
          borderRadius: "8px",
          flexShrink: 0,
        }} 
        />
     
     <div
     style={{
      flex: "1 1 300px",
      fontSize: "1rem",
      fontWeight: "400",
      color: "#34495e",
      lineHeight: "1.6",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      marginBottom: "1rem",
      textAlign: "justify",
      }}
      >
        <p><strong>Año:</strong> {juego.año}</p>
        <p><strong>Personajes:</strong> {juego.personajes.join(", ")}</p>
        <p><strong>Descripción:</strong> {juego.descripcion}</p>
        <p><strong>Desarrolladora:</strong> {juego.desarrollador}</p>
        <p><strong>Género:</strong> {juego.genero}</p>
        <p><strong>Plataforma:</strong> {juego.plataformas.join(", ")}</p>
        </div>
      </div>

     
      <Link to="/Lista" className="btn btn-primary">Volver a la lista de videojuegos</Link>
    </div>
  );
};

export default Detalle;
