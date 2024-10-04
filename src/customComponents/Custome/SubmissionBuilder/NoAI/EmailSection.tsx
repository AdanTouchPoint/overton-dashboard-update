const renderEmailSection = () => {
    const { email } = content;

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
            color: email.title.textColor,
            fontSize: email.title.fontSize,
          }}
        >
          {email.title.text}
        </h3>
        <p
          style={{
            color: email.instructions.textColor,
            fontSize: email.instructions.fontSize,
          }}
        >
          {email.instructions.text}
        </p>
        <textarea style={{resize: 'none'}} disabled rows="10" cols="50">Email ... </textarea>
        {/* Contenido adicional */}
        <button onClick={() => setActiveSection('questions')}>Back</button>
        <button onClick={() => setActiveSection('ty')}>Next</button>
        </div>
      </div>
    </div>
    );
  };