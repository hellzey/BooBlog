// src/components/Atoms/Message.jsx
import React from 'react';
import './Mensaje.css'

const Message = ({ sender, text, isSent }) => {
  return (
    <div className={`message ${isSent ? 'sent' : 'received'}`}>
      <span className="message-sender">{sender}:</span>
      <p className="message-text">{text}</p>
    </div>
  );
};

export default Message;
