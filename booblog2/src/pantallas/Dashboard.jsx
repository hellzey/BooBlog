import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/dashboard.css";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <body>
      

    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>Mis Grupos</h3>
          <button className="btn btn-new-group">+ Nuevo Grupo</button>
        </div>
        <ul className="group-list list-unstyled">
          <Link to="/chats">
          <li className="group-item">Crear Chat</li>
          </Link>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="main-content">
        {/* Header */}
        <header className="header d-flex justify-content-between align-items-center p-3 shadow">
          <h2>Nombre del Chat</h2>
          <div className="user-menu d-flex align-items-center">
        <ul className="group-hader">
        <Link to="/dash">
          <li className="group-item-hader">Inicio</li>
          </Link>
          <Link to="/perfil">
          <li className="group-item-hader">Perfil</li>
          </Link>
          <Link to="/">
          <li className="group-item-hader">Salir</li>
          </Link>
        </ul>
        <img
              src="/imagenes/perfil.jpg"  // Asegúrate de cambiar esta ruta a la imagen real
              alt="Perfil"
              className="profile-pic"
            />
          </div>
        </header>

        {/* Tarjeta */}
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <img
            className="card-img-bottom"
            src="/imagenes/conecta.jpg" // Aquí debe ir la URL de la imagen
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
        </body>
  );
};

export default Dashboard;

