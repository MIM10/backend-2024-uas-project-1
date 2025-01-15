// import Model Alumni
const AlumniModel = require('../models/Alumni');

// buat class AlumniController
const AlumniController = {
  index: (req, res) => {
    AlumniModel.all((err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err });
      }
      res.status(200).json({ message: "Success", data: results });
    });
  },
  store: (req, res) => {
    const { name, status } = req.body;
    AlumniModel.create({ name, status }, (err, results) => {
      if (err) {
        console.error("Error creating data:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err });
      }
      res.status(201).json({ message: "Resource created successfully", data: results });
    });
  },
  update: (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;
    AlumniModel.update(id, { name, status }, (err, results) => {
      if (err) {
        console.error("Error updating data:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err });
      }
      res.status(200).json({ message: "Resource updated successfully", data: results });
    });
  },
  destroy: (req, res) => {
    const { id } = req.params;
    AlumniModel.delete(id, (err, results) => {
      if (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err });
      }
      res.status(200).json({ message: "Resource deleted successfully", data: results });
    });
  },
  show: (req, res) => {
    const { id } = req.params;
    AlumniModel.find(id, (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err });
      }
      res.status(200).json({ message: "Success", data: results });
    });
  },
  search: (req, res) => {
    const { name } = req.params;
    AlumniModel.search(name, (err, results) => {
      if (err) {
        console.error("Error searching data:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err });
      }
      res.status(200).json({ message: "Success", data: results });
    });
  },
  freshGraduate: (req, res) => {
    AlumniModel.findByStatus("fresh-graduate", (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err });
      }
      res.status(200).json({ message: "Success", data: results });
    });
  },
  employed: (req, res) => {
    AlumniModel.findByStatus("employed", (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err });
      }
      res.status(200).json({ message: "Success", data: results });
    });
  },
  unemployed: (req, res) => {
    AlumniModel.findByStatus("unemployed", (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err });
      }
      res.status(200).json({ message: "Success", data: results });
    });
  },
};

// membuat object AlumniController
// const object = new AlumniController();

// export object AlumniController
module.exports = AlumniController;
