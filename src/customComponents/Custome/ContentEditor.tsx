import React from 'react';
import { ContentState } from '../../lib/contentState';
import './sb.css'

interface ContentEditorProps {
  content: ContentState;
  activeSection: string;
  onContentChange: (keys: string[], value: any) => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({
  content,
  activeSection,
  onContentChange,
}) => {
  // Access the content for the active section
  const activeContent = content[`${activeSection}`];

  const renderContent = (contentObj: any, parentKeys: string[] = []) => {
    return Object.entries(contentObj).map(([key, value]) => {
      const currentKeys = [...parentKeys, key];

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return (
          <div key={currentKeys.join('-')} className="content-section">
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            {renderContent(value, currentKeys)}
          </div>
        );
      } else {
        // Determine the input type based on the property name
        let inputType = 'text';
        if (key.toLowerCase().includes('color')) {
          inputType = 'color';
        } else if (key.toLowerCase().includes('fontsize')) {
          inputType = 'number';
        } else if (key.toLowerCase().includes('text')) {
          inputType = 'text';
        }

        return (
          <div key={currentKeys.join('-')} className="content-input">
            <label htmlFor={currentKeys.join('-')}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              type={inputType}
              id={currentKeys.join('-')}
              value={value}
              onChange={(e) => onContentChange(currentKeys, e.target.value)}
            />
          </div>
        );
      }
    });
  };

  return (
    <div className="content-editor">
      <h2>
        Content Editor -{' '}
        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
      </h2>
      {activeContent ? renderContent(activeContent, [`${activeSection}`]) : (
        <p>No content available for this section.</p>
      )}
    </div>
  );
};

export default ContentEditor;
