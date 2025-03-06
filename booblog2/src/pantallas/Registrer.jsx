import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '../styles/login.css'
import { Link } from 'react-router-dom';
function Registrer() {
  return (
    <body>
      

    <div className="container-fluid">
      {/* Lado izquierdo con imagen */}
      <div className="image-side">
        <img className="side" src="/imagenes/glitch.gif" alt="side" />
      </div>

      {/* Lado derecho con el formulario */}
      <div className="form-side">
        <h2>Registrate</h2>
        <form action="#" method="post" encType="multipart/form-data">
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

          {/* Campo de Foto de Perfil */}
          <div className="form-group">
            <label htmlFor="fotoPerfil">Foto de Perfil</label>
            <input type="file" className="form-control-file" id="fotoPerfil" name="fotoPerfil" accept="image/*" />
          </div>

          {/* Botón de Enviar */}
          <Link to="/dash">
          <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">Registrar</button>
          </div>
          </Link>

        </form>
        <Link to="/login">
          <button className="btn">¿Ya tienes una cuenta? Inicia aquí</button>
          </Link>
      </div>
    </div>

    </body>
  );
}

export default Registrer;