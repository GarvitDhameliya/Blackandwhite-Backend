const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const facultySchema = new mongoose.Schema(
  {
    faculty_name: {
      type: String,
      trim: true,
    },
    department: {
        type: String,
        trim: true,
    },
    Permissions: {
      type: String,
      trim: true,
    },
    created_at:{
        type: Date,
    },
    updated_at:{
        type: Date,
    },


    //student ref
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
    },
    //batch ref
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "batch",
    },
    //signinsheet ref
    signinsheet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "signinsheet",
    },

    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const Faculty = mongoose.model("faculty", facultySchema);
module.exports = Faculty;
