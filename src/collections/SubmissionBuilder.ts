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
          name: "projectData",
          label: { es: "datos de proyecto", en: "Project Data" },
          fields: [
            {
              label: "title",
              name: "title",
              type:"text"
            },
            {
              label: "repo",
              name: "repo",
              type:"text"
            },
            {
              label: "description",
              name: "description",
              type:"text"
            },
            {
              label: "campaign type",
              name: "campaignType",
              type:"text"
            },
            {
              label: "campaign URL",
              name: "homepage",
              type:"text"
            },
            {
              label: "clientId",
              name: "clientId",
              type:"text"
            },
          ]
      },
      {
        type: "group",
          name: "style",
          label: { es: "estilos del formulario", en: "form styles" },
          fields: [
            {
              label: "backgroundColor",
              name: "backgroundColor",
              type:"text"
            },
            {
              label: "textColor",
              name: "textColor",
              type:"text"
            },
            {
              label: "labelColor",
              name: "labelColor",
              type:"text"
            },
            {
              label: "inputBackground",
              name: "inputBackground",
              type:"text"
            },
            {
              label: "linkColor",
              name: "linkColor",
              type:"text"
            },
            {
              label: "inputTextColor",
              name: "inputTextColor",
              type:"text"
            },
            {
              label: "buttonColor",
              name: "buttonColor",
              type:"text"
            },
            {
              label: "buttonTextColor",
              name: "buttonTextColor",
              type:"text"
            },
            {
              label: "buttonBColor",
              name: "buttonBColor",
              type:"text"
            },
            {
              label: "buttonBTextColor",
              name: "buttonBTextColor",
              type:"text"
            },
            {
              label: "formWidth",
              name: "formWidth",
              type:"text"
            },
          ]
      },
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
              }
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
                }
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
                }
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
                  }
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
                      }   
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
                      }
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
                  }
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
                        }
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
                        }
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
                        }
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
        name: "email",
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
                }
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
                    }   
                  ]
                },
            ],
          },
        ],
      }, 
      {
        type: "group",
        name: "ty",
        label: { es: "Gracias", en: "TYP"},
        fields: [
          {
            type: "row",
            fields: [
              {
                label: { es: "Agradecimientos", en: "Thankyou Message" },
                name: "tymessage", // required
                type: "group", // required
                fields:[{
                  label: "text",
                  name: "text",
                  type:"text"
                }
              ]
              },
                {
                  label: { es: "Agradecimientos 2", en: "Thankyou Message 2" },
                  name: "tymessage2", // required
                  type: "group", // required
                  fields:[
                    {
                      label: "text",
                      name: "text",
                      type:"text"
                    }
                  ]
                },
                {
                  label: { es: "Compartir", en: "Share" },
                  name: "shareText", // required
                  type: "group", // required
                  fields:[
                    {
                      label: "text",
                      name: "text",
                      type:"text"
                    } 
                  ]
                },
                {
                  label: { es: "Compartir Mensaje", en: "Share Message" },
                  name: "shareMessage", // required
                  type: "group", // required
                  fields:[
                    {
                      label: "text",
                      name: "text",
                      type:"text"
                    }  
                  ]
                },
                {
                  label: { es: "Comaprtir URL", en: "Share URL" },
                  name: "shareUrl", // required
                  type: "group", // required
                  fields:[
                    {
                      label: "text",
                      name: "text",
                      type:"text"
                    }  
                  ]
                }
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