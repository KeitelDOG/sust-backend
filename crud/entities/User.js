module.exports = {
  name: 'User',
  plural: 'Users',
  seedAmount: 20,
  auth: ['email', 'password'],
  defaultAuth: 'default@email.com',
  fields: [
    {
      name: 'name',
      type: 'string',
      length: 100,
      nullable: false,
      index: true,
      faker: 'name.findName',
    },
    {
      name: 'email',
      type: 'string',
      length: 100,
      nullable: false,
      index: true,
      faker: 'internet.email',
    },
    {
      name: 'password',
      type: 'string',
      length: 128,
      hidden: true,
      faker: 'internet.password',
    },
    {
      name: 'type',
      type: 'integer',
      nullable: false,
      default: 3,
      faker: 'random.number',
    },
    {
      name: 'phone',
      type: 'string',
      length: 100,
      faker: 'phone.phoneNumber',
    },
    {
      name: 'business_name',
      type: 'string',
      length: 100,
      nullable: false,
      index: true,
      faker: 'company.companyName',
    },
    {
      name: 'confirmed',
      type: 'boolean',
      nullable: false,
      default: false,
      index: true,
      faker: 'random.boolean',
    },
  ],
  relations: {
    hasMany: ['Post', 'Interaction'],
  }
}