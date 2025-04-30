import React from "react";
import './componentBase.css'
export const renderQuestionsSection = (content, styles, setActiveSection) => {
  const { questions } = content;
  const inputs = questions?.questions || [] 
  const renderDynamicInputs = () => {
    return inputs.map((field: any, index: number) => (
      <div key={index} className="form-group">
        <label>
          <span
            style={{
              color: styles.textColor,
             
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
    <>
    <h3
            style={{
              color: styles.textColor,

            }}
          >
            {questions.title.text}
          </h3>
          <p
            style={{
              color: styles.textColor,
            }}
          >
            {questions.instructions.text}
          </p>
          <h5>Questions</h5>
            {renderDynamicInputs()}
          {/* Componente DynamicQuestions o contenido adicional */}
          <button className="submit-button-platform" style={{backgroundColor: styles.buttonBColor, color: styles.buttonBTextColor}} onClick={() => setActiveSection("privacy")}>Back</button>
          <button className="submit-button-platform" style={{backgroundColor: styles.buttonColor, color: styles.buttonTextColor}} onClick={() => setActiveSection("email")}>Next</button>
    </>
  );
};
