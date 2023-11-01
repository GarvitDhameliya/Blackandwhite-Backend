const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const batchSchema = new mongoose.Schema(
  {
    batch_name: {
      type: String,
      trim: true,
    },
    batch_status: {
        type: String,
        trim: true,
    },
    start_date:{
        type: Date,
    },
    end_date:{
        type: Date,
    },

    //faculty ref

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


const Batch = mongoose.model("batch", batchSchema);
module.exports = Batch;
