import React from 'react';
import { Eye, Check } from "lucide-react"
import "./header.css"

export default function Header() {
  return (
    <header className="editor-header">
      <h1>Editor de Estilos de Email</h1>
      <div className="header-actions">
        <button className="save-button">
          <Check size={16} />
          Guardar
        </button>
      </div>
    </header>
  )
}

