const bookshelf = require('../../database/config');

var Category = bookshelf.Model.extend({
  tableName: 'categories',
  hasTimeStamps: true,
  hidden: [''],
  posts() {
    return this.hasMany('Post');
  },

});

module.exports = bookshelf.model('Category', Category);
