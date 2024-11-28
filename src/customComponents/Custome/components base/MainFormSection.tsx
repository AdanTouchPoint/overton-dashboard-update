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
                color: styles.labelColor,
              }}
            >
              {field.text.charAt(0).toUpperCase() + field.text.slice(1)}
            </span>
            <input
            style={{
              backgroundColor: styles.inputBackground,
              color: styles.inputTextColor
            }}
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
          width: styles.formWidth
        }}
      >
        <div className="activism-form-container">
          <div
            className="activism-form"
            style={{
              backgroundColor: styles.backgroundColor,

            }}
          >
            <h1
              style={{
                color: styles.textColor
              }}
              className="form-title"
            >
              {mainform.title.text}
            </h1>
            <p
              style={{
                color: styles.textColor
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
                <span
                  style={{
                    color: styles.textColor
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
                backgroundColor: styles.buttonColor,
                color: styles.buttonTextColor
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