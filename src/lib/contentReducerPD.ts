// contentReducer.ts

import { ContentStatePD } from './contentStatePD';

export interface UpdateContentAction {
  type: 'UPDATE_CONTENT';
  payload: {
    keys: string[];
    value: any;
  };
}

export type ContentActionPD = UpdateContentAction;

// Función auxiliar para actualizar el estado anidado de forma inmutable
const updateNestedState = (state: any, keys: string[], value: any): any => {
  if (keys.length === 0) {
    return value;
  }

  const [firstKey, ...restKeys] = keys;
  return {
    ...state,
    [firstKey]: updateNestedState(state[firstKey], restKeys, value),
  };
};
export const contentReducerPD = (state: ContentStatePD, action: ContentActionPD): ContentStatePD => {
  switch (action.type) {
    case 'UPDATE_CONTENT':
      const { keys, value } = action.payload;
      if (value === undefined) {
        return deleteNestedProperty(state, keys);
      } else {
        return updateNestedState(state, keys, value);
      }
    // Otros casos...
    default:
      return state;
  }
};

// Función para eliminar una propiedad anidada de forma inmutable
const deleteNestedProperty = (state: any, keys: string[]): any => {
  if (keys.length === 1) {
    const { [keys[0]]: deleted, ...rest } = state;
    return rest;
  } else {
    const [firstKey, ...restKeys] = keys;
    return {
      ...state,
      [firstKey]: deleteNestedProperty(state[firstKey], restKeys),
    };
  }
};
