import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/dashboard.css";
import { Link } from 'react-router-dom';

const Chats = () => {
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
      <div className="main-content" style={{backgroundImage: `url('/imagenes/fondo3.jpg')`,backgroundSize: "cover",}}>
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

      {/* Área de chat */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="message-input"
        />
        <button className="send-btn">Enviar</button>
      </div>
    </div>

    </div>
        </body>
  );
};

export default Chats;

