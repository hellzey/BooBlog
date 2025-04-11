import Mensaje from '../Atoms/Mensaje';
import './ChatBox.css'
const ChatBox = ({ mensajes }) => {
  return (
    <div className="chat-box">
      {mensajes.map((msg, index) => (
        <Mensaje key={index} texto={msg.texto} autor={msg.autor} />
      ))}
    </div>
  );
};

export default ChatBox;
