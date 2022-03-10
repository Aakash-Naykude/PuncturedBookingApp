const { Schema, model } = require("mongoose");

const shopSchema = new Schema(
  {
    shopname: { type: String },
    ownername: { type: String },
    email: { type: String },
    mobilenumber: { type: Number },
    image: { type: String },
    ratings: { type: Number },
    twoWheelerCharge: { type: Number },
    fourWheelerCharge: { type: Number },
    onlinePay: { type: String },
    Discounts: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("Shop", shopSchema);
