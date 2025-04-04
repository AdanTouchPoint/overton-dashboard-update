import React from 'react';
import '../../components base/componentBase.css'
export const renderEmailSection = (content,styles,setActiveSection) => {
    const { email } = content;

    return (
      <div
      className="activism-platform-container">
      <div className="activism-form-container">
        <div
          className="activism-form"
          style={{
            backgroundColor: styles.backgroundColor,
            width: styles.formWidth,
          }}
        >
        <h3
          style={{
            color: email.title.textColor,
            fontSize: email.title.fontSize,
          }}
        >
          {email.title.text}
        </h3>
        <p
          style={{
            color: email.instructions.textColor,
            fontSize: email.instructions.fontSize,
          }}
        >
          {email.instructions.text}
        </p>
        <textarea style={{resize: 'none'}} disabled rows={10} cols={50}>Email ... </textarea>
        {/* Contenido adicional */}
        <button  className="submit-button" onClick={() => setActiveSection('questions')}>Back</button>
        <button  className="submit-button" onClick={() => setActiveSection('ty')}>Next</button>
        </div>
      </div>
    </div>
    );
  };