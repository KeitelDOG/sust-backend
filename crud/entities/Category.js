module.exports = {
  name: 'Category',
  plural: 'Categories',
  seedAmount: 10,
  fields: [
    {
      name: 'name',
      type: 'string',
      length: 50,
      nullable: false,
      index: true,
      faker: 'lorem.word',
    },
    {
      name: 'description',
      type: 'string',
      length: 255,
      nullable: false,
      faker: 'lorem.sentence',
    },
  ],
  relations: {
    hasMany: ['Post'],
  }
};