import React from 'react';

export const renderEmailReviewSection = (content,styles,setActiveSection) => {
    const { emailreview } = content;

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
            color: emailreview.title.textColor,
            fontSize: emailreview.title.fontSize,
          }}
        >
          {emailreview.title.text}
        </h3>
        <p
          style={{
            color: emailreview.instructions.textColor,
            fontSize: emailreview.instructions.fontSize,
          }}
        >
          {emailreview.instructions.text}
        </p>
        <textarea style={{resize: 'none'}} disabled rows={10} cols={50}>Email ... </textarea>
        {/* Contenido adicional */}
        <button  className="submit-button" onClick={() => setActiveSection('emailform')}>Back</button>
        <button  className="submit-button" onClick={() => setActiveSection('ty')}>Next</button>
        </div>
      </div>
    </div>
    );
  };