const express = require("express");
const {
  postLocation,
  addInventoryToLocation,
  getInventoryLocation,
} = require("../controller/location-controller");
const {
  validatePostLocation,
  validateAddedInventory,
} = require("../middlewares/validate");
const route = express.Router();

route.post("/api/inventory-location", validatePostLocation, postLocation);
route.patch(
  "/api/inventory-location/:id",
  validateAddedInventory,
  addInventoryToLocation
);
route.get("/api/inventory-location", getInventoryLocation);

module.exports = route;
