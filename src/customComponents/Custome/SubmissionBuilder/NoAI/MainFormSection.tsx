import React from "react";
import "../../Editors/previewPage.css";
export const renderMainFormSection = (
  content,
  styles,
  setActiveSection,
  flexDirect
) => {
  const { mainform } = content;
  const inputs = mainform?.mainFormInputs || [];
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
          <input type="text" name={field.text} disabled />
        </label>
      </div>
    ));
  };

  return (
    <div
      className="email-preview"
      style={{
        width: `${styles.formWidth}px`,
        maxWidth: "100%",
      }}
    >
      <div
        className="email-content"
        style={{
          backgroundColor: styles.backgroundColor,
          color: styles.textColor,
        }}
      >
        <div className="email-header">
          <h1
            style={{
              color: mainform.title.textColor,
              fontSize: mainform.title.fontSize,
            }}
          >
            {mainform.title.text}
          </h1>
          <p
            style={{
              color: mainform.instructions.textColor,
              fontSize: mainform.instructions.fontSize,
            }}
          >
            {mainform.instructions.text}
          </p>
          <div className="email-body" style={{ flexDirection: flexDirect }}>
            <div className="form-field">{renderDynamicInputs()}</div>
          </div>
          <div>
            <label>
              <span
                style={{
                  color: mainform.tac.textColor,
                  fontSize: mainform.tac.fontSize,
                }}
              >
                {mainform.tac.text}
              </span>
            </label>
          </div>
          <div className="button-group">
            <button
              type="button"
              className="submit-button"
              style={{
                backgroundColor: mainform.button,
              }}
              onClick={() => setActiveSection("privacy")}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
