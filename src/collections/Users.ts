import { CollectionConfig } from 'payload/types';
import {isAdminFieldLevel} from '../access/isAdmin'
const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'users',
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
    {
    label:{es: 'rol', en:'role'},
    name: 'roles',
  // Save this field to JWT so we can use from `req.user`
    saveToJWT: true,
    type: 'select',
    hasMany: false,
    defaultValue: 'client',
    admin:{hidden:false},
    access: {
    // Only admins can create users
    create: isAdminFieldLevel,
    read: isAdminFieldLevel,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminFieldLevel,
    },
    options: [
      {
        label: 'Admin',
        value: 'admin',
      },
      {
        label: 'Client',
        value: 'client',
      },
    ]
    },
  ],
};

export default Users;