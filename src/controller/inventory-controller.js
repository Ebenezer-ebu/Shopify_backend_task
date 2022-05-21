const { Inventory } = require("../models/inventory");

const createInventory = async (req, res) => {
  try {
    const data = await Inventory.create(req.body);
    return res
      .status(201)
      .json({ message: "Inventory created successfully", data });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const editInventory = (req, res) => {
  try {
    const { itemId } = req.params;
    const update = req.body;
    Inventory.findByIdAndUpdate(itemId, update, { new: true })
      .then((response) => {
        return res
          .status(201)
          .json({ message: "Inventory updated successfully", response });
      })
      .catch((err) => {
        return res
          .status(201)
          .json({ message: `Inventory ${itemId} doesn't exist` });
      });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getInventories = async (req, res) => {
  try {
    const data = await Inventory.find({});
    if (!data) {
      return res.status(404).json({ error: "Not inventory found" });
    }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deleteInventory = async (req, res) => {
  try {
    const { itemId } = req.params;
    Inventory.findByIdAndDelete(itemId)
      .then((response) => {
        return res
          .status(200)
          .json({ message: "Deleted successfully", response });
      })
      .catch((err) => {
        return res.status(404).json({ error: "Not inventory found" });
      });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createInventory,
  editInventory,
  getInventories,
  deleteInventory,
};
