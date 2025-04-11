// src/components/organisms/Sidebar.jsx
import SidebarItem from '../Molecules/SidebarItem';
import Button from '../Atoms/ButtonTemp';
import Title from '../Atoms/Title';
import './Sidebar.css'


const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <Title text="Mis Grupos" level={3} />
        <Button className="btn btn-new-group">+ Nuevo Grupo</Button>
      </div>

      <ul className="group-list list-unstyled">
        <SidebarItem to="/chats" text="Crear Chat" />
      </ul>
    </nav>
  );
};

export default Sidebar;
