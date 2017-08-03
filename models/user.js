const db = require('../db/config');

const User = {};

User.findByUserName = email => {
  console.log('in findUserName');
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE email = $1
  `, [email]);
};

User.create = user => {
  console.log('in create function');
  return db.one(`
    INSERT INTO users
    (email, first_name, last_name, password_digest)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [user.email, user.first_name, user.last_name, user.password_digest]);
};


module.exports = User;
