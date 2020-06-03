const bookshelf = require('../../database/config');

var Campaign = bookshelf.Model.extend({
  tableName: 'campaigns',
  hasTimeStamps: true,
  hidden: [''],
  post() {
    return this.belongsTo('Post');
  },

});

module.exports = bookshelf.model('Campaign', Campaign);
