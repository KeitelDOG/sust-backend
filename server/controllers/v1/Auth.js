const User = require('../../models/User.js');
const Controller = require('../Controller');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class Auth extends Controller {
  constructor() {
    super();
    this.round = 10;
  }

  genHash(password, salt) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, salt, (error, hash) => {
        if (error) {
          reject(error);
        } else {
          resolve(hash);
        }
      });
    });
  }

  genSalt() {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(this.round, (error, salt) => {
        if (error) {
          reject(error);
        } else {
          resolve(salt);
        }
      });
    });
  }

  compare(data, encrypted) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(data, encrypted, (error, matched) => {
        if (error) {
          reject(error);
        } else {
          resolve(matched);
        }
      });
    });
  }

  // Find auth model from current token
  auth(req, res) {
    return new User({ id: req.auth.id })
      .fetch()
      .then(user => {
        res.status(200).send(user);
      })
      .catch(error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: 'Could not retrieve Authenticated user',
          error: details,
        });
      });
  }

  // Signup method for user
  signup(req, res) {
    let data = req.body;

    this.genSalt()
      .then(salt => {
        return this.genHash(data.password, salt);
      })
      .then(hash => {
        data.password = hash;
        return new User()
          .save(data, { method: 'insert' })
          .then(result => {
            return new User({ id: result.id })
              .fetch()
              .then(user => {
                // Change code below to skip token on registration
                let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: '720h' });
                res.status(200).send({ token, user });
              });
          });
      })
      .catch(error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: 'Could not signup the user',
          error: details
        });
      });
  }

  // Create user signin process
  signin(req, res) {
    let data = req.body;

    new User({ email: data.email })
      .fetch()
      .then(user => {
        if (!user) {
          throw new Error('Wrong user credentials');
        }
        return user;
      })
      .then(user => {
        return this.compare(data.password, user.get('password'))
          .then(matched => {
            if (!matched) {
              throw new Error('Wrong user credentials');
            }
          })
          .then(() => {
            let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: '720h' });
            res.status(200).send({ token, user });
          }, error => {
            let details = this.getErrorDetails(error);
            res.status(400).send({
              message: error.message,
              error: details
            });
          });
      }, error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: error.message,
          error: details
        });
      })
      .catch(error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: 'Could not signin the user',
          error: details
        });
      });
  }
}

module.exports = Auth;