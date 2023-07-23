const Faculty = require("../../models/FacutlyModel");


// Controller function to add a faculty
const addFaculty = async (req, res) => {
  try {
    const { name, forms } = req.body;
    if(!name || forms.length==0){

        return res.status(400).json({ error: "Please provide a name" });
    }
    // Create a new faculty document
    const faculty = new Faculty(req.body);

    // Save the faculty to the database
    await faculty.save();

    res.json({ message: 'Faculty added successfully', faculty });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = addFaculty
