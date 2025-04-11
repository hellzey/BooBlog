// src/components/pages/Dashboard.jsx
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DashboardLayout from '../Templates/DashboardLayout';
import Card from '../Organisms/Card'; 

//*Agregar las tarjetas*

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Aquí van las tarjetas dentro del DashboardLayout */}
      <div className="card-container">
        <Card 
          title="Card 1"
          text="This is a wider card with supporting text below as a natural lead-in to additional content."
          imgSrc="/imagenes/conecta.jpg"
          date="3 mins ago"
        />
        <Card 
          title="Card 2"
          text="This is a shorter card with some different content."
          imgSrc="/imagenes/conecta.jpg"
          date="5 mins ago"
        />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

