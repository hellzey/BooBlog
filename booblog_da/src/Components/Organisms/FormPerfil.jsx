
import FormGroup from '../Molecules/FormGrup';
import ProfileImage from "../Atoms/ProfileImage";

const FormPerfil = () => {
  return (
    <div className="form-side">
      <form action="#" method="post" encType="multipart/form-data">

        <div className="form-group">
          <label htmlFor="fotoPerfil">Foto de Perfil</label>
          <ProfileImage src="/imagenes/perfil.jpg" alt="Perfil" />
        </div>

        <FormGroup label="Nombre" type="text" id="nombre" name="nombre" />
        <FormGroup label="Apellidos" type="text" id="apellidos" name="apellidos" />
        <FormGroup label="Correo" type="text" id="correo" name="correo" />
        <FormGroup label="Fecha de Nacimiento" type="date" id="fechaNacimiento" name="fechaNacimiento" />

      </form>
    </div>
  );
};

export default FormPerfil;
