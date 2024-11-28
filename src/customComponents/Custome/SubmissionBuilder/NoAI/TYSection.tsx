import React from 'react';

export const renderTYSection = (content, styles, setActiveSection) => {
    const { ty } = content;

    return (
      <div
      className="activism-platform-container"
    >
      <div className="activism-form-container">
        <div
          className="activism-form"
          style={{
            backgroundColor: styles.backgroundColor,
            width: styles.formWidth,
            textAlign: 'center'
          }}
        >
        <h3
          style={{
            color: styles.textColor,
          }}
        >
          {ty.tymessage.text}
        </h3>
        <p
          style={{
            color: styles.textColor,

          }}
        >
          {ty.tymessage2.text}
        </p>
        <p
          style={{
            color: styles.textColor,
          }}
        >
          {ty.shareText.text}
        </p>
        <p
          style={{
            color: styles.textColor,
          }}
        >
          {ty.shareMessage.text}
        </p>
        <p
          style={{
            color: styles.textColor,
          }}
        >
          {ty.shareUrl.text}
        </p>
        <button className="submit-button" style={{backgroundColor: styles.buttonBColor, color: styles.buttonBTextColor}} onClick={() => setActiveSection('email')}>Back</button>
        </div>
      </div>
    </div>
    );
  };