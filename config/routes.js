const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const sessions = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
const upload = require('../lib/upload');
const oauth = require('../controllers/oauth');
const photos = require('../controllers/photos');

router.get('/', (req, res) => res.render('statics/index'));

router.route('/photos')
  .get(photos.index)
  .post(upload.single('image'), photos.create);

router.route('/photos/new')
  .get(secureRoute, photos.new);

router.route('/photos/:id')
  .get(photos.show)
  .put(secureRoute, photos.update)
  .delete(secureRoute, photos.delete);

router.route('/photos/:id/edit')
  .get(secureRoute, photos.edit);

router.route('/photos/:id/comments')
  .post(secureRoute, photos.createComment);

router.route('/photos/:id/comments/:commentId')
  .delete(secureRoute, photos.deleteComment);

router.route('/profile')
  .get(secureRoute, registrations.show);

router.route('/profile')
  .delete(secureRoute, registrations.delete);

router.route('/register')
  .get(registrations.new)
  .post(upload.single('profileImage'), registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/oauth/github')
  .get(oauth.github);

router.all('*', (req, res) => res.notFound());

module.exports = router;
