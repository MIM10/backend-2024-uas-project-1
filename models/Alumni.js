// import database
const db = require('../config/database');

// membuat class AlumniModel
const AlumniModel = {
  all: (callback) => {
    const query = "SELECT * FROM alumni";
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = `
      INSERT INTO alumni 
      (name, phone, address, graduation_year, status, company_name, position) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
      query, 
      [ data.name, data.phone, data.address, data.graduation_year, data.status, data.company_name, data.position ], 
      callback
    );
  },
  update: (id, data, callback) => {
    const query = `
      UPDATE alumni 
      SET 
        name = ?, phone = ?, address = ?, graduation_year = ?, status = ?, company_name = ?, position = ? 
      WHERE id = ?
    `;
    db.query(
      query, 
      [ data.name, data.phone, data.address, data.graduation_year, data.status, data.company_name, data.position, id ], 
      callback
    );
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
