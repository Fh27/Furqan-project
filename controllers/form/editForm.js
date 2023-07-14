const Form = require("../../models/FormModel");

const editForm = async (req, res) => {
  try {
    const { formId } = req.params;
    const updatedForm = req.body;

    // Find the form by ID and update it
    const form = await Form.findByIdAndUpdate(formId, updatedForm, { new: true });

    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }

    res.json({ message: 'Form updated successfully', form });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = editForm;
