const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const subadminSchema = new mongoose.Schema(
  {
    subadmin_name: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "faculty", "subadmin", "student"],
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

    //faculty ref

    //student ref

    //batch ref

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
