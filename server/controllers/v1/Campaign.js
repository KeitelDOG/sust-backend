const Campaign = require('../../models/Campaign');
const Controller = require('../Controller');


class CampaignController extends Controller {
  constructor() {
    super();
    this.model = Campaign;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: ['post'],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: ['post'],
    };
    super.find(req, res, next);
  }

}

module.exports = CampaignController;
