var express = require('express');
var router = express.Router();

// token authorization
const { verifyToken } = require('../../../middlewares/authorization');

// Import Multer Factory
const MulterFactory = require('../../MulterFactory');

// Declare Controllers
// Auth Controller
const AuthController = require('../../../controllers/v1/Auth');

// Other Controllers
const TestController = require('../../../controllers/v1/Test');
const UserController = require('../../../controllers/v1/User');
const CategoryController = require('../../../controllers/v1/Category');
const PostController = require('../../../controllers/v1/Post');
const InteractionController = require('../../../controllers/v1/Interaction');
const CampaignController = require('../../../controllers/v1/Campaign');


// Create Multers for file uploading


// Instanciate Controllers
const test = new TestController();
const auth = new AuthController();
const user = new UserController();
const category = new CategoryController();
const post = new PostController();
const interaction = new InteractionController();
const campaign = new CampaignController();


router.get('/', function(req, res) {
  console.log('SusT Backend API v1');
  res
    .status(200)
    .send({ status: 'Success', api: 'Version 1' })
});

// endpoint for authentication
router.get('/auth', verifyToken, auth.auth.bind(auth));
router.post('/signin', auth.signin.bind(auth));
router.post('/signup', auth.signup.bind(auth));


// endpoint for testing API Flow with Versions, should return api v1
router.get('/tests', test.check.bind(test));

// endpoint for users (CRUD)
router.get('/users', verifyToken, user.all.bind(user));
router.get('/users/:id', verifyToken, user.find.bind(user));
router.post('/users', verifyToken, user.insert.bind(user));
router.put('/users/:id', verifyToken, user.update.bind(user));
router.delete('/users/:id', verifyToken, user.delete.bind(user));

// endpoint for categories (CRUD)
router.get('/categories', verifyToken, category.all.bind(category));
router.get('/categories/:id', verifyToken, category.find.bind(category));
router.post('/categories', verifyToken, category.insert.bind(category));
router.put('/categories/:id', verifyToken, category.update.bind(category));
router.delete('/categories/:id', verifyToken, category.delete.bind(category));

// endpoint for posts (CRUD)
router.get('/posts', verifyToken, post.all.bind(post));
router.get('/posts/:id', verifyToken, post.find.bind(post));
router.post('/posts', verifyToken, post.insert.bind(post));
router.put('/posts/:id', verifyToken, post.update.bind(post));
router.delete('/posts/:id', verifyToken, post.delete.bind(post));

// endpoint for interactions (CRUD)
router.get('/interactions', verifyToken, interaction.all.bind(interaction));
router.get('/interactions/:id', verifyToken, interaction.find.bind(interaction));
router.post('/interactions', verifyToken, interaction.insert.bind(interaction));
router.put('/interactions/:id', verifyToken, interaction.update.bind(interaction));
router.delete('/interactions/:id', verifyToken, interaction.delete.bind(interaction));

// endpoint for campaigns (CRUD)
router.get('/campaigns', verifyToken, campaign.all.bind(campaign));
router.get('/campaigns/:id', verifyToken, campaign.find.bind(campaign));
router.post('/campaigns', verifyToken, campaign.insert.bind(campaign));
router.put('/campaigns/:id', verifyToken, campaign.update.bind(campaign));
router.delete('/campaigns/:id', verifyToken, campaign.delete.bind(campaign));


module.exports = router;
