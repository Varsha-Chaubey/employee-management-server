const User = require("../model/userModal.js");

const createEmployee= async (req, res) => {
  try {
    const { email } = req.body;
    // if email is already in use
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ msg: "Email is already in use" });
    }
    const employeeData = new User(req.body);
    if (!employeeData) {
      return res.status(404).json({ msg: "Employee data not found" });
    }
    console.log(employeeData);
    const saveData = await employeeData.save();
    res.status(200).json(saveData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllEmployee = async (req, res) => {
  try {
    const employeeData = await User.find();
    if (!employeeData) {
      return res.status(400).json({ msg: "Employee data not found" });
    }
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const empExist = await User.findById(id);
    if (!empExist) {
      return res.status(401).json({ msg: "Employee not found" });
    }
    const updatedEmployee = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const empExist = await User.findById(id);
    if (!empExist) {
      return res.status(404).json({ msg: "Employee not exist" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { createEmployee, getAllEmployee, updateEmployee, deleteEmployee };
