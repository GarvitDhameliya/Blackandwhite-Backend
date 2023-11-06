const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    student_name: {
      type: String,
      trim: true,
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


const Student = mongoose.model("student", studentSchema);
module.exports = Student;
