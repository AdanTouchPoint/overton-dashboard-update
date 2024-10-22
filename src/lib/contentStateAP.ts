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
  
  export interface ContentStateAP {
    mainform: ViewContent;
    //mainFormInputs: inputOptions;
    emailform: ViewContent;
    emailreview: ViewContent;
    ty: ViewContent;
  }
  export const initialContentStateAP = {
    clientId:'',
    projectData: {
      title:'',
      description:'',
      campaignType: '',
      id:''
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
    emailform: {
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
    emailreview: {
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