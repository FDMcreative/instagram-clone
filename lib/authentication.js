const User = require('../models/user');

function authentication(req, res, next) {
  // check if user is logged in
  // if not, exit this piece of middleware
  if(!req.session.isAuthenticated) return next();


  User
    // find the user based on the userId in the session
    .findById(req.session.userId)
    .then((user) => {
      if(!user) {
        // if user can't be found, logout user
        return req.session.regenerate(() => res.unauthorized());
      }

      // set the userId back on the session
      req.session.userId = user.id;

      // set the whole user object to the request object
      // so we can use the user details in our controllers
      req.user = user;

      // set the whole user object to res.locals
      // so we can us it in the views
      res.locals.user = user;

      // set an isAuthenticated boolean
      // so we can show or hide buttons and links
      res.locals.isAuthenticated = true;

      next();
    })
    .catch(next);
}

module.exports = authentication;
