
const mongoose = require('mongoose');

  const DataScheme = new mongoose.Schema(
{
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
},
  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Data', DataSchema);