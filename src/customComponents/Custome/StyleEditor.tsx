// StyleEditor.tsx

import React from 'react';
import './sb.css'
interface StyleEditorProps {
  styles: { [key: string]: string };
  onStyleChange: (key: string, value: string) => void;
}

const StyleEditor: React.FC<StyleEditorProps> = ({ styles, onStyleChange }) => {
  return (
    <div className="style-editor">
      <h2>Editor de Estilos</h2>
      <div>
        <label>Background Color: </label>
        <input
          type="color"
          value={styles.backgroundColor}
          onChange={(e) => onStyleChange('backgroundColor', e.target.value)}
        />
      </div>
      <div>
        <label>Input Background: </label>
        <input
          type="color"
          value={styles.inputBackground}
          onChange={(e) => onStyleChange('inputBackground', e.target.value)}
        />
      </div>
      <div>
        <label>Font Family: </label>
        <input
          type="text"
          value={styles.fontFamily}
          onChange={(e) => onStyleChange('fontFamily', e.target.value)}
        />
      </div>
      <div>
        <label>Form Width: </label>
        <input
          type="text"
          value={styles.formWidth}
          onChange={(e) => onStyleChange('formWidth', e.target.value)}
        />
      </div>
      <div>
        <label>Form Padding: </label>
        <input
          type="text"
          value={styles.formPadding}
          onChange={(e) => onStyleChange('formPadding', e.target.value)}
        />
      </div>
      <div>
        <label>Border Radius: </label>
        <input
          type="text"
          value={styles.borderRadius}
          onChange={(e) => onStyleChange('borderRadius', e.target.value)}
        />
      </div>
    </div>
  );
};

export default StyleEditor;
