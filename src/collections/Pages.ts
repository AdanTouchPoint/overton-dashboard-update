import { CollectionConfig } from 'payload/types';
import {isAdminOrSelf} from '../access/isAdminOrSelf'
import {isAdminFieldLevel,isAdmin} from '../access/isAdmin'
// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Pages: CollectionConfig = {
  slug: 'pages',
   access:{
              // Only admins can create users
      create: isAdminOrSelf,
      // Admins can read all, but any other logged in user can only read themselves
      read: isAdmin,
      // Admins can update all, but any other logged in user can only update themselves
      update: isAdminOrSelf,
      // Only admins can delete
      delete: isAdminOrSelf,
      },
  fields: [
    {
      name: 'pageName',
      type: 'text',
    },
    {
      name: 'Type',
      type: 'text',
    },
    {
      name: "clientId",
      type: "relationship",
      relationTo: "users",
      required: true,
      // If user is not admin, set the site by default
      // to the first site that they have access to
      defaultValue: ({ user }) => {
        if (user) {
          return user.id;
        }
      }
    }
  ],
}
export default Pages;