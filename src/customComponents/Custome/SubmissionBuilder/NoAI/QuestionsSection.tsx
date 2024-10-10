import React from "react";
import '../../sb.css'
export const renderQuestionsSection = (content, styles, setActiveSection) => {
  const { questions } = content;
  const inputs = questions?.questions || [] 
  const renderDynamicInputs = () => {
    return inputs.map((field: any, index: number) => (
      <div key={index} className="form-group">
        <label>
          <span
            style={{
              color: field.textColor,
              fontSize: field.fontSize,
            }}
          >
            {field.text.charAt(0).toUpperCase() + field.text.slice(1)}
          </span>
          <input
            type="text"
            name={field.text}
            disabled
          />
        </label>
      </div>
    ));
  };

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
              color: questions.title.textColor,
              fontSize: questions.title.fontSize,
            }}
          >
            {questions.title.text}
          </h3>
          <p
            style={{
              color: questions.instructions.textColor,
              fontSize: questions.instructions.fontSize,
            }}
          >
            {questions.instructions.text}
          </p>
          <h5>Questions</h5>
            {renderDynamicInputs()}
          {/* Componente DynamicQuestions o contenido adicional */}
          <button className="submit-button" onClick={() => setActiveSection("privacy")}>Back</button>
          <button className="submit-button" onClick={() => setActiveSection("email")}>Next</button>
        </div>
      </div>
    </div>
  );
};
