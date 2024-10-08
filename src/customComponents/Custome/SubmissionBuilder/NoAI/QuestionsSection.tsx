import React from "react";
import '../../sb.css'
export const renderQuestionsSection = (content, styles, setActiveSection) => {
  const { questions } = content;
  const renderQuestions = (questions) => {};
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
          {questions.questions.map((element) => {
            return <div className="question">
            <span>
              {element}
              <input
                type="text"
                name={element}
                disabled
              />
            </span>

            </div>;
          })}
          {/* Componente DynamicQuestions o contenido adicional */}
          <button className="submit-button" onClick={() => setActiveSection("privacy")}>Back</button>
          <button className="submit-button" onClick={() => setActiveSection("email")}>Next</button>
        </div>
      </div>
    </div>
  );
};
