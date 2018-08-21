const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3 = require('../lib/s3');

const commentSchema = new mongoose.Schema({
  content: {type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
}, {
    timestamps: true
  });

commentSchema.methods.ownedBy = function ownedBy(user) {
  return this.createdBy.id === user.id;
};

const photoSchema = new mongoose.Schema({
  caption: {type: String, required: true},
  image: {type: String, required:true},
  stars: {type: Number, required:true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  comments: [commentSchema]
});

photoSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null; //or a placeholder profile-image (to be set) in case the user doesn't upload any
    return `https://s3.eu-central-1.amazonaws.com/w05d03-instagram-clone/${this.image}`;
  });

photoSchema.pre('remove', function removeImage(next) {
  s3.deleteObject({ Key: this.image }, next);
});

module.exports = mongoose.model('Photo', photoSchema);
