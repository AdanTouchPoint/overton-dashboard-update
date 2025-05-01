import React from "react";
import "./componentBase.css";
export const renderEmailSection = (content, styles, setActiveSection) => {
  const { email } = content;
  console.log(content);
  return (
    <>
      <h3
        style={{
          color: styles.textColor,
        }}
      >
        {email.title.text}
      </h3>
      <p
        style={{
          color: styles.textColor,
        }}
      >
        {email.instructions.text}
      </p>
      <textarea
        style={{ resize: "none", backgroundColor: styles.inputBackground }}
        disabled
        rows={10}
        cols={50}
        defaultValue={"Email..."}
      >

      </textarea>
      {/* Contenido adicional */}
      <div className="submit-button-container">
      <button
          className="submit-button-platform"
          style={{
            backgroundColor: styles.buttonColor,
            color: styles.buttonTextColor,
          }}
          onClick={() => setActiveSection("ty")}
        >
          Next
        </button>
        <button
          className="submit-button-platform"
          style={{
            backgroundColor: styles.buttonBColor,
            color: styles.buttonBTextColor,
          }}
          onClick={() => setActiveSection("questions")}
        >
          Back
        </button>
 
      </div>
    </>
  );
};
