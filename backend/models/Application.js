const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true
    },

    role: {
      type: String,
      required: [true, 'Job role is required'],
      trim: true
    },

    location: {
      type: String,
      trim: true,
      default: 'Not specified'
    },

    status: {
      type: String,
      enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
      default: 'Applied'
    },

    appliedDate: {
      type: Date,
      default: Date.now
    },

    jobLink: {
      type: String,
      trim: true,
      validate: {
        validator: function (value) {
          return !value || /^https?:\/\/.+/.test(value);
        },
        message: 'Please enter a valid URL'
      }
    },

    notes: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Application', applicationSchema);