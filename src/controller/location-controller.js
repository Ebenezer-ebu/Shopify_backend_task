const { Location } = require("../models/locations");
const { Inventory } = require("../models/inventory");

const postLocation = async (req, res, next) => {
  try {
    const data = await Location.create(req.body);
    return res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

const addInventoryToLocation = async (req, res, next) => {
  const { id } = req.params;
  const { inventoryId } = req.body;
  try {
    const foundInventory = await Inventory.findById(inventoryId);
    if (foundInventory) {
      Location.findByIdAndUpdate(
        id,
        { $addToSet: { inventories: inventoryId } },
        { new: true, useFindAndModify: false }
      )
        .then((response) => {
          return res
            .status(201)
            .json({ message: "Inventory Added Successfully", response });
        })
        .catch((err) => {
          return res.status(404).json({ error: "No Location with such Id" });
        });
    } else {
      return res
        .status(404)
        .json({ error: `No Inventory with id ${inventoryId}` });
    }
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message.replace(/"/g, ""),
    });
  }
};

const getInventoryLocation = async (req, res) => {
  try {
    const data = await Location.find({}).populate("inventories");
    if (!data) {
      return res.status(404).json({ error: "Not locations found" });
    }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message.replace(/"/g, ""),
    });
  }
};

module.exports = { postLocation, addInventoryToLocation, getInventoryLocation };
