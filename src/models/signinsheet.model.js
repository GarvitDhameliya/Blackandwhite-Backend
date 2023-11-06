const mongoose = require("mongoose");

const signinsheetSchema = new mongoose.Schema(
  {
    signin_sheet_name: {
      type: String,
      trim: true,
    },
    //admin ref

    //subadmin ref

    //faculty ref

    //student ref

    //main topic ref


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


const Signinsheet = mongoose.model("signinsheet", signinsheetSchema);
module.exports = Signinsheet;
