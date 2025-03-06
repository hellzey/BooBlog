import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import  '../styles/home.css'
//import creaaImg from '/imagenes/creea.jpg';
//import conectaImg from '/imagenes/conecta.jpg';
//import espiralImg from '/imagenes/espiral.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <body>
    <div style={{backgroundColor:"#0F032B"}}>
      {/* Barra superior */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Booblog
          </a>
          <button
          color="#0F032B"
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
            <Link to="/login">
              <li className="nav-item">
                <button className="btn btn-primary">Iniciar sesión</button>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      {/* Imagen de fondo y bienvenida */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          minWidth: "200vh",
          backgroundImage: `url('/imagenes/glitch.gif')`,
          backgroundSize: "cover",
          //backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white p-5" >
          <h1 className="display-3 fw-bold mb-3">Booblog</h1>
          <p className="lead text-secondary mb-4">
            Tu espacio, tu estilo, tu mundo.
          </p>
        </div>
      </div>

      {/* Carrusel de características */}
      <div className="container my-5">
        <div
          id="featuresCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          backgroundcolor="bla"
          
        >
          <div className="carousel-inner">
            {/* Primer item con tarjeta */}
            <div
              className="carousel-item active"
              style={{
                height: '50vh', // Ajusta la altura según tus necesidades
              }}
            >
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="/imagenes/creea.jpg"
                  alt="Imagen Crea tu propio espacio"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Crea tu propio Espacio</h5>
                  <p className="card-text">
                    Personaliza tu perfil y conecta con otros.
                  </p>
                </div>
              </div>
            </div>

            {/* Segundo item con tarjeta */}
            <div
              className="carousel-item"
              style={{
                height: '50vh', // Ajusta la altura según tus necesidades
              }}
            >
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="/imagenes/conecta.jpg"
                  alt="Imagen Conecta"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Conecta</h5>
                  <p className="card-text">Encuentra y conéctate con otras personas.</p>
                </div>
              </div>
            </div>

            {/* Tercer item con tarjeta */}
            <div
              className="carousel-item"
              style={{
                height: '50vh', // Ajusta la altura según tus necesidades
              }}
            >
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="/imagenes/espiral.jpg"
                  alt="Imagen Explora y Comparte"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Explora y Comparte</h5>
                  <p className="card-text">
                    Comparte tus ideas con otras personas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Botón para la flecha izquierda (Prev) */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#featuresCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Botón para la flecha derecha (Next) */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#featuresCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
            {/* Footer */}
            <footer
        style={{
          backgroundImage: "url('/imagenes/fondo.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "70px 0",
        }}
      >

      </footer>
    </div>

  </body>
  );
};

export default Home;
