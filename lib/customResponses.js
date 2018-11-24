function customResponses(req, res, next) {
  
  res.notFound = function notFound() {
    const err = new Error('Not Found');
    err.status = 404;

    throw err;
  };

  res.badRequest = function(url, errors) {
    req.flash('alert', errors);
    res.redirect(url);
  };

  res.unauthorized = function(url='/login', message='You must be logged in') {
    req.flash('alert', message);
    res.redirect(url);
  };

  next();
};

module.exports = customResponses;
