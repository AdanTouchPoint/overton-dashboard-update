import React, { useState, useEffect } from "react";
import { ContentState } from "../../lib/contentState";
import "./sb.css";
import { PlusCircle, Trash } from "lucide-react";

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
  // Acceder al contenido de la sección 'mainform'
  const mainformContent = content["mainform"];

  // Estado para rastrear las opciones seleccionadas en 'mainform'
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Lista de opciones disponibles
  const options = [
    { value: "name", label: "Nombre" },
    { value: "postalcode", label: "Código Postal" },
    { value: "email", label: "Email" },
    { value: "state", label: "Estado" },
    { value: "city", label: "Ciudad" },
    { value: "phone", label: "Teléfono" },
  ];

  // Efecto para inicializar selectedOptions con los campos ya existentes en 'mainform'
  useEffect(() => {
    if (activeSection === "mainform" && mainformContent) {
      const existingFields = Object.keys(mainformContent).filter((key) =>
        options.some((option) => option.value === key)
      );
      setSelectedOptions(existingFields);
    }
    console.log(content);
  }, [activeSection, mainformContent]);

  // Manejar la adición de un nuevo campo en 'mainform'
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleAddField = () => {
    if (selectedValue) {
      // Obtener los campos existentes en 'mainFormInputs'
      const existingFields = content['mainform']['mainFormInputs'] || [];
  
      // Verificar que el campo no esté ya agregado
      if (!existingFields.includes(selectedValue)) {
        // Actualizar el estado del contenido en 'mainform' -> 'mainFormInputs'
        const updatedFields = [...existingFields, selectedValue];
        const keys = ['mainform', 'mainFormInputs'];
        onContentChange(keys, updatedFields);
  
        // Reiniciar el campo select
        setSelectedValue('');
      }
    }
  };
  

  // Manejar la eliminación de un campo en 'mainform'
  const handleRemoveField = (field: string) => {
    // Obtener los campos existentes en 'mainFormInputs'
    const existingFields = content["mainform"]["mainFormInputs"] || [];

    // Actualizar la lista eliminando el campo
    const updatedFields = existingFields.filter((input) => input !== field);

    // Actualizar el estado del contenido
    const keys = ["mainform", "mainFormInputs"];
    onContentChange(keys, updatedFields);
  };

  // Función para renderizar los campos agregados en 'mainform'
  const renderDynamicFields = () => {
    const mainFormInputs = content["mainform"]["mainFormInputs"] || [];
    return mainFormInputs?.map((key) => {
      const label =
        options.find((option) => option.value === key)?.label || key;

      return (
        <div key={key} className="content-input">
          <span>{label}</span>
          <button className="remove-btn" onClick={() => handleRemoveField(key)}>
            <Trash className="icon" />
          </button>
        </div>
      );
    });
  };

  // Función para renderizar el contenido de la sección activa (sin incluir los campos dinámicos de 'mainform')
  const renderContent = (contentObj: any, parentKeys: string[] = []) => {
    return Object.entries(contentObj).map(([key, value]) => {
      const currentKeys = [...parentKeys, key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        return (
          <div key={currentKeys.join("-")} className="content-section">
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            {renderContent(value, currentKeys)}
          </div>
        );
      } else if (typeof value === "string") {
        // Excluir los campos dinámicos de 'mainform' si estamos en 'mainform'
        if (activeSection === "mainform" && selectedOptions.includes(key)) {
          return null;
        }
        let inputType = 'text';
        if (key.toLowerCase().includes('color')) {
          inputType = 'color';
        } else if (key.toLowerCase().includes('fontsize')) {
          inputType = 'text';
        } else if (key.toLowerCase().includes('text')) {
          inputType = 'text';
        }
        return (
          <div key={currentKeys.join("-")} className="content-input">
            <label htmlFor={currentKeys.join("-")}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              type={inputType}
              id={currentKeys.join("-")}
              value={value}
              onChange={(e) => onContentChange(currentKeys, e.target.value)}
            />
          </div>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="content-editor">
      <h2>
        Content Editor -{" "}
        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
      </h2>

      {/* Solo mostrar el campo select y botón cuando la sección activa es 'mainform' */}
      {activeSection === "mainform" && (
        <>
          {/* Campo select para agregar nuevos campos a 'mainform' */}
          <h3>user info</h3>
          <div className="select-inputs">
            <label htmlFor="addFieldSelect">Agregar campo</label>
            <select
              id="addFieldSelect"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">-- Seleccione una opción --</option>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={content["mainform"]["mainFormInputs"]?.includes(
                    option.value
                  )}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <button onClick={handleAddField} className="add-btn">
              <PlusCircle className="icon" />
              Agregar
            </button>
          </div>

          {/* Renderizar los campos dinámicos agregados en 'mainform' */}

          {renderDynamicFields()}
        </>
      )}

      {/* Renderizar el contenido de la sección activa */}
      {content[activeSection] ? (
        renderContent(content[activeSection], [activeSection])
      ) : (
        <p>No hay contenido disponible para esta sección.</p>
      )}
    </div>
  );
};

export default ContentEditor;
