module.exports = {
  name: 'Campaign',
  plural: 'Campaigns',
  seedAmount: 80,
  fields: [
    {
      name: 'amount',
      type: 'decimal',
      precision: 18,
      scale: 2,
      nullable: false,
      faker: 'random.number',
    },
    {
      name: 'plan', // trial, basic, pro, business
      type: 'integer',
      nullable: false,
      index: true,
      default: 1,
      faker: 'random.number',
    },
    {
      name: 'order_code',
      type: 'string',
      length: 100,
      nullable: false,
      faker: 'lorem.sentence',
    },
    {
      name: 'start_date',
      type: 'datetime',
      nullable: false,
      faker: 'date.recent',
    },
    {
      name: 'end_date',
      type: 'datetime',
      nullable: false,
      faker: 'date.future',
    },

  ],
  relations: {
    belongsTo: ['Post'],
  }
};