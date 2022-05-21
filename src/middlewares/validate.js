const Joi = require("joi");

const validateInventory = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
  });
  const value = schema.validate(req.body);
  if (value.error) {
    res
      .status(400)
      .json({ error: value.error.details[0].message.replace(/"/g, "") });
  }
  return next();
};

const validateEditInventory = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    price: Joi.number(),
  });
  const value = schema.validate(req.body);
  if (value.error) {
    res
      .status(400)
      .json({ error: value.error.details[0].message.replace(/"/g, "") });
  }
  return next();
};

const validatePostLocation = async (req, res, next) => {
  const schema = Joi.object({
    address: Joi.string().required(),
    inventories: Joi.string(),
  });
  const value = schema.validate(req.body);
  if (value.error) {
    res
      .status(400)
      .json({ error: value.error.details[0].message.replace(/"/g, "") });
  }
  return next();
};

const validateAddedInventory = async (req, res, next) => {
  const schema = Joi.object({
    inventoryId: Joi.string().required(),
  });
  const value = schema.validate(req.body);
  if (value.error) {
    res
      .status(400)
      .json({ error: value.error.details[0].message.replace(/"/g, "") });
  }
  return next();
};

module.exports = {
  validateInventory,
  validateEditInventory,
  validatePostLocation,
  validateAddedInventory,
};
