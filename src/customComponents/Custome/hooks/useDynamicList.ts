
import { useReducer } from 'react';

// Hook personalizado para gestionar listas dinámicas en el estado del reducer
export const useDynamicList = (initialItems: any[], contentPath: string[], onContentChange: (keys: string[], value: any) => void) => {
  
  const addItem = (newItem: any) => {
    if (!newItem || (typeof newItem === 'string' && newItem.trim() === '')) return;
    
    const currentItems = Array.isArray(initialItems) ? initialItems : [];

    // Evitar duplicados basados en la propiedad 'text'
    if (currentItems.some(item => item.text === (typeof newItem === 'string' ? newItem : newItem.text))) {
      console.warn('Item ya existe en la lista.');
      return;
    }

    const itemToAdd = typeof newItem === 'string' ? { text: newItem } : newItem;
    const updatedItems = [...currentItems, itemToAdd];
    onContentChange(contentPath, updatedItems);
  };

  const removeItem = (index: number) => {
    const currentItems = Array.isArray(initialItems) ? initialItems : [];
    const updatedItems = currentItems.filter((_, i) => i !== index);
    onContentChange(contentPath, updatedItems);
  };

  const updateItem = (index: number, property: string, value: string) => {
    const currentItems = Array.isArray(initialItems) ? initialItems : [];
    const updatedItems = [...currentItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [property]: value,
    };
    onContentChange(contentPath, updatedItems);
  };

  return {
    items: Array.isArray(initialItems) ? initialItems : [],
    addItem,
    removeItem,
    updateItem,
  };
};
