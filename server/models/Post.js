const bookshelf = require('../../database/config');

var Post = bookshelf.Model.extend({
  tableName: 'posts',
  hasTimeStamps: true,
  hidden: [''],
  user() {
    return this.belongsTo('User');
  },
  interactions() {
    return this.hasMany('Interaction');
  },
  campaigns() {
    return this.hasMany('Campaign');
  },

});

module.exports = bookshelf.model('Post', Post);
