const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const facultySchema = new mongoose.Schema(
  {
    faculty_name: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "faculty", "subadmin", "student"],
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

    //user ref

    //student ref



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
