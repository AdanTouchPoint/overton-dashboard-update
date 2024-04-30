import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {

      name: 'name',
      type: 'text', 
  },
  {
 
    name: 'lastName',
    type: 'text', 
},
{

    name: 'city',
    type: 'text', 
},
  ],
};

export default Users;