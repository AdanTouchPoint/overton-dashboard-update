import React from 'react';

export const renderEmailReviewSection = (content,styles,setActiveSection) => {
    const { emailreview } = content;

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
            color: styles.textColor
          }}
        >
          {emailreview.title.text}
        </h3>
        <p
          style={{
            color:styles.textColor,

          }}
        >
          {emailreview.instructions.text}
        </p>
        <textarea style={{resize: 'none', backgroundColor: styles.inputBackground}} disabled rows={10} cols={50}>Email ... </textarea>
        {/* Contenido adicional */}
        <button  className="submit-button" style={{backgroundColor: styles.buttonBColor, color: styles.buttonBTextColor}} onClick={() => setActiveSection('emailform')}>Back</button>
        <button  className="submit-button" style={{backgroundColor: styles.buttonColor, color: styles.buttonTextColor}} onClick={() => setActiveSection('ty')}>Next</button>
        </div>
      </div>
    </div>
    );
  };