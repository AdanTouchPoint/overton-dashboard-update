const renderQuestionsSection = () => {
    const { questions } = content;

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
        {/* Componente DynamicQuestions o contenido adicional */}
        <button onClick={() => setActiveSection('email')}>Next</button>
        <button onClick={() => setActiveSection('privacy')}>Back</button>
  
        </div>
      </div>
    </div>
    );
  };