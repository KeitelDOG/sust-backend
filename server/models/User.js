const bookshelf = require('../../database/config');

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimeStamps: true,
  hidden: ['password'],
  posts() {
    return this.hasMany('Post');
  },
  interactions() {
    return this.hasMany('Interaction');
  },

});

module.exports = bookshelf.model('User', User);
