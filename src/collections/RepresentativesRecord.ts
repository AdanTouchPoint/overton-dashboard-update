import { isAdminFieldLevel,isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import { CollectionConfig } from 'payload/types';

const RepresentativesRecord: CollectionConfig = {
  slug: "representatives-record",
  admin: {
    listSearchableFields: ["name","state","email","party"],
    description: "Aqui puedes agregar, editar o eliminar  a los representates",
  },
  access: {
    // Only admins can create users
    create: isAdminOrSelf,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdmin,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    delete: isAdminOrSelf,
  },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Electorate",
      name: "electorate",
      type: "text",
      required: true,
    },
    {
      label: "Question1",
      name: "question1",
      type: "text",
    },
    {
      label: "Answer1",
      name: "answer1", 
      type: "text", 
      
    },
    {
      label: "Question2",
      name: "question2",
      type: "text",
    },
    {
      label: "Answer2",
      name: "answer2",
      type: "text",
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

export default RepresentativesRecord;
