// src/components/templates/ChatsLayout.jsx
import Sidebar from '../Organisms/Sidebar';
import Header from '../Organisms/Header';
import ChatArea from '../Organisms/ChatArea';

const ChatsLayout = ({ children }) => {
    return (
      <div className="dashboard-container">
        <Sidebar />
        
        <div className="main-content">
          <Header />
          
          <main className="p-3">
            {children}
            <ChatArea /> {/* Aquí dentro */}
          </main>
        </div>
      </div>
    );
  };

export default ChatsLayout;