const Category = require('../../models/Category');
const Controller = require('../Controller');


class CategoryController extends Controller {
  constructor() {
    super();
    this.model = Category;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: [],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: [],
    };
    super.find(req, res, next);
  }

}

module.exports = CategoryController;
