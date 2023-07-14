

const Faculty = require("../../models/FacutlyModel");
const Form = require("../../models/FormModel");

const editFaculty = async (req, res) => {
  try {
    const { facultyId, formIds } = req.body;

    // pass formd ids as an array

    // Find the faculty by ID
    const faculty = await Faculty.findById(facultyId);

    if (!faculty) {
      return res.status(404).json({ error: "Faculty not found" });
    }

    // Find the forms by their IDs
    const forms = await Form.find({ _id: { $in: formIds } });

    if (!forms) {
      return res.status(404).json({ error: "One or more forms not found" });
    }

    // Add the forms to the faculty's forms array
    faculty.forms.push(...formIds);

    // Save the updated faculty
    await faculty.save();

    res.json({ message: "Faculty updated successfully", faculty });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = editFaculty
