const Faculty = require("../../models/FacutlyModel");


// Controller function to add a faculty
const addFaculty = async (req, res) => {
  try {
    const { name } = req.body;
    if(!name){

        return res.status(400).json({ error: "Please provide a name" });
    }
    // Create a new faculty document
    const faculty = new Faculty({ name });

    // Save the faculty to the database
    await faculty.save();

    res.json({ message: 'Faculty added successfully', faculty });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = addFaculty
