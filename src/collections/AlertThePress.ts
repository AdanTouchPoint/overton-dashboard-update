import { CollectionConfig } from 'payload/types';
import {isAdminOrSelf} from '../access/isAdminOrSelf'
import {isAdminFieldLevel} from '../access/isAdmin'
import {FormBlock} from '../blocks/FieldsForm'
import CustomeCampaingList from '../customComponents/Custome/CustomeCampaignList'
import {beforeChangeHook} from '../hooks/beforeCreateCampaing' 
// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const AlertThePress: CollectionConfig = {
  slug: 'AP',
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
              name: "mainTitle", 
              type: "text", 
            },

            {
              label: { es: "Instrucciones", en: "Instructions" },
              name: "instructions", 
              type: "text", 
              
            },
          ],
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
                    name: "title", 
                    type: "text", 
                  },
                  {
                    label: { es: "Instrucciones", en: "Instructions" },
                    name: "instructions", 
                    type: "text", 
                    
                  },
                  {
                    label: { es: "Descripcion", en: "Description" },
                    name: "description", 
                    type: "text", 
                    
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
                  name: "title", 
                  type: "text", 
                  admin: {
                  width: "50%",
                  },
                },
                {
                  label: { es: "Instrucciones", en: "Instructions" },
                  name: "instructions", 
                  type: "text", 
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
        name: "successPage",
        label: { es: "deploy exitoso", en: "Success Page"},
        fields: [
          {
            type: "row",
            fields: [
              {
                label: { es: "Titulo", en: "Title" },
                name: "title", 
                type: "text", 
                admin: {
                width: "50%",
                },
              },
              {
                label: { es: "Descripcion", en: "Description" },
                name: "description", 
                type: "text", 
                admin: {
                width: "50%",
                },
              },
              {
                label: { es: "Instrucciones", en: "Instructions" },
                name: "instructions", 
                type: "text", 
                admin: {
                width: "50%",
                },
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

export default AlertThePress;