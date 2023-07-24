

const Faculty = require("../../models/FacutlyModel");
const Form = require("../../models/FormModel");

const editFaculty = async (req, res) => {
  try {
    const { facultyId, formIds } = req.body;
    if(formIds.length === 0) {
      return res.status(400).json({ error: "Please select at least one form" });
    }

    // pass formd ids as an array

    // Find the faculty by ID
    const faculty = await Faculty.findById(facultyId);
    
   
 

    // Add the forms to the faculty's forms array
    faculty.forms = formIds;

    // Save the updated faculty
    await faculty.save();

    res.json({ message: "Faculty updated successfully", faculty });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = editFaculty
