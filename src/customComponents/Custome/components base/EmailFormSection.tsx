import React from 'react';
import './componentBase.css'
export const renderEmailSection = (content,styles,setActiveSection) => {
    const { emailform } = content;

    return (
      <div
      className="activism-platform-container"
      style={{
        fontFamily: styles.fontFamily,
        width: styles.formWidth
      }}
    >
      <div className="activism-form-container">
        <div
          className="activism-form"
          style={{
            backgroundColor: styles.backgroundColor,
          }}
        >
        <h3
          style={{
            color: styles.textColor,
          }}
        >
          {emailform.title.text}
        </h3>
        <p
          style={{
            color: styles.textColor
          }}
        >
          {emailform.instructions.text}
        </p>
        <textarea style={{resize: 'none', backgroundColor: styles.inputBackground}} disabled rows={10} cols={50}>Email ... </textarea>
        {/* Contenido adicional */}
        <button  className="submit-button" style={{backgroundColor: styles.buttonBColor, color: styles.buttonBTextColor}} onClick={() => setActiveSection('mainform')}>Back</button>
        <button  className="submit-button" style={{backgroundColor: styles.buttonColor, color: styles.buttonTextColor}} onClick={() => setActiveSection('emailreview')}>Next</button>
        </div>
      </div>
    </div>
    );
  };