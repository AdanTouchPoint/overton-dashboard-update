import React from 'react';
import './style-editor.css'
interface StyleEditorProps {
  styles: Record<string, string>;
  onStyleChange: (key: string, value: string) => void;
}

const StyleEditor: React.FC<StyleEditorProps> = ({ styles, onStyleChange }) => {
  return (
    <div className="style-editor">
      <h2>Page Style Editor</h2>
      {Object.entries(styles).map(([key, value]) => (
        <div key={key} className="style-input">
          <label htmlFor={key}>{key}:</label>
          <input
            type="text"
            id={key}
            value={value}
            onChange={(e) => onStyleChange(key, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default StyleEditor;