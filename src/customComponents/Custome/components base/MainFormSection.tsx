import React from 'react';

export const renderMainFormSection = (content, styles, setActiveSection, flexDirect) => {
    const { mainform } = content;
    const inputs = mainform?.mainFormInputs || [] 
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
            <h1
              style={{
                color: mainform.title.textColor,
                fontSize: mainform.title.fontSize,
              }}
              className="form-title"
            >
              {mainform.title.text}
            </h1>
            <p
              style={{
                color: mainform.instructions.textColor,
                fontSize: mainform.instructions.fontSize,
              }}
              className="form-description"
            >
              {mainform.instructions.text}
            </p>
             <div className='dynamic-inputs' style={{flexDirection: flexDirect}}>
             {renderDynamicInputs()}
             </div>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="termsAccepted"
                 // onChange={handleOnChange}
                  required
                />
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
            <button
              type="button"
              className="submit-button"
              style={{
                backgroundColor: mainform.button,
              }}
              onClick={() => setActiveSection('emailform')}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  };