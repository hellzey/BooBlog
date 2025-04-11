// src/components/templates/ChatsLayout.jsx
import Sidebar from '../Organisms/Sidebar';
import Header from '../Organisms/Header';
import FormPerfil from '../Organisms/FormPerfil';

const ProfileLayout = ({ children }) => {
    return (
      <div className="dashboard-container">
        <Sidebar />
        
        <div className="main-content">
          <Header />
          
          <main className="p-3">
            {children}
            <FormPerfil /> {/* Aquí dentro */}
          </main>
        </div>
      </div>
    );
  };

export default ProfileLayout;