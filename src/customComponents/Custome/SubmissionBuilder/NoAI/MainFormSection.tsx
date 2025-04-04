import React from 'react';
import '../../components base/componentBase.css'
export const renderMainFormSection = (content, styles, setActiveSection, flexDirect) => {
    const { mainform } = content;
    const inputs = mainform?.mainFormInputs || [] 
    const renderDynamicInputs = () => {
      return inputs.map((field: any, index: number) => (
        <div key={index} className="form-group">
          <label>
            <span
              style={{
                color: styles.textColor
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
      >
        <div className="activism-form-container">
          <div
            className="activism-form"
            style={{
              backgroundColor: styles.backgroundColor,
              width: styles.formWidth,
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
              onClick={() => setActiveSection('privacy')}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  };