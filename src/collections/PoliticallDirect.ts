import { CollectionConfig } from 'payload/types';
import {isAdminOrSelf} from '../access/isAdminOrSelf'
import {isAdminFieldLevel} from '../access/isAdmin'
import {FormBlock} from '../blocks/FieldsForm'
import CustomeCampaignList from '../customComponents/Custome/CustomeCampaignList'
import {beforeChangeHook} from '../hooks/beforeCreateCampaing' 
// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const PoliticallDirect: CollectionConfig = {
  slug: 'PD',
  admin: {
    components: {
      views: {
        Edit: {
          Default: {
            actions: [CustomeCampaignList],
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
            label: "inputBackground",
            name: "inputBackground",
            type:"text"
          },
          {
            label: "fontFamily",
            name: "fontFamily",
            type:"text"
          },
          {
            label: "borderRadius",
            name: "borderRadius",
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
              },
              {
                label: "fontSize",
                name: "fontSize",
                type:"text"
              },
              {
                label: "textColor",
                name: "textColor",
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
                  label: "textColor",
                  name: "textColor",
                  type:"text"
                },   
              ]
            },
          ],
      },
      {
          type: "group",
          name: "emailform",
          label: { es: "Formulario de email", en: "Email Form" },
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
                label: "textColor",
                name: "textColor",
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
                  label: "textColor",
                  name: "textColor",
                  type:"text"
                },   
              ]
            },
            {
              label: { es: "Descripcion", en: "Description" },
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
                  label: "textColor",
                  name: "textColor",
                  type:"text"
                },   
              ]
            },
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
                    label: "textColor",
                    name: "textColor",
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
                      label: "textColor",
                      name: "textColor",
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
        name: "ty",
        label: { es: "Gracias", en: "TYP"},
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
                  label: "textColor",
                  name: "textColor",
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
                      label: "textColor",
                      name: "textColor",
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
                      label: "textColor",
                      name: "textColor",
                      type:"text"
                    },   
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
          name: "active", 
          type: "checkbox", 
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

export default PoliticallDirect;