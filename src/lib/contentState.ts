// contentState.ts
export interface TextStyle {
    text: string;
    textColor: string;
    fontSize: string;
  }
  
  export interface ViewContent {
    title: TextStyle;
    instructions?: TextStyle;
    description?: TextStyle;
    tac?: TextStyle;
    button?: string;
  }
  
  export interface ContentState {
    mainform: ViewContent;
    privacy: ViewContent;
    questions: ViewContent;
    email: ViewContent;
    ty: ViewContent;
  }
  export const initialContentState = {
    mainform: {
      title: {
        text: 'Título principal',
        textColor: '#ffffff',
        fontSize: '16px',
      },
      instructions: {
        text: 'Instrucciones principales',
        textColor: '#ffffff',
        fontSize: '16px',
      },
      tac: {
        text: 'Términos y condiciones',
        textColor: '#ffffff',
        fontSize: '16px',
      },
      button: '#ff0000', // Color del botón
    },
    privacy: {
      title: {
        text: 'Título de privacidad',
        textColor: '#ffffff',
        fontSize: '16px',
      },
    },
    questions: {
      title: {
        text: 'Título de preguntas',
        textColor: '#ffffff',
        fontSize: '16px',
      },
      instructions: {
        text: 'Instrucciones de preguntas',
        textColor: '#ffffff',
        fontSize: '16px',
      },
      button: '#00ff00', // Color del botón
    },
    email: {
      title: {
        text: 'Título de email',
        textColor: '#ffffff',
        fontSize: '16px',
      },
      instructions: {
        text: 'Instrucciones de email',
        textColor: '#ffffff',
        fontSize: '16px',
      },
      button: '#0000ff', // Color del botón
    },
    ty: {
      title: {
        text: 'Título de agradecimiento',
        textColor: '#ffffff',
        fontSize: '16px',
      },
      description: {
        text: 'Descripción de agradecimiento',
        textColor: '#ffffff',
        fontSize: '16px',
      },
      instructions: {
        text: 'Instrucciones de agradecimiento',
        textColor: '#ffffff',
        fontSize: '16px',
      },
    },
  };