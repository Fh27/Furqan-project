const Faculty = require("../../models/FacutlyModel");

// Controller function to get all faculty
const getAllFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};






module.exports = getAllFaculty;
