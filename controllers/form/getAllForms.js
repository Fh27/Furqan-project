const Form = require("../../models/FormModel");


const getAllForms = async (req, res) => {
    try {
      const forms = await Form.find();
      res.json(forms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  module.exports = getAllForms