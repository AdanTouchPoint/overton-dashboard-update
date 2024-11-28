import React from 'react';

export const renderPrivacySection = (content, styles, setActiveSection) => {
    const { privacy } = content;
    //const data = privacy?.privacyOptions
    console.log(content)
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
            width: styles.formWidth
          }}
        ><h3 
        className="form-title"
        style={{
          color: styles.textColor,

        }}
      >
        {privacy.title.text}
      </h3>
        <div className='activism-form' >
        <label> Public</label>
        <h5 style={{
        color: styles.textColor,
      }}>{privacy.privacyOptions.public.text}</h5>
        <label> Confidential</label>
        <h5 style={{
        color: styles.textColor,
      }}>{privacy.privacyOptions.confidential.text}</h5>
        <label> NameWithHeld</label>
        <h5 style={{
        color: styles.textColor,
      }}>{privacy.privacyOptions.nameWithHeld.text}</h5>
        </div>
      {/* Contenido adicional */}
      <button className="submit-button" style={{backgroundColor: styles.buttonBColor, color: styles.buttonBTextColor}} onClick={() => setActiveSection('mainform')}>Back</button>
      <button className="submit-button" style={{backgroundColor: styles.buttonColor, color: styles.buttonTextColor}} onClick={() => setActiveSection('questions')}>Next</button>
        </div>
      </div>
    </div>
    );
  };