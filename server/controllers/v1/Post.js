const Post = require('../../models/Post');
const Controller = require('../Controller');


class PostController extends Controller {
  constructor() {
    super();
    this.model = Post;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: ['user'],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: ['user'],
    };
    super.find(req, res, next);
  }

}

module.exports = PostController;
