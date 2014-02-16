var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var ReachSchema = new mongoose.Schema({
	name: {type: String},
	typeOfReach: {type: String},

	location: {type: String, default: ''},
	GPS: {type: String, default: ''},

});

ReachSchema.pre('save', function(next) {
  var reach = this;
  var SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

ReachSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', ReachSchema);
