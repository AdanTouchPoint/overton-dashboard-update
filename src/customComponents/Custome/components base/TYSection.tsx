import React from "react";
import "./componentBase.css";
export const renderTYSection = (content, styles, setActiveSection) => {
  const { ty } = content;

  return (
    <>
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
      <div className="submit-button-container">
        <button
          className="platform-button-secondary"
          style={{
            backgroundColor: styles.buttonBColor,
            color: styles.buttonBTextColor,
          }}
          onClick={() => setActiveSection("email")}
        >
          Back
        </button>
      </div>
    </>
  );
};
