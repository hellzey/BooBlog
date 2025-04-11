// src/Components/Organisms/Card.jsx

import React from 'react';
import "./Card.css"; 

const Card = ({ title, text, imgSrc, date }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">
          <small className="text-muted">Last updated {date}</small>
        </p>
      </div>
      <img className="card-img-bottom" src={imgSrc} alt="Card image" />
    </div>
  );
};

export default Card;
