import React from "react";
import "./componentBase.css";
export const renderPrivacySection = (content, styles, setActiveSection) => {
  const { privacy } = content;
  //const data = privacy?.privacyOptions
  console.log(content);
  return (
    <>
      <h3
        className="form-title"
        style={{
          color: styles.textColor,
        }}
      >
        {privacy.title.text}
      </h3>
      <div className="activism-form">
        <div className="form-group">
          <label>
            <input type="radio" name="privacy" value="public" /> Public
          </label>
          <h5
            style={{
              color: styles.textColor,
            }}
          >
            {privacy.privacyOptions.public.text}
          </h5>
        </div>
        <div className="form-group">
          <label>
            <input type="radio" name="privacy" value="confidential" /> Confidential
          </label>
          <h5
            style={{
              color: styles.textColor,
            }}
          >
            {privacy.privacyOptions.confidential.text}
          </h5>
        </div>
        <div className="form-group">
          <label>
            <input type="radio" name="privacy" value="nameWithHeld" /> Name Withheld
          </label>
          <h5
            style={{
              color: styles.textColor,
            }}
          >
            {privacy.privacyOptions.nameWithHeld.text}
          </h5>
        </div>
      </div>
      {/* Contenido adicional */}
      <div className="submit-button-container">
      <button
          className="platform-button"
          style={{
            backgroundColor: styles.buttonColor,
            color: styles.buttonTextColor,
          }}
          onClick={() => setActiveSection("questions")}
        >
          Next
        </button>
        <button
          className="platform-button-secondary"
          style={{
            backgroundColor: styles.buttonBColor,
            color: styles.buttonBTextColor,
          }}
          onClick={() => setActiveSection("mainform")}
        >
          Back
        </button>
      </div>
    </>
  );
};
