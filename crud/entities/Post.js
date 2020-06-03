module.exports = {
  name: 'Post',
  plural: 'Posts',
  seedAmount: 100,
  fields: [
    {
      name: 'title',
      type: 'string',
      length: 100,
      nullable: false,
      index: true,
      faker: 'lorem.sentence',
    },
    {
      name: 'web_url',
      type: 'string',
      length: 255,
      nullable: false,
      index: true,
      faker: 'internet.url',
    },
    {
      name: 'web_video',
      type: 'string',
      length: 255,
      nullable: false,
      index: true,
      faker: 'internet.url',
    },
    {
      name: 'description',
      type: 'string',
      length: 200,
      nullable: false,
      faker: 'lorem.sentence',
    },
  ],
  relations: {
    belongsTo: ['User'],
    hasMany: ['Interaction', 'Campaign'],
  }
};