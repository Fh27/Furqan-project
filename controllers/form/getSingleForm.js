const Form = require("../../models/FormModel");

const getSingleForm = async (req, res) => {
    try {
      const { formId } = req.params;
      if(!formId) return res.status(400).json({ error: 'Form ID is required' })
  
      // Find the form by ID
      const form = await Form.findById(formId);
  
      if (!form) {
        return res.status(404).json({ error: 'Form not found' });
      }
  
      res.json(form);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  module.exports =getSingleForm