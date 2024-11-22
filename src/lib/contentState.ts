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
  export interface inputOptions{
    name?: string;
    postalCode?: string;
    city?: string;
    phone?: string;
    email?: string;
    state?:string;
  }
  export interface styleProps {
    backgroundColor: string;
    borderRadius: string;
    fontFamily: string;
    formPadding: string;
    formWidth: string;
    inputBackground: string;
  }
  
  export interface ContentState {
    mainform: ViewContent;
    style: styleProps;
    //mainFormInputs: inputOptions;
    emailform?: ViewContent;
    emailreview?: ViewContent
    privacy?: ViewContent;
    questions?: ViewContent;
    email?: ViewContent;
    ty: ViewContent;
  }
  export const initialContentStateSB = {
    clientId:'',
    projectData: {
      title:'',
      description:'',
      campaignType: '',
      id:''
    },
    style:{
      backgroundColor:"#2c3e50",
      borderRadius: "10px",
      fontFamily:"Arial, sans-serif",
      formPadding: "30px",
      formWidth: "400px",
      inputBackground:"#34495e"
    },
    mainform: {
      title: {
        text: 'Título principal',
        textColor: '#ffffff',
        fontSize: '16px',
      },
      mainFormInputs:[{
        text: 'name',
        textColor: '#ffffff',
        fontSize: '16px',
      }],
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
      privacyOptions: {
        public: {
          text: 'Título de privacidad',
          textColor: '#ffffff',
          fontSize: '16px', 
        },
        confidential: {
          text: 'Título de privacidad',
          textColor: '#ffffff',
          fontSize: '16px', 
        },
        nameWithHeld: {
          text: 'Título de privacidad',
          textColor: '#ffffff',
          fontSize: '16px', 
        }
      }
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
      questions:[{
        text: 'question1',
        textColor: '#ffffff',
        fontSize: '16px',
      }],
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