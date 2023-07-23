const mongoose = require('mongoose');

// Faculty Schema
const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  forms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form',
	required:true  
  }]
}, {
  timestamps: true
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
