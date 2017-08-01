const db = require('../db/config');

const issue = {};

issue.findAll= (id) => {
  return db.query(`
    SELECT * FROM issues
    WHERE user_id = $1
    `, [id]);
};

issue.create = (issue) => {
  return db.one(`
    INSERT INTO issues
    (description, address, user_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [issue.description, issue.address, issue.user_id]);
};

issue.findById=(id)=>{
  return db.oneOrNone(`
    SELECT * FROM issues
    WHERE id = $1
    `, [id]);
};

module.exports = issue;
