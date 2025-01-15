// import database
const db = require('../config/database');

// membuat class AlumniModel
const AlumniModel = {
  all: (callback) => {
    const query = "SELECT * FROM alumni";
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = "INSERT INTO alumni (name, status) VALUES (?, ?)";
    db.query(query, [data.name, data.status], callback);
  },
  update: (id, data, callback) => {
    const query = "UPDATE alumni SET name = ?, status = ? WHERE id = ?";
    db.query(query, [data.name, data.status, id], callback);
  },
  delete: (id, callback) => {
    const query = "DELETE FROM alumni WHERE id = ?";
    db.query(query, [id], callback);
  },
  find: (id, callback) => {
    const query = "SELECT * FROM alumni WHERE id = ?";
    db.query(query, [id], callback);
  },
  search: (name, callback) => {
    const query = "SELECT * FROM alumni WHERE name LIKE ?";
    db.query(query, [`%${name}%`], callback);
  },
  findByStatus: (status, callback) => {
    const query = "SELECT * FROM alumni WHERE status = ?";
    db.query(query, [status], callback);
  },
};

// export class Alumni
module.exports = AlumniModel;
