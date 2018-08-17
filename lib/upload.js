const s3 = require('./s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid');

module.exports = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'w05d03-instagram-clone',
    key(req, file, next) {
      const ext = file.mimetype.replace('image/', '');
      const filename = `${uuid.v4()}.${ext}`;
      next(null, filename);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE
  }),
  fileFilter(req, file, next) {
    const whitelist = ['image/png', 'image/jpeg', 'image/gif'];
    next(null, whitelist.includes(file.mimetype));
  },
  limits: {
    fileSize: 1024 * 1024 * 1 //1024bytes->1megabyte->1megabyte
  }
});
