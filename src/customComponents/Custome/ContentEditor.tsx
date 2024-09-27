import React from 'react';
import './style-editor.css'

// Props para ContentEditor
interface ContentEditorProps {
  content: any;
  onContentChange: (key: string, value: any) => void;
}

// Componente ContentEditor
const ContentEditor: React.FC<ContentEditorProps> = ({ content, onContentChange }) => {
  const handleInputChange = (key: string, subKey: string, value: string) => {
    // Actualizamos solo la propiedad correcta dentro del objeto
    onContentChange(key, { ...content[key], [subKey]: value });
  };

  return (
    <div className="content-editor">
      <h2>Element Editor</h2>
      {Object.entries(content).map(([key, value]) => (
        <div key={key} className="style-input">
          <h3>{key}</h3>

          {/* Si la propiedad es un objeto (con text, textColor, fontSize) */}
          {typeof value === 'object' && value !== null ? (
            <>
              <div>
                <label htmlFor={`${key}-text`}>Text:</label>
                <input
                  type="text"
                  id={`${key}-text`}
                  value={value.text}
                  onChange={(e) => handleInputChange(key, 'text', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor={`${key}-textColor`}>Text Color:</label>
                <input
                  type="color"
                  id={`${key}-textColor`}
                  value={value.textColor}
                  onChange={(e) => handleInputChange(key, 'textColor', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor={`${key}-fontSize`}>Font Size:</label>
                <input
                  type="text"
                  id={`${key}-fontSize`}
                  value={value.fontSize}
                  onChange={(e) => handleInputChange(key, 'fontSize', e.target.value)}
                />
              </div>
            </>
          ) : (
            // Si es un valor simple (como button)
            <div>
              <label htmlFor={key}>{key}:</label>
              <input
                type="color"
                id={key}
                value={value as string}
                onChange={(e) => onContentChange(key, e.target.value)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


export default ContentEditor;