// StyleEditor.tsx

import React from 'react';
import './sb.css'
import { Smartphone, TabletSmartphone, AppWindowMac } from 'lucide-react';

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
        <button onClick={(e)=> onStyleChange('formWidth','400px')} >
          <Smartphone className="icon"/>
        </button>
        <button onClick={(e)=> onStyleChange('formWidth','800px')}>
          <TabletSmartphone className="icon"/>
        </button>
        <button onClick={(e)=> onStyleChange('formWidth','1200px')}> 
          <AppWindowMac className="icon"/>
        </button>
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
