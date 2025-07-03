
import React from 'react';

interface GenericSectionEditorProps {
  content: any;
  onContentChange: (keys: string[], value: any) => void;
  parentKeys: string[];
}

const GenericSectionEditor: React.FC<GenericSectionEditorProps> = ({ content, onContentChange, parentKeys }) => {

  const renderContent = (contentObj: any, currentParentKeys: string[]) => {
    return Object.entries(contentObj).map(([key, value]) => {
      const newKeys = [...currentParentKeys, key];

      // No renderizar arrays, serán manejados por editores específicos
      if (Array.isArray(value)) {
        return null;
      }

      if (typeof value === 'object' && value !== null) {
        return (
          <div key={newKeys.join('-')} className="form-group-nested">
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            {renderContent(value, newKeys)}
          </div>
        );
      }

      if (typeof value === 'string') {
        const inputType = key.toLowerCase().includes('color') ? 'color' : 'text';
        return (
          <div key={newKeys.join('-')} className="form-group">
            <label htmlFor={newKeys.join('-')}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              type={inputType}
              id={newKeys.join('-')}
              value={value}
              onChange={(e) => onContentChange(newKeys, e.target.value)}
            />
          </div>
        );
      }

      return null;
    });
  };

  return <>{renderContent(content, parentKeys)}</>;
};

export default GenericSectionEditor;
