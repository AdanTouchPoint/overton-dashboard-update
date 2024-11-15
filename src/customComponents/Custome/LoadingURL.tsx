import React, { useState,useReducer } from "react";
import { DefaultTemplate } from "payload/components/templates";
import { Button } from "payload/components/elements";
import './loading.css'

const baseClass = "after-dashboard";
const LoadingURL: React.FC = () => {
  
  return (
    <div className="modal-overlay" >
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>Este es el Modal</h2>
      <p>Aquí puedes poner cualquier contenido.</p>
      <div className="loader"></div>
    </div>
  </div>
  );
};

export default LoadingURL;
