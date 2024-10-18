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
            width: styles.formWidth,
            padding: styles.formPadding,
            borderRadius: styles.borderRadius,
          }}
        ><h3 
        className="form-title"
        style={{
          color: privacy.title.textColor,
          fontSize: privacy.title.fontSize,
        }}
      >
        {privacy.title.text}
      </h3>
        <div className='activism-form' >
        <label> Public</label>
        <h5 style={{
        color: privacy.privacyOptions.public.textColor,
        fontSize: privacy.privacyOptions.public.fontSize,
      }}>{privacy.privacyOptions.public.text}</h5>
        <label> Confidential</label>
        <h5 style={{
        color: privacy.privacyOptions.confidential.textColor,
        fontSize: privacy.privacyOptions.confidential.fontSize,
      }}>{privacy.privacyOptions.confidential.text}</h5>
        <label> NameWithHeld</label>
        <h5 style={{
        color: privacy.privacyOptions.nameWithHeld.textColor,
        fontSize: privacy.privacyOptions.nameWithHeld.fontSize,
      }}>{privacy.privacyOptions.nameWithHeld.text}</h5>
        </div>
      {/* Contenido adicional */}
      <button className="submit-button" onClick={() => setActiveSection('mainform')}>Back</button>
      <button className="submit-button" onClick={() => setActiveSection('questions')}>Next</button>
        </div>
      </div>
    </div>
    );
  };