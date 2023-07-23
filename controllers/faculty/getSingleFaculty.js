const Faculty = require("../../models/FacutlyModel");


// Controller function to get a single faculty by ID
const getSingleFaculty = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the faculty by ID
    const faculty = await Faculty.findById(id).populate('forms');

    if (!faculty) {
      return res.status(404).json({ error: 'Faculty not found' });
    }

    res.json(faculty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getSingleFaculty;
