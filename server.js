const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
require("colors");

// Load env vars
const envPath = path.join(__dirname, "/config/app.env");
dotenv.config({ path: envPath });

// Connect to database
connectDB();

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root quote
app.get("/", (req, res) => {
  res.send("Hello Developer, Your API is working fine.");
});

// Book routes
const bookRoutes = require("./routes/routes");

// Using as middleware
app.use("/api/v1/book", bookRoutes);

// setup server port
const port = process.env.PORT || 3000;

// listen for requests
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
