const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const subadminSchema = new mongoose.Schema(
  {
    subadmin_name: {
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

    //faculty ref
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "faculty",
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

    //course ref
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
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


const Subadmin = mongoose.model("subadmin", subadminSchema);
module.exports = Subadmin;
