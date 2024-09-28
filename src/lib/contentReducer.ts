// contentReducer.ts

import { ContentState } from './contentState';

export interface UpdateContentAction {
  type: 'UPDATE_CONTENT';
  payload: {
    keys: string[];
    value: any;
  };
}

export type ContentAction = UpdateContentAction;

export const contentReducer = (
  state: ContentState,
  action: ContentAction
): ContentState => {
  switch (action.type) {
    case 'UPDATE_CONTENT':
      const { keys, value } = action.payload;
      return updateNestedState(state, keys, value);
    default:
      return state;
  }
};

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
