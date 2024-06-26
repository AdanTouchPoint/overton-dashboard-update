import { CollectionConfig } from 'payload/types';
import {isAdminOrSelf} from '../access/isAdminOrSelf'
import {isAdminFieldLevel} from '../access/isAdmin'
import {FormBlock} from '../blocks/FieldsForm'
const MainPages: CollectionConfig = {
    slug: "mainPages",
    labels: {
      singular: {
        en: "Main Page",
        es: "Pagina Principal",
      },
      plural: {
        en: "Main Pages",
        es: "Paginas Principales",
      },
    },
    admin: {
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
            name: "header",
            label: { es: "Encabezado", en: "Header" },
            fields: [
              {
                label: { es: "Titulo Principal", en: "Main Title" },
                name: "mainTitle", // required
                type: "text", // required
              },

              {
                label: { es: "Instrucciones", en: "Instructions" },
                name: "instructions", // required
                type: "textarea", // required
                
              },
            ],
        },
        {
            type: "group",
            name: "form",
            label: { es: "Formulario", en: "Form" },
            fields: [
              {
                label: { es: "Subtitulo", en: "Form Subtitle" },
                name: "subtitleForm", // required
                type: "text", // required
              },
              {
                type: "row",
                fields: [
                       {
                        name:'formFields',
                        label:{es:'Campos del Formulario', en:'Form Fields'},
                        type:'blocks',
                        minRows:1,
                        maxRows:20,
                        blocks:[
                            FormBlock
                        ]
                  },
                ],
              },
              {
                type: "row",
                fields: [
                  {
                    label: {
                      es: " Etiqueta URL Terminos y Condiciones",
                      en: "Terms & Conditions URL Label",
                    },
                    name: "termsLabel", // required
                    type: "text", // required
                    admin: {
                      width: "50%",
                    },
                  },
                  {
                    label: {
                      es: " URL Terminos y Condiciones",
                      en: "Terms & Conditions URL",
                    },
                    name: "terms", // required
                    type: "text", // required
                    admin: {
                      width: "50%",
                    },
                  },
                ],
              },
              {
                label: { es: "Boton Buscar", en: "Search Button" },
                name: "findButton", // required
                type: "text", // required
              },
            ],
        },  
        {
            type: "group",
            name: "EmailViewwithAI",
            label: { es: "Previsualizacion", en: "Email AI" },
            fields: [
                
              {
                type: "row",
                fields: [
                  {
                    label: { es: "Titulo", en: "Title" },
                    name: "titleAI", // required
                    type: "text", // required
                    admin: {
                    width: "50%",
                    },
                  },
                  {
                    label: { es: "Instrucciones", en: "Instructions" },
                    name: "intructionsAI", // required
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
            name: "EmailViewnoAI",
            label: { es: "Previsualizacion", en: "Email No AI" },
            fields: [
              {
                type: "row",
                fields: [
                  {
                    label: { es: "Titulo", en: "Title" },
                    name: "titleNoAI", // required
                    type: "text", // required
                    admin: {
                    width: "50%",
                    },
                  },
                  {
                    label: { es: "Instrucciones", en: "Instructions" },
                    name: "intructionsNoAI", // required
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
  }
  export default MainPages;