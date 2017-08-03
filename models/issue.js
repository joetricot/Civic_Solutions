const db = require('../db/config');

const issue = {};

issue.findAll= () => {
  return db.query(`
    SELECT * FROM issues
    `);
};

issue.findByUserId= (id) => {
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

issue.update=(issue, id)=>{
  return db.one(`
    UPDATE issues set
    description = $1,
    address = $2,
    user_id = $3
    WHERE id = $4
    RETURNING *
    `, [issue.description, issue.address, issue.user_id, id])
};

issue.destroy=(id)=>{
  return db.none(`
    DELETE FROM issues
    WHERE id = $1
    `, [id])
}

module.exports = issue;
