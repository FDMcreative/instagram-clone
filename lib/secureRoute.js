function secureRoute(req, res, next) {

  if(!req.session.isAuthenticated || !req.session.userId) {
  //   return req.session.regenerate(() => {
  //     req.flash('alert', 'You must be logged in');
  //     return res.redirect('/login');
  //   });
  // }
    return req.session.regenerate(() => res.unauthorized());
  }

  next();
}

module.exports = secureRoute;
