import { CollectionConfig } from "payload/types";
import {isAdmin, isAdminFieldLevel} from '../access/isAdmin'
import {isAdminOrSelf} from '../access/isAdminOrSelf'
// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Leads: CollectionConfig = {
  slug: "leads",
  admin: {
    useAsTitle: "Leads",
    listSearchableFields: ["names", "city", "contact", "party", "sended"],
    description: {
      es: "Aqui puedes ver las conversiones de tu pagina",
      en: "here you can see conversion of your page",
    },
  },
  labels: {
    singular: {
      en: "Lead",
      es: "Conversion",
    },
    plural: {
      en: "Leads",
      es: "Conversiones",
    },
  },
  access: {
    // Only admins can create convertions
    create: isAdmin,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdmin,
    // Admins can update all, but any other logged in user can only update themselves
    delete: isAdmin,
  },
  fields: [
    {
      label: { es: "Nombres", en: "Names" },
      name: "names",
      type: "text",
      required: true,
    },
    {
      label: { es: "Codigo Postal", en: "Postal Code" },
      name: "postalcode",
      type: "text",
      required: true,
    },
    {
      label: { es: "Email de Contacto", en: "Contact Email" },
      name: "contact",
      type: "email", 
      required: true,
    },
    {
      label: { es: "Representate", en: "Representative" },
      name: "representative",
      type: "text",
    },
    {
      label: { es: "EMail del Representante", en: "Representative Email" },
      name: "representativeEmail",
      type: "email",
    },
    {
      label: { es: "Asunto", en: "Subject" },
      name: "subject",
      type: "text",
    },
    {
      label: { es: "Mensaje", en: "Message" },
      name: "emailMessage",
      type: "text",
    },
    {
      label: { es: "Ciudad", en: "City" },
      name: "city",
      type: "text",
    },
    {
      label: { es: "Fraccion", en: "Party" },
      name: "party",
      type: "text",
    },
    {
      label: { es: "Email enviado", en: "Email success" },
      name: "sended",
      type: "text",
    },
    {
      label: { es: "ID del Proyecto", en: "Project ID" },
      name: "projectId",
      type: "text",
      required: true,
      admin: { hidden: true },
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
        // Admins can update all, but any other logged in user can only update themselves
        update: isAdminFieldLevel,
      },
    },
  ],
};

export default Leads;
