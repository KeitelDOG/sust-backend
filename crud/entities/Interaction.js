module.exports = {
  name: 'Interaction',
  plural: 'Interactions',
  seedAmount: 1000,
  fields: [
    {
      name: 'type', // click, view
      type: 'integer',
      nullable: false,
      index: true,
      default: 1,
      faker: 'random.number',
    },
    {
      name: 'media_type', // web_url, video_url
      type: 'integer',
      nullable: false,
      default: 1,
      faker: 'random.number',
    },
    {
      name: 'ip_address',
      type: 'string',
      length: 100,
      nullable: false,
      faker: 'internet.ip',
    },
  ],
  relations: {
    belongsTo: ['User', 'Post'],
  }
};