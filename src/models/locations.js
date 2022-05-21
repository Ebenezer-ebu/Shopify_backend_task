const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      unique: true,
      required: true,
    },
    inventories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inventory",
      },
    ],
  },
  { timestamp: true }
);

const Location = mongoose.model("Location", locationSchema);

module.exports = { Location };
