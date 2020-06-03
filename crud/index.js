const User = require('./entities/User');
const Category = require('./entities/Category');
const Post = require('./entities/Post');
const Interaction = require('./entities/Interaction');
const Campaign = require('./entities/Campaign');

module.exports = {
  package: 'sust-backend',
  app: 'SusT Backend',
  description: 'Express Server used as API for the SusT application',
  author: 'KeitelDOG',
  repos: 'https://github.com/KeitelDOG/sust-backend',
  email: 'keiteldog@gmail.com',
  entities: [
    User,
    Category,
    Post,
    Interaction,
    Campaign,
  ]
};
