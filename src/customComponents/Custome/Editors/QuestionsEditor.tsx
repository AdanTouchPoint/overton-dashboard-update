
import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { useDynamicList } from '../hooks/useDynamicList';

interface QuestionsEditorProps {
  content: any;
  onContentChange: (keys: string[], value: any) => void;
}

const QuestionsEditor: React.FC<QuestionsEditorProps> = ({ content, onContentChange }) => {
  const [newQuestion, setNewQuestion] = useState('');

  const questions = content?.questions || [];
  const { items, addItem, removeItem, updateItem } = useDynamicList(
    questions,
    ['questions', 'questions'],
    onContentChange
  );

  const handleAdd = () => {
    if (newQuestion.trim()) {
      addItem({ text: newQuestion });
      setNewQuestion('');
    }
  };

  return (
    <>
      <h3>Questions</h3>
      <div className="form-group">
        <label>New Question:</label>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button onClick={handleAdd} className="add-btn">
          <PlusCircle className="icon" />
          Agregar
        </button>
      </div>

      {items.map((question, index) => (
        <div key={index} className="form-group">
          <input
            type="text"
            value={question.text}
            onChange={(e) => updateItem(index, 'text', e.target.value)}
          />
          <button className="remove-btn" onClick={() => removeItem(index)}>
            <MinusCircle className="icon" />
          </button>
        </div>
      ))}
    </>
  );
};

export default QuestionsEditor;
