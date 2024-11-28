// StyleEditor.tsx

import React from 'react';
import '../sb.css'
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
        <label>Text color: </label>
        <input
          type="color"
          value={styles.textColor}
          onChange={(e) => onStyleChange('textColor', e.target.value)}
        />
      </div>
      <div>
        <label>Label Color: </label>
        <input
          type="color"
          value={styles.labelColor}
          onChange={(e) => onStyleChange('labelColor', e.target.value)}
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
        <label>Link Color: </label>
        <input
          type="color"
          value={styles.linkColor}
          onChange={(e) => onStyleChange('linkColor', e.target.value)}
        />
      </div>
      <div>
        <label>Input Text Color: </label>
        <input
          type="color"
          value={styles.inputTextColor}
          onChange={(e) => onStyleChange('inputTextColor', e.target.value)}
        />
      </div>
      <div>
        <label>Button Color: </label>
        <input
          type="color"
          value={styles.buttonColor}
          onChange={(e) => onStyleChange('buttonColor', e.target.value)}
        />
      </div>
      <div>
        <label>Button Text Color: </label>
        <input
          type="color"
          value={styles.buttonTextColor}
          onChange={(e) => onStyleChange('buttonTextColor', e.target.value)}
        />
      </div>
      <div>
        <label>Button B Color: </label>
        <input
          type="color"
          value={styles.buttonBColor}
          onChange={(e) => onStyleChange('buttonBColor', e.target.value)}
        />
      </div>
      <div>
        <label>Button B Text Color: </label>
        <input
          type="color"
          value={styles.buttonBTextColor}
          onChange={(e) => onStyleChange('buttonBTextColor', e.target.value)}
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
    </div>
  );
};

export default StyleEditor;
