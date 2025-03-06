import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '../styles/login.css'
//import espiralImg from '/imagenes/espiral.jpg';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <body>
      

    <div className="container-fluid">
      {/* Lado izquierdo con imagen */}
      <div className="image-side">
        <img className="side" src="/imagenes/glitch.gif" alt="side" />
      </div>

      {/* Lado derecho con el formulario */}
      <div className="form-side">
        <h2>Inicio de Sesión</h2>
        <form action="#" method="post" encType="multipart/form-data">

         <div className="form-group">
            <label htmlFor="correo">Correo</label>
            <input type="text" className="form-control" id="correo" name="correo" required />
          </div>
          
         <div className="form-group">
            <label htmlFor="contraenia">Contraseña</label>
            <input type="text" className="form-control" id="contraenia" name="contraenia" required />
          </div>

          {/* Botón de Enviar */}
          <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">Iniciar</button>
          </div>

        </form>
        <Link to="/registrer">
          <button className="btn">¿No tienes cuenta? Regístrate aquí</button>
          </Link>
      </div>
    </div>

    </body>
  );
}

export default Login;

