import Title from '../Atoms/Title';
import Button from '../Atoms/ButtonTemp';
import './Header.css'


const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center p-3 shadow">
      <Title text="BooBlog" level={2} />
      <div className="user-menu d-flex align-items-center">
        <Button className="btn btn-primary">Perfil</Button>
      </div>
    </header>
  );
};

export default Header;