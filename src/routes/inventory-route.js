const express = require("express");
const {
  createInventory,
  editInventory,
  getInventories,
  deleteInventory,
} = require("../controller/inventory-controller");
const {
  validateInventory,
  validateEditInventory,
} = require("../middlewares/validate");

const route = express.Router();

route.post("/api/inventory", validateInventory, createInventory);
route.patch("/api/inventory/:itemId", validateEditInventory, editInventory);
route.delete("/api/inventory/:itemId", deleteInventory);
route.get("/api/inventory", getInventories);

module.exports = route;
