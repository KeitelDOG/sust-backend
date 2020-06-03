const bookshelf = require('../../database/config');

var Interaction = bookshelf.Model.extend({
  tableName: 'interactions',
  hasTimeStamps: true,
  hidden: [''],
  user() {
    return this.belongsTo('User');
  },
  post() {
    return this.belongsTo('Post');
  },

});

module.exports = bookshelf.model('Interaction', Interaction);
