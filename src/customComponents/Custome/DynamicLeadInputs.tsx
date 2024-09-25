import React, { useState } from "react";
//import './dynamicQuestions.css' // Importa el archivo CSS
import { PlusCircle, Trash } from "lucide-react"
export default function DynamicLeadInputs({ projectData, setProjectData }) {
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
      mainFormInputs: [newInputs],
    });
  };
  const removeInput = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };
  const isOptionDisabled = (option: string) => {
    return inputs.includes(option)
  }

  return (
    <div className="select-label">
    {inputs.map((input, index) => (
      <div key={index} className="input-row">
        <select
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className="input"
        >
            <option value="">Seleccione una opción</option>
            <option value="name" disabled={isOptionDisabled("name")}>Nombre</option>
            <option value="cp" disabled={isOptionDisabled("cp")}>Código Postal</option>
            <option value="email" disabled={isOptionDisabled("email")}>Email</option>
            <option value="state" disabled={isOptionDisabled("state")}>Estado</option>
            <option value="city" disabled={isOptionDisabled("city")}>Ciudad</option>
            <option value="phone" disabled={isOptionDisabled("phone")}>Teléfono</option>
        </select>
        <button className="remove-btn" onClick={() => removeInput(index)}>
          <Trash className="icon" />
        </button>
      </div>
    ))}
    <button onClick={addInput} className="add-btn">
      <PlusCircle className="icon" />
      Add Field
    </button>
  </div>
  );
}


