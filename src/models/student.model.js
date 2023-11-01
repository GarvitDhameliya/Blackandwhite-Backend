const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentSchema = new mongoose.Schema(
  {
    student_name: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "faculty", "subadmin", "student"],
    },
    course: {
        type: String,
        trim: true,
    },
    enrollment_number: {
        type: String,
        trim: true,
    },
    gr_id: {
        type: Number,
        default : 0,
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


const Student = mongoose.model("student", studentSchema);
module.exports = Student;
