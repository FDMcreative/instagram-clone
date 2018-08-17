const User = require('../models/user');

function newRoute(req, res) {
  return res.render('registrations/new');
}

function createRoute(req, res, next) {

  if(req.file) req.body.image = req.file.key;

  User
    .create(req.body)
    .then(() => res.redirect('/login'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        req.flash('alert', 'Passwords do not match');
        return res.redirect('/register');
      }
      next(err);
    });
}

function showRoute(req, res) {
  return res.render('registrations/show');
}

function deleteRoute(req, res, next) {
  req.user
    .remove()
    .then(() => {
      req.session.regenerate(() => res.unauthorized('/', 'Your account has been deleted'));
    })
    .catch(next);
}

module.exports = {
  new: newRoute,
  create: createRoute,
  show: showRoute,
  delete: deleteRoute
};
