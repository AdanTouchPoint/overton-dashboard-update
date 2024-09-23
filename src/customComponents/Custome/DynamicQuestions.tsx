import React, { useState } from "react";
//import './dynamicQuestions.css' // Importa el archivo CSS
import { PlusCircle, Trash } from "lucide-react"
export default function DynamicInputs({ projectData, setProjectData }) {
  const [inputs, setInputs] = useState<string[]>([""]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    setProjectData({
      ...projectData,
      questions: [newInputs],
    });
  };
  const removeInput = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  return (
    <div className="container">
      {inputs.map((input, index) => (
        <div key={index} className="input-row">
          <input
            type="text"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`Entrada ${index + 1}`}
            className="input"
          />
          <button className="remove-btn" onClick={() => removeInput(index)}>
            <Trash className="icon" />
          </button>
        </div>
      ))}
      <button onClick={addInput} className="add-btn">
        <PlusCircle className="icon" />
        Agregar Entrada
      </button>
    </div>
  );
}


