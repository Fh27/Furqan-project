const mongoose=require('mongoose');
const formSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    emailId: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    schoolName: {
      type: String,
      required: true
    },
    yearOfStudy: [{
      type: String,
      enum: ['Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10']
    }],
    willLaptopBeUsed: {
      type: Boolean,
      required: true
    },
    reason: {
      type: String,
      required: true
    },
   
  }, {
    timestamps: true
  });
  
  const Form = mongoose.model('Form', formSchema);

module.exports = Form;