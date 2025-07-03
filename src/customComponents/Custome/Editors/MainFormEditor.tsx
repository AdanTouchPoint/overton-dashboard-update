
import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { useDynamicList } from '../hooks/useDynamicList';
import GenericSectionEditor from './GenericSectionEditor';

interface MainFormEditorProps {
  content: any;
  onContentChange: (keys: string[], value: any) => void;
}

const MainFormEditor: React.FC<MainFormEditorProps> = ({ content, onContentChange }) => {
  const [selectedValue, setSelectedValue] = useState('');
  
  const mainFormInputs = content?.mainFormInputs || [];
  const { items, addItem, removeItem } = useDynamicList(
    mainFormInputs,
    ['mainform', 'mainFormInputs'],
    onContentChange
  );

  const availableOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'postalcode', label: 'Código Postal' },
    { value: 'email', label: 'Email' },
    { value: 'state', label: 'Estado' },
    { value: 'city', label: 'Ciudad' },
    { value: 'phone', label: 'Teléfono' },
  ];

  const handleAdd = () => {
    if (selectedValue) {
      addItem({ text: selectedValue });
      setSelectedValue('');
    }
  };

  return (
    <>
      <h3>User Info Fields</h3>
      <div className="form-group">
        <label htmlFor="addFieldSelect">Agregar campo</label>
        <select
          id="addFieldSelect"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="">-- Seleccione --</option>
          {availableOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={items.some(field => field.text === option.value)}
            >
              {option.label}
            </option>
          ))}
        </select>
        <button onClick={handleAdd} className="add-btn">
          <PlusCircle className="icon" />
          Agregar
        </button>
      </div>

      {items.map((field, index) => (
        <div key={index} className="form-group">
          <label>{field.text}</label>
          <input type="text" value={field.text} disabled />
          <button className="remove-btn" onClick={() => removeItem(index)}>
            <MinusCircle className="icon" />
          </button>
        </div>
      ))}

      <hr />

      <h3>Other Fields</h3>
      <GenericSectionEditor 
        content={content} 
        onContentChange={onContentChange} 
        parentKeys={['mainform']} 
      />
    </>
  );
};

export default MainFormEditor;
