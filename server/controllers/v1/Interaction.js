const Interaction = require('../../models/Interaction');
const Controller = require('../Controller');


class InteractionController extends Controller {
  constructor() {
    super();
    this.model = Interaction;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: ['user', 'post'],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: ['user', 'post'],
    };
    super.find(req, res, next);
  }

}

module.exports = InteractionController;
