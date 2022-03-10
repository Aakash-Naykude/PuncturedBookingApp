const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const ShopController = require("./controlles/Shop.controller");
app.use("/shops", ShopController);
const cartController = require("./controlles/cart.controller");
app.use("/cart", cartController);

module.exports = app;
