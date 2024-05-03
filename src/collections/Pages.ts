import { CollectionConfig } from 'payload/types';
// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Pages: CollectionConfig = {
  slug: 'pages',
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

