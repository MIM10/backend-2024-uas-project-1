// import Model Alumni
const AlumniModel = require('../models/Alumni');

// buat class AlumniController
const AlumniController = {
  index: (req, res) => {
    AlumniModel.all((err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
      }

      if (results.length === 0) {
        return res.status(200).json({ message: "Data kosong" });
      }

      res.status(200).json({ message: "Berhasil mendapatkan semua data", data: results });
    });
  },
  store: (req, res) => {
    const { name, phone, address, graduation_year, status, company_name, position } = req.body;

    if (!name || !phone || !address || !graduation_year || !status || !company_name || !position) {
      return res.status(422).json({ message: "Semua field harus diisi dengan benar" });
    }

    const data = { name, phone, address, graduation_year, status, company_name, position };

    AlumniModel.create(data, (err, result) => {
      if (err) {
        console.error("Error creating data:", err);
        return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
      }

      AlumniModel.find(result.insertId, (err, createdRecord) => {
        if (err) {
          console.error("Error fetching created data:", err);
          return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
        }
        res.status(201).json({ message: "Data berhasil ditambahkan", data: createdRecord });
      });
    });
  },
  update: (req, res) => {
    const { id } = req.params;
    const { name, phone, address, graduation_year, status, company_name, position } = req.body;
    const data = { name, phone, address, graduation_year, status, company_name, position };

    AlumniModel.update(id, data, (err, result) => {
      if (err) {
        console.error("Error updating data:", err);
        return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }

      AlumniModel.find(id, (err, updatedRecord) => {
        if (err) {
          console.error("Error fetching updated data:", err);
          return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
        }
        res.status(200).json({ message: "Data berhasil diperbarui", data: updatedRecord });
      });
    });
  },
  destroy: (req, res) => {
    const { id } = req.params;

    AlumniModel.delete(id, (err, result) => {
      if (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }

      res.status(200).json({ message: "Data berhasil dihapus" });
    });
  },
  show: (req, res) => {
    const { id } = req.params;

    AlumniModel.find(id, (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }

      res.status(200).json({ message: "Berhasil mendapatkan data", data: results });
    });
  },
  search: (req, res) => {
    const { name } = req.params;

    AlumniModel.search(name, (err, results) => {
      if (err) {
        console.error("Error searching data:", err);
        return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }

      res.status(200).json({ message: "Berhasil mendapatkan data hasil pencarian", data: results });
    });
  },
  freshGraduate: (req, res) => {
    AlumniModel.findByStatus("fresh-graduate", (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
      }

      res.status(200).json({ 
        message: "Berhasil mendapatkan data fresh graduate", 
        total: results.length, 
        data: results 
      });
    });
  },
  employed: (req, res) => {
    AlumniModel.findByStatus("employed", (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
      }

      res.status(200).json({ 
        message: "Berhasil mendapatkan data alumni yang sudah bekerja", 
        total: results.length, 
        data: results 
      });
    });
  },
  unemployed: (req, res) => {
    AlumniModel.findByStatus("unemployed", (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Terjadi kesalahan pada server", error: err });
      }

      res.status(200).json({ 
        message: "Berhasil mendapatkan data alumni yang belum bekerja", 
        total: results.length, 
        data: results 
      });
    });
  },
};

// export AlumniController
module.exports = AlumniController;
