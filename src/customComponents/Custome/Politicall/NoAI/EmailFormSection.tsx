import React from 'react';

export const renderEmailSection = (content,styles,setActiveSection) => {
    const { emailform } = content;

    return (
      <div
      className="activism-platform-container"
      style={{
        fontFamily: styles.fontFamily,
      }}
    >
      <div className="activism-form-container">
        <div
          className="activism-form"
          style={{
            backgroundColor: styles.backgroundColor,
            width: styles.formWidth,
            padding: styles.formPadding,
            borderRadius: styles.borderRadius,
          }}
        >
        <h3
          style={{
            color: emailform.title.textColor,
            fontSize: emailform.title.fontSize,
          }}
        >
          {emailform.title.text}
        </h3>
        <p
          style={{
            color: emailform.instructions.textColor,
            fontSize: emailform.instructions.fontSize,
          }}
        >
          {emailform.instructions.text}
        </p>
        <textarea style={{resize: 'none'}} disabled rows={10} cols={50}>Email ... </textarea>
        {/* Contenido adicional */}
        <button  className="submit-button" onClick={() => setActiveSection('mainform')}>Back</button>
        <button  className="submit-button" onClick={() => setActiveSection('emailreview')}>Next</button>
        </div>
      </div>
    </div>
    );
  };