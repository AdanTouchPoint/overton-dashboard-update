// contentState.ts
export interface TextStyle {
    text: string;
  }
  
  export interface ViewContent {
    title: TextStyle;
    instructions?: TextStyle;
    description?: TextStyle;
    tac?: TextStyle;
    button?: string;
  }
  export interface typ {
    tymessage: TextStyle;
    tymessage2: TextStyle;
    shareText: TextStyle;
    shareMessage: TextStyle;
    shareUrl : TextStyle;
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
    textColor: string;
    labelColor: string;
    inputBackground: string;
    linkColor: string;
    inputTextColor: string;
    buttonColor: string;
    buttonTextColor: string;
    buttonBColor: string;
    buttonBTextColor: string;
    formWidth: string; 
  }
  
  export interface ContentStatePD {
    mainform: ViewContent;
    style: styleProps;
    //mainFormInputs: inputOptions;
    email: ViewContent;
    emailreview: ViewContent;
    ty: typ;
  }
  export const initialContentStatePD = {
    clientId:'',
    projectData: {
      title:'',
      description:'',
      campaignType: '',
      id:''
    },
    style: {
      backgroundColor: '#2c3e50',
      textColor: '#34495e',
      labelColor: '#34495e',
      inputBackground: '#34495e',
      linkColor: '#34495e',
      inputTextColor: '#34495e',
      buttonColor: '#34495e',
      buttonTextColor: '#34495e',
      buttonBColor: '#34495e',
      buttonBTextColor: '#34495e',
      formWidth: '400px'
    },
    mainform: {
      title: {
        text: 'Título principal',

      },
      mainFormInputs:[{
        text: 'name',
      }],
      instructions: {
        text: 'Instrucciones principales',

      },
      tac: {
        text: 'Términos y condiciones',

      },

    },
    email: {
      title: {
        text: 'Título de email',

      },
      instructions: {
        text: 'Instrucciones de email',

      },
      message: {
        text: 'Email Message',
      },
      tweetMessage: {
        text: 'Tweet Message',
      },

    },
    emailreview: {
        title: {
          text: 'Título de email',
        },
        instructions: {
          text: 'Instrucciones de email',
        },

    },
    ty: {
      tymessage: {
        text: 'Título de agradecimiento',

      },
      tymessage2: {
        text: 'Descripción de agradecimiento',

      },
      shareText: {
        text: 'Instrucciones de agradecimiento',

      },
      shareMessage: {
        text: 'Instrucciones de agradecimiento',

      },
      shareUrl: {
        text: 'Instrucciones de agradecimiento',

      },
    },
  };