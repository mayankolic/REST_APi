const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3
    },
    email: {
      type: String,
      required: true,
      unique: [true, "EMail id is already present"],
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new error("some error occurred while validating");
        }
      }
    },
    phone: {
      type: Number,
      min: 10,
      required: true,
      unique: true,
      // validate(value) {
      //   if (!validator.isnumber(value)) {
      //     throw new error("some error occurred ");
      //   }
      // }
    },
    address: {
      type: String,
      required: true,
    }

  })
  //we will createa new collection

const student = new mongoose.model('Student', studentSchema);

module.exports = student;