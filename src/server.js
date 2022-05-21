const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const inventoryRoute = require("./routes/inventory-route");
const locationRoute = require("./routes/location-route");

// Error handlers
const notFound = require("./middlewares/errorMiddlewares/notFound");
const errorHandler = require("./middlewares/errorMiddlewares/errorHandler");

require("dotenv").config();

const app = express();
const port = process.env.port || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", inventoryRoute);
app.use("/", locationRoute);

// Error handlers
app.use(notFound);
app.use(errorHandler);

//connect to mongodb
mongoose
  .connect(process.env.DB_COM)
  .then(() => console.log("connected to database successfully"))
  .catch((err) =>
    console.log("unable to connect to the database: ", err.message)
  );

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
