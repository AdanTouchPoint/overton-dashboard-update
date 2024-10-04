const renderTYSection = () => {
    const { ty } = content;

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
            color: ty.title.textColor,
            fontSize: ty.title.fontSize,
          }}
        >
          {ty.title.text}
        </h3>
        <p
          style={{
            color: ty.description.textColor,
            fontSize: ty.description.fontSize,
          }}
        >
          {ty.description.text}
        </p>
        <p
          style={{
            color: ty.instructions.textColor,
            fontSize: ty.instructions.fontSize,
          }}
        >
          {ty.instructions.text}
        </p>
        {/* Contenido adicional */}
        <button onClick={() => setActiveSection('email')}>Back</button>
        </div>
      </div>
    </div>
    );
  };