import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/dashboard.css";
import { Link } from 'react-router-dom';

const Perfil = () => {
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
      {/* Lado derecho con el formulario */}
      <div className="form-side">
        <h2>Registrate</h2>
        <form action="#" method="post" encType="multipart/form-data">

                  {/* Campo de Foto de Perfil */}
                  <div className="form-group">
            <label htmlFor="fotoPerfil">Foto de Perfil</label>
           <img
              src="/imagenes/perfil.jpg"  // Asegúrate de cambiar esta ruta a la imagen real
              alt="Perfil"
              className="profile-pic-editable"
            />
          </div>

          {/* Campo de Nombre */}
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" id="nombre" name="nombre"  />
          </div>

          {/* Campo de Apellidos */}
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" className="form-control" id="apellidos" name="apellidos" />
          </div>

         <div className="form-group">
            <label htmlFor="correo">Correo</label>
            <input type="text" className="form-control" id="correo" name="correo" />
          </div>

          {/* Campo de Fecha de Nacimiento */}
          <div className="form-group">
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            <input type="date" className="form-control" id="fechaNacimiento" name="fechaNacimiento" />
          </div>

          {/* Campo de Género */}
          <div className="form-group">
            <label htmlFor="genero">Género</label>
            <select className="form-control" id="genero" name="genero">
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>



          <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">Editar</button>
          </div>

        </form>
      </div>

      </div>
    </div>
        </body>
  );
};

export default Perfil;