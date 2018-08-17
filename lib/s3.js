const S3 = require('aws-sdk/clients/s3');

module.exports = new S3({
  region: 'eu-central-1',
  params: { Bucket: 'w05d03-instagram-clone' },
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  }
});
