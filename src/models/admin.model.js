const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    admin_name: {
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

    //subadmin ref
    subadmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subadmin",
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


const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
