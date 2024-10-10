import { CollectionConfig } from 'payload/types';
import {isAdminOrSelf} from '../access/isAdminOrSelf'
import {isAdminFieldLevel} from '../access/isAdmin'
import {FormBlock} from '../blocks/FieldsForm'
import CustomeCampaingList from '../customComponents/Custome/CustomeCampaignList'
import {beforeChangeHook} from '../hooks/beforeCreateCampaing' 
// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const SubmissionBuilder: CollectionConfig = {
  slug: 'SB',
  admin: {
    components: {
      views: {
        Edit: {
          Default: {
            actions: [CustomeCampaingList],
          },
        },
      }
    },
    description: {
      es: "Aqui puedes cambiar la imagen y los textos de la pagina principal",
      en: "Here you can change the background image and text of the main page",
    },
  },
  access:{
    // Only admins can create users
  create: isAdminOrSelf,
  // Admins can read all, but any other logged in user can only read themselves
  read: isAdminOrSelf,
  // Admins can update all, but any other logged in user can only update themselves
  update: isAdminOrSelf,
  // Only admins can delete
  delete: isAdminOrSelf,
  },
  fields: [
      {
          type: "group",
          name: "mainform",
          label: { es: "Formulario principal", en: "Main Form" },
          fields: [
            {
              label: { es: "Titulo Principal", en: "Main Title" },
              name: "title", // required
              type: "group", // required
              fields:[{
                label: "text",
                name: "text",
                type:"text"
              },
              {
                label: "fontSize",
                name: "fontSize",
                type:"text"
              },
              {
                label: "colorText",
                name: "colorText",
                type:"text"
              },
            ]
            },

            {
              label: { es: "Instrucciones", en: "Instructions" },
              name: "instructions", // required
              type: "group", // required
              fields:[
                {
                  label: "text",
                  name: "text",
                  type:"text"
                },
                {
                  label: "fontSize",
                  name: "fontSize",
                  type:"text"
                },
                {
                  label: "colorText",
                  name: "colorText",
                  type:"text"
                },   
              ]
            },
            {
              label: { es: "inputs", en: "inputs" },
              name: "mainFormInputs", // required
              type: "array", // required
              fields:[
                {
                  label: "text",
                  name: "text",
                  type:"text"
                },
                {
                  label: "fontSize",
                  name: "fontSize",
                  type:"text"
                },
                {
                  label: "colorText",
                  name: "colorText",
                  type:"text"
                },   
              ]
            },
          ],
      },
      {
          type: "group",
          name: "questions",
          label: { es: "Preguntas", en: "Questions" },
          fields: [
            {
              type: "row",
              fields: [
                {
                  label: { es: "Titulo", en: "Title" },
                  name: "title", // required
                  type: "group", // required
                  fields:[{
                    label: "text",
                    name: "text",
                    type:"text"
                  },
                  {
                    label: "fontSize",
                    name: "fontSize",
                    type:"text"
                  },
                  {
                    label: "colorText",
                    name: "colorText",
                    type:"text"
                  },
                ]
                },
                  {
                    label: { es: "Instrucciones", en: "Instructions" },
                    name: "instructions", // required
                    type: "group", // required
                    fields:[
                      {
                        label: "text",
                        name: "text",
                        type:"text"
                      },
                      {
                        label: "fontSize",
                        name: "fontSize",
                        type:"text"
                      },
                      {
                        label: "colorText",
                        name: "colorText",
                        type:"text"
                      },   
                    ]
                  },
                  {
                    label: { es: "preguntas", en: "questions" },
                    name: "questions", // required
                    type: "array", // required
                    fields:[
                      {
                        label: "text",
                        name: "text",
                        type:"text"
                      },
                      {
                        label: "fontSize",
                        name: "fontSize",
                        type:"text"
                      },
                      {
                        label: "colorText",
                        name: "colorText",
                        type:"text"
                      },   
                    ]
                  },
              ]
            }
          ]
      },  
      {
          type: "group",
          name: "privacy",
          label: { es: "Privacidad", en: "Privacy" },
          fields: [
            {
              type: "row",
              fields: [
                {
                  label: { es: "Titulo", en: "Title" },
                  name: "title", // required
                  type: "group", // required
                  fields:[{
                    label: "text",
                    name: "text",
                    type:"text"
                  },
                  {
                    label: "fontSize",
                    name: "fontSize",
                    type:"text"
                  },
                  {
                    label: "colorText",
                    name: "colorText",
                    type:"text"
                  },
                ]
                },
                {
                  label: { es: "privacidad", en: "privacy" },
                  name: "privacyOptions", // required
                  type: "group", // required
                  fields:[
                    {
                      name: 'confidential',
                      type: 'group',
                      fields:[
                        {
                          label: "text",
                          name: "text",
                          type:"text"
                        },
                        {
                          label: "fontSize",
                          name: "fontSize",
                          type:"text"
                        },
                        {
                          label: "colorText",
                          name: "colorText",
                          type:"text"
                        },
                      ]
                    },
                    {
                      name: 'public',
                      type: 'group',
                      fields:[
                        {
                          label: "text",
                          name: "text",
                          type:"text"
                        },
                        {
                          label: "fontSize",
                          name: "fontSize",
                          type:"text"
                        },
                        {
                          label: "colorText",
                          name: "colorText",
                          type:"text"
                        },
                      ]
                    },
                    {
                      name: 'nameWithHeld',
                      type: 'group',
                      fields:[
                        {
                          label: "text",
                          name: "text",
                          type:"text"
                        },
                        {
                          label: "fontSize",
                          name: "fontSize",
                          type:"text"
                        },
                        {
                          label: "colorText",
                          name: "colorText",
                          type:"text"
                        },
                      ]
                    },
                ]
                },
              ]
            }
          ]
      },
      {
        type: "group",
        name: "emailPreview",
        label: { es: "Previsualizacion", en: "Email Preview" },
        fields: [
          {
            type: "row",
            fields: [
              {
                label: { es: "Titulo", en: "Title" },
                name: "title", // required
                type: "group", // required
                fields:[{
                  label: "text",
                  name: "text",
                  type:"text"
                },
                {
                  label: "fontSize",
                  name: "fontSize",
                  type:"text"
                },
                {
                  label: "colorText",
                  name: "colorText",
                  type:"text"
                },
              ]
              },
                {
                  label: { es: "Instrucciones", en: "Instructions" },
                  name: "instructions", // required
                  type: "group", // required
                  fields:[
                    {
                      label: "text",
                      name: "text",
                      type:"text"
                    },
                    {
                      label: "fontSize",
                      name: "fontSize",
                      type:"text"
                    },
                    {
                      label: "colorText",
                      name: "colorText",
                      type:"text"
                    },   
                  ]
                },
            ],
          },
        ],
    }, 
      {
        type: "group",
        name: "successPage",
        label: { es: "deploy exitoso", en: "Success Page"},
        fields: [
          {
            type: "row",
            fields: [
              {
                  label: { es: "Titulo", en: "Title" },
                  name: "title", // required
                  type: "group", // required
                  fields:[{
                    label: "text",
                    name: "text",
                    type:"text"
                  },
                  {
                    label: "fontSize",
                    name: "fontSize",
                    type:"text"
                  },
                  {
                    label: "colorText",
                    name: "colorText",
                    type:"text"
                  },
                ]
                },
                  {
                    label: { es: "descripcion", en: "Description" },
                    name: "description", // required
                    type: "group", // required
                    fields:[
                      {
                        label: "text",
                        name: "text",
                        type:"text"
                      },
                      {
                        label: "fontSize",
                        name: "fontSize",
                        type:"text"
                      },
                      {
                        label: "colorText",
                        name: "colorText",
                        type:"text"
                      },   
                    ]
                  },
                  {
                    label: { es: "Instrucciones", en: "Instructions" },
                    name: "instructions", // required
                    type: "group", // required
                    fields:[
                      {
                        label: "text",
                        name: "text",
                        type:"text"
                      },
                      {
                        label: "fontSize",
                        name: "fontSize",
                        type:"text"
                      },
                      {
                        label: "colorText",
                        name: "colorText",
                        type:"text"
                      },   
                    ]
                  },
            ],
          },
        ],
    },
      {
          name: "clientId",
          type: "relationship",
          relationTo: "users",
          required: true,
          admin: { hidden: true },
          // If user is not admin, set the site by default
          // to the first site that they have access to
          defaultValue: ({ user }) => {
            if (user) {
              return user.id;
            }
          },
          access: {
            // Only admins can create users
            create: isAdminFieldLevel,
            read: isAdminFieldLevel,
            // Admins can update all, but any other logged in user can only update themselves
            update: isAdminFieldLevel,
          },
      },
      {
          name: "active", // required
          type: "checkbox", // required
          label: "Aplicar",
          defaultValue: true,
          admin: {
            readOnly: true,
          },
      },
  ],
  hooks: {
    beforeChange: [beforeChangeHook]
  }
}

export default SubmissionBuilder;