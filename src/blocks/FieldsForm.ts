import { Block } from 'payload/types'
export const FormBlock : Block = {
    slug: 'Input',
    fields: [
      {
        name: 'label',
        type: 'text',
        required: true,
      },
      {
        name: 'placeholder',
        type: 'text',
      },
      {
        label:{es:'Tipo', en:'Type'},
        name: 'type',
        type: 'select', 
        saveToJWT: true,
        options: [
          {
            label: {es:'Nombre', en:'Name'},
            value:'name'
          },
          {
            label:{es:'Apellido', en:'Last Name'},
            value:'lastName'
          },
          {
            label:{es:'Email', en:'Email'},
            value:'emailUser'
          },
          {
            label:{es:'Estado', en:'State'},
            value:'state'
          },
          {
            label:{es:'Codigo Postal', en:'Postal Code'},
            value:'postalCode'
          },
          {
            label:{es:'Edad', en:'Age'},
            value:'age'
          },
          {
            label:{es:'Ciudad', en:'City'},
            value:'city'
          },
          {
            label:{es:'Partido', en:'Party'},
            value:'party'
          },
          {
            label:{es:'Mensaje', en:'Message'},
            value:'message'
          },
          {
            label:{es:'Privacidad', en:'Privacy'},
            value:'privacyType'
          },
          {
            label:{es:'Telefono', en:'Phone'},
            value:'phone'
          },
          {
            label:{es:'Direccion', en:'Address'},
            value:'address'
          },
        ]
      },
    ]
  };