
import { ContentState, initialContentStateSB } from './contentState';

// --- Action Interfaces ---
export interface InitializeFormAction {
  type: 'INITIALIZE_FORM';
  payload: {
    mode: 'create' | 'edit';
    campaignEditData?: any; // Debería tener un tipo más específico
    projectData?: any;     // Debería tener un tipo más específico
  };
}

export interface UpdateContentAction {
  type: 'UPDATE_CONTENT';
  payload: {
    keys: string[];
    value: any;
  };
}

export interface UpdateStyleAction {
  type: 'UPDATE_STYLE';
  payload: {
    key: string;
    value: string;
  };
}

export type ContentAction = InitializeFormAction | UpdateContentAction | UpdateStyleAction;

// --- Helper Functions (Inmutabilidad) ---
const updateNestedState = (state: any, keys: string[], value: any): any => {
  if (keys.length === 0) {
    return value;
  }
  const [firstKey, ...restKeys] = keys;
  const currentState = state || {};
  return {
    ...currentState,
    [firstKey]: updateNestedState(currentState[firstKey], restKeys, value),
  };
};

// --- Reducer ---
export const contentReducerRefactored = (state: ContentState, action: ContentAction): ContentState => {
  switch (action.type) {
    case 'INITIALIZE_FORM': {
      const { mode, campaignEditData, projectData } = action.payload;
      if (mode === 'edit' && campaignEditData) {
        // En modo edición, usamos los datos existentes de la campaña
        return {
          ...campaignEditData,
          projectData: projectData, // Aseguramos que projectData también se incluya
        };
      }
      if (mode === 'create' && projectData) {
        // En modo creación, partimos del estado inicial y añadimos los datos del proyecto
        return {
          ...initialContentStateSB,
          projectData: projectData,
        };
      }
      return initialContentStateSB; // Estado por defecto
    }

    case 'UPDATE_CONTENT': {
      const { keys, value } = action.payload;
      return updateNestedState(state, keys, value);
    }

    case 'UPDATE_STYLE': {
      const { key, value } = action.payload;
      return {
        ...state,
        style: {
          ...state.style,
          [key]: value,
        },
      };
    }

    default:
      return state;
  }
};
