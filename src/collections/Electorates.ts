import { isAdminOrSelf } from "../access/isAdminOrSelf";
import { isAdminFieldLevel,isAdmin } from "../access/isAdmin";
import { CollectionConfig } from 'payload/types';
const Electorates: CollectionConfig = {
    slug: 'electorates',
    admin: {
        listSearchableFields: ["postcode","division"],
        description: "Manage your electorates database from here",
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
          label: 'Postal Code',
          name: 'postcode', // required
          type: 'text', // required
          required: true,
        },
        {
            label:'Electoral Divison',
            name: 'division', // required
            type: 'text', // required
            required: true,
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
      ]
  }
  
  export default Electorates;