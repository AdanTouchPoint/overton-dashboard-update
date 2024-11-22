import React, { useState, useEffect } from "react";
import { ContentState } from "../../../lib/contentState";
import "../sb.css";
import { PlusCircle, MinusCircle } from "lucide-react";
import  {deployProject} from '../../../lib/requestsAPI'
import { useAuth } from "payload/components/utilities";
import { getProjectInfo } from "../../../lib/vercelRequests";
import { updateCampaignData } from "../../../lib/requestsAPI";
interface ContentEditorProps {
  setActiveForm: (value: string) => void;
  content: ContentState;
  activeSection: string;
  onContentChange: (keys: string[], value: any) => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({
  setActiveForm,
  content,
  activeSection,
  onContentChange,
}) => {
  const user = useAuth();
const userId = user.user.id;
  // Acceder al contenido de la sección 'mainform'
  const mainformContent = content["mainform"];
  // Estado para rastrear las opciones seleccionadas en 'mainform'
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [questionsValue, setQuestionsValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
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
  }, [activeSection, mainformContent]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    const path = ['clientId'];
    const clientId = userId
    onContentChange(path,clientId)
  }, []);
  const handleAddField = () => {
    if (selectedValue) {
      // Obtener los campos existentes en 'mainFormInputs'
      const existingFields = content["mainform"]["mainFormInputs"] || [];

      // Verificar que el campo no esté ya agregado
      if (!existingFields.some((field: any) => field.text === selectedValue)) {
        // Crear el nuevo campo con propiedades predeterminadas
        const newField = {
          text: selectedValue,
          textColor: "#ffffff",
          fontSize: "16px",
        };

        // Actualizar el estado del contenido en 'mainform' -> 'mainFormInputs'
        const updatedFields = [...existingFields, newField];
        const keys = ["mainform", "mainFormInputs"];
        onContentChange(keys, updatedFields);

        // Reiniciar el campo select
        setSelectedValue("");
      }
    }
  };
  const handleRemoveField = (fieldText: string) => {
    // Obtener los campos existentes en 'mainFormInputs'
    const existingFields = content["mainform"]["mainFormInputs"] || [];

    // Actualizar la lista eliminando el campo
    const updatedFields = existingFields.filter(
      (field: any) => field.text !== fieldText
    );

    // Actualizar el estado del contenido
    const keys = ["mainform", "mainFormInputs"];
    onContentChange(keys, updatedFields);
  };
  const handleFieldChange = (
      index: number,
      property: string,
      value: string
    ) => {
      const existingFields = content["mainform"]["mainFormInputs"] || [];
      const updatedFields = [...existingFields];
      updatedFields[index] = {
        ...updatedFields[index],
        [property]: value,
      };
      const keys = ["mainform", "mainFormInputs"];
      onContentChange(keys, updatedFields);
  };
  const renderDynamicFields = () => {
      const mainFormInputs = content["mainform"]["mainFormInputs"] || [];
      return mainFormInputs.map((field: any, index: number) => {
        return (
          <div key={index} className="content-input">
            <label>
              Text:
              <input
                type="text"
                value={field.text}
                disabled
              />
            </label>
            <label>
              Text Color:
              <input
                type="color"
                value={field.textColor}
                onChange={(e) =>
                  handleFieldChange(index, "textColor", e.target.value)
                }
              />
            </label>
            <label>
              Font Size:
              <input
                type="text"
                value={field.fontSize}
                onChange={(e) =>
                  handleFieldChange(index, "fontSize", e.target.value)
                }
              />
            </label>
            <button
              className="remove-btn"
              onClick={() => handleRemoveField(field.text)}
            >
              <MinusCircle className="icon" />
            </button>
          </div>
        );
      });
  };
  const handleChangeQuestions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionsValue(e.target.value);
  };
  const handleAddQuestion = () => {
    if (questionsValue.trim() !== "") {
      const existingQuestions = content["questions"]["questions"] || [];
      const newField = {
        text: questionsValue,
        textColor: "#ffffff",
        fontSize: "16px",
      };
      const updatedQuestions = [...existingQuestions, newField];
      const keys = ["questions", "questions"];
      onContentChange(keys, updatedQuestions);
      setQuestionsValue("");
    }
  };
  const handleRemoveQuestion = (fieldText: string) => {
    const existingQuestions = content["questions"]["questions"] || [];
    const updatedQuestions = existingQuestions.filter(
      (field: any) => field.text !== fieldText
    );
    const keys = ["questions", "questions"];
    onContentChange(keys, updatedQuestions);
  };
  const handleEditQuestion = (
    index: number,
    property: string,
    value: string
  ) => {
    const existingFields = content["questions"]["questions"] || [];
    const updatedFields = [...existingFields];
    updatedFields[index] = {
      ...updatedFields[index],
      [property]: value,
    };
    const keys = ["questions", "questions"];
    onContentChange(keys, updatedFields);
  };
  const renderDynamicQuestions = () => {
    const questions = content["questions"]["questions"] || [];
    return questions.map((question, index) => {
      return (
        <div key={index} className="content-input">
          <label>
            Text:
            <input
              type="text"
              value={question.text}
              onChange={(e) => handleEditQuestion(index, "text", e.target.value)}
            />
          </label>
          <label>
            Text Color:
            <input
              type="color"
              value={question.textColor}
              onChange={(e) =>
                handleEditQuestion(index, "textColor", e.target.value)
              }
            />
          </label>
          <label>
            Font Size:
            <input
              type="text"
              value={question.fontSize}
              onChange={(e) =>
                handleEditQuestion(index, "fontSize", e.target.value)
              }
            />
          </label>
          <button
            className="remove-btn"
            onClick={() => handleRemoveQuestion(question.text)}
          >
            <MinusCircle className="icon" />
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
        // Excluir el campo 'questions' si estamos en la sección 'questions'
        if (activeSection === "questions" && key === "questions") {
          return null;
        }
        // Lógica para determinar el tipo de input
        let inputType = "text";
        if (key.toLowerCase().includes("color")) {
          inputType = "color";
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
  const deploy = async (content) => {
try {
  const deploy = await deployProject(content)
  const saveData = updateCampaignData(content)
  setActiveForm('success')
} catch (error) {
  throw new Error("Something goes wrong!");
  
}
  };
  return (
    <div className="content-editor">
      <h2>
        Content Editor -{" "}
        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
      </h2>

      {activeSection === "mainform" && (
        <>
          <h3>User Info</h3>
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
                  disabled={content["mainform"]["mainFormInputs"]?.some(
                    (field: any) => field.text === option.value
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

      {activeSection === "questions" && (
        <>
          <h3>Preguntas</h3>
          <div className="select-inputs">
            <div className="content-input">
              <label>Pregunta:</label>
              <input
                type="text"
                value={questionsValue}
                onChange={handleChangeQuestions}
              />
            </div>
            <button onClick={handleAddQuestion} className="add-btn">
              <PlusCircle className="icon" />
              Agregar
            </button>
          </div>
          {/* Renderizar las preguntas agregadas */}
          {renderDynamicQuestions()}
        </>
      )}

      {/* Renderizar el contenido de la sección activa */}
      {content[activeSection] ? (
        renderContent(content[activeSection], [activeSection])
      ) : (
        <p>No hay contenido disponible para esta sección.</p>
      )}
      <button onClick={() => deploy(content)}>Deploy</button>
    </div>
  );
};

export default ContentEditor;
