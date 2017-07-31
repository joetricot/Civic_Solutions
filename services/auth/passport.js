const passport = require('passport');
const User = require('../../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    User.findByUserName(email)
      .then(user => {
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });
};
