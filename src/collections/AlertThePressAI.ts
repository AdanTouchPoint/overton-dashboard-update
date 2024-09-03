import { CollectionConfig } from 'payload/types';
import {isAdminOrSelf} from '../access/isAdminOrSelf'
import {isAdminFieldLevel} from '../access/isAdmin'
import {FormBlock} from '../blocks/FieldsForm'
import CustomeCampaingList from '../customComponents/Custome/CustomeCampaignList'
import {beforeChangeHook} from '../hooks/beforeCreateCampaing' 
// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const AlertThePressAI: CollectionConfig = {
  slug: 'alertPressAi',
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
              name: "mainTitle", // required
              type: "text", // required
            },
            {
              label: { es: "Instrucciones", en: "Instructions" },
              name: "instructions", // required
              type: "text", // required
              
            },
          ],
      },
      {
          type: "group",
          name: "emailFormAi",
          label: { es: "Formulario de email con AI", en: "Email Form with AI" },
          fields: [
            {
              type: "row",
              fields: [
                {
                    label: { es: "Titulo ", en: "Title" },
                    name: "title", // required
                    type: "text", // required
                },
                {
                    label: { es: "Instrucciones", en: "Instructions" },
                    name: "instructions", // required
                    type: "text", // required
                }
              ]
            }
          ]
      },
      {
        type: "group",
        name: "emailform",
        label: { es: "Formulario de email", en: "Email Form" },
        fields: [
          {
            type: "row",
            fields: [
              {
                  label: { es: "Titulo ", en: "Title" },
                  name: "title", // required
                  type: "text", // required
              },
              {
                  label: { es: "Instrucciones", en: "Instructions" },
                  name: "instructions", // required
                  type: "text", // required
              }
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
                  type: "text", // required
                  admin: {
                  width: "50%",
                  },
                },
                {
                  label: { es: "Instrucciones", en: "Instructions" },
                  name: "intructions", // required
                  type: "text", // required
                  admin: {
                  width: "50%",
                  },
                }
              ],
            },
          ],
      },
      {
        type: "group",
        name: "SuccessPage",
        label: { es: "deploy exitoso", en: "Success Page"},
        fields: [
          {
            type: "row",
            fields: [
              {
                label: { es: "Titulo", en: "Title" },
                name: "title", // required
                type: "text", // required
                admin: {
                width: "50%",
                },
              },
              {
                label: { es: "Descripcion", en: "Description" },
                name: "description", // required
                type: "text", // required
                admin: {
                width: "50%",
                },
              },
              {
                label: { es: "Instrucciones", en: "Instructions" },
                name: "intructions", // required
                type: "text", // required
                admin: {
                width: "50%",
                },
              }
            ],
          },
        ],
    },
      {
          type: "group",
          name: "PromptAI",
          label: { es: "Prompt", en: "Prompt AI" },
          fields: [
            {
              type: "row",
              fields: [
                {
                  label: { es: "Prompt AI", en: "Prompt AI" },
                  name: "promptAI", // required
                  type: "text", // required
                  admin: {
                  width: "50%",
                  },
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

export default AlertThePressAI;