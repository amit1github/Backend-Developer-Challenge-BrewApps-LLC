const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async () => {
  db_url =
    process.env.MONGO_URI ||
    "mongodb://localhost:27017/backend-task-for-brewapps-llc";

  let mongooseConnection = await mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.info(
    `MongoDB Connected: ${mongooseConnection.connection.host}`.cyan.underline
      .bold
  );
};

module.exports = connectDB;
