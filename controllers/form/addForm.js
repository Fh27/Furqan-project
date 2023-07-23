const Form = require("../../models/FormModel");

const addForm = async (req, res) => {
    try {

       
      const formData = req.body;

      const { name, emailId, phoneNumber, schoolName, yearOfStudy, willLaptopBeUsed, reason } = formData;

      if (!name || !emailId || !phoneNumber || !schoolName || !yearOfStudy || !reason) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

  
      // Create a new form document
      const form = new Form(formData);
  
      // Save the form to the database
      await form.save();
  
      res.json({ message: 'Form added successfully', form });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  module.exports = addForm;
