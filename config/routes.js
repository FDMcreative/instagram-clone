const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const sessions = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
const upload = require('../lib/upload');

router.get('/', (req, res) => res.render('statics/index'));

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

router.route('/login')
  .get(sessions.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
